/* eslint-disable linebreak-style */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-console */
/* eslint-disable quotes */
/* eslint-disable arrow-body-style */
import gulp from "gulp";
import babel from "gulp-babel";
import del from "del";
import eslint from "gulp-eslint";
import { exec } from "child_process";

const paths = {
  allSrcJs: "src/**/*.js",
  gulpFile: "gulpfile.babel.js",
  libDir: "lib",
};

gulp.task("lint", () => {
  return gulp.src([
    paths.allSrcJs,
    paths.gulpFile,
  ])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});

gulp.task("clean", () => {
  return del(paths.libDir);
});

gulp.task("build", ["lint", "clean"], () => {
  return gulp.src(paths.allSrcJs)
    .pipe(babel())
    .pipe(gulp.dest(paths.libDir));
});

gulp.task("main", ["build"], (done) => {
  exec(`node ${paths.libDir}`, (err, stdout) => {
    console.log(stdout);
    return done(err);
  });
});

gulp.task("watch", () => {
  gulp.watch(paths.allSrcJs, ["main"]);
  gulp.watch(paths.gulpFile, ["main"]);
});

gulp.task("default", ["watch", "main"]);
