/* eslint-disable linebreak-style */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-console */
/* eslint-disable quotes */
/* eslint-disable arrow-body-style */
import gulp from "gulp";
import babel from "gulp-babel";
import del from "del";
import eslint from "gulp-eslint";
import webpack from "webpack-stream";
import mocha from "gulp-mocha";
import webpackConfig from "./webpack.config.babel";


const paths = {
  allSrcJs: "src/**/*.js",
  serverSrcJs: "src/server/**/*.js?(x)",
  sharedSrcJs: "src/shared/**/*.js?(x)",
  clientEntryPoint: "src/client/app.jsx",
  clientBundle: "dist/client-bundle.js?(.map)",
  gulpFile: "gulpfile.babel.js",
  webpackFile: "webpack.config.babel.js",
  libDir: "lib",
  distDir: "dir",
  allLibTests: "lib/test/**/*.js",
};

gulp.task("lint", () => {
  return gulp.src([
    paths.allSrcJs,
    paths.gulpFile,
    paths.webpackFile,
    paths.allLibTests,
  ])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});

gulp.task("clean", () => {
  return del([
    paths.libDir,
    paths.clientBundle,
  ]);
});

gulp.task("test", ["build"], () => {
  gulp.src(paths.allLibTests)
    .pipe(mocha());
});

gulp.task("build", ["lint", "clean"], () => {
  return gulp.src(paths.allSrcJs)
    .pipe(babel())
    .pipe(gulp.dest(paths.libDir));
});

gulp.task("main", ["test"], () => {
  return gulp.src(paths.clientEntryPoint)
    .pipe(webpack(webpackConfig))
    .pipe(gulp.dest(paths.distDir));
});

gulp.task("watch", () => {
  // gulp.watch(paths.allSrcJs, ["main"]);
  // gulp.watch(paths.gulpFile, ["main"]);
  // gulp.watch(paths.webpackFile, ["main"]);

  gulp.watch([
    paths.allSrcJs,
    paths.gulpFile,
    paths.webpackFile,
  ], ["main"]);
});

gulp.task("default", ["watch", "main"]);
