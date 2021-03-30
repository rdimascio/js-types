/**
 * Demonstrates de-optimization of code with Turbofan.
 *
 * node --trace-opt --trace-deopt benchmarks/add-with-any-type.js
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

const point1 = new Point('10', iterations);
point1.add();
