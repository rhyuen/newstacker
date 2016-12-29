/* eslint-disable quotes, linebreak-style */
/* eslint-disable import/no-extraneous-dependencies, no-console */

import chai from "chai";
import { stub } from "sinon";
import sinonChai from "sinon-chai";
import { describe, it } from "mocha";
import Dog from "../../shared/dog";

chai.should();
chai.use(sinonChai);

describe("Shared", () => {
  describe("Dog", () => {
    describe("barkInConsole", () => {
      it("should print a bark string with its name", () => {
        stub(console, "log");
        new Dog("Test Dog").barkInConsole();
        console.log.should.have.been.calledWith("I am a dog.  Woof.  I am Test Dog");
        console.log.restore();
      });
    });
  });
});
