class Vec {
    constructor(x, y) {
      this.x = x;
      this.y = y;
    }
  
    plus(otherVec) {
      return new Vec(this.x + otherVec.x, this.y + otherVec.y);
    }
  
    minus(otherVec) {
      return new Vec(this.x - otherVec.x, this.y - otherVec.y);
    }
  
    get length() {
      return Math.sqrt(this.x * this.x + this.y * this.y);
    }
  }

  console.log(`
  In the constructor, we save the x and y parameters as properties of the new object.

In the plus method, we create a new Vec object whose x and y properties are the sum of the corresponding properties of the two vectors.

In the minus method, we create a new Vec object whose x and y properties are the difference of the corresponding properties of the two vectors.

In the length getter, we use the Pythagorean theorem to compute the length of the vector as the square root of the sum of the squares of its x and y components.

With this implementation, the code you provided should produce the expected output:
  
  `)
  console.log(new Vec(1, 2).plus(new Vec(2, 3)));
// → Vec{x: 3, y: 5}
console.log(new Vec(1, 2).minus(new Vec(2, 3)));
// → Vec{x: -1, y: -1}
console.log(new Vec(3, 4).length);
// → 5
