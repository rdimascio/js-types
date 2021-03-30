/**
 * Demonstrates execution of code without Turbofan optimization.
 *
 * node --trace-opt --allow-natives-syntax benchmarks/add-without-optimize.js
 */

const {
	performance,
	PerformanceObserver,
} = require('perf_hooks');

const obs = new PerformanceObserver((perfObserverList, observer) => {
	const [measure] = perfObserverList.getEntriesByName('Benchmark');
	console.log(measure.duration);
	observer.disconnect();
});

// SETUP 🏁

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

obs.observe({ entryTypes: ['mark', 'measure'], buffered: true });

// 🔚 SETUP

performance.mark('start');

// EXERCISE 💪

%NeverOptimizeFunction(Point);

while (iterations--) {
    const point = new Point(10, iterations);
	point.add();
}

// 🔚 EXERCISE

performance.mark('end');
performance.measure('Benchmark', 'start', 'end');
