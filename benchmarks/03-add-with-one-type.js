/**
 * Demonstrates optimization of code with Turbofan.
 *
 * node --trace-opt --trace-deopt benchmarks/03-add-with-one-type.js
 */

let iterations = 1e7;

class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    add() {
        return this.x + this.y;
    }
}

while (iterations--) {
    const point = new Point(10, iterations);
	point.add();
}
