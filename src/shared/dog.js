/* eslint-disable linebreak-style */

class Dog {
  constructor(name) {
    this.name = name;
  }

  bark() {
    return `I am a dog.  Woof.  I am ${this.name}`;
  }

  barkInConsole() {
    /* eslint-disable no-console */
    console.log(this.bark());
    /* eslint-enable no-console */
  }
}

export default Dog;
