/**
 * Demonstrates the difference in execution duration between optimized vs deoptimized code.
 *
 * Run without tracing first to get a benchmark, then uncomment line 47 & 47, and run again
 * to show that the code is being optimized and deoptimized by Turbofan.
 * 
 * node benchmarks/add-measure-deoptimization.js
 * node --trace-opt --trace-deopt benchmarks/measure-deoptimization-impact.js | grep Point
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
performance.mark('start');

while (iterations--) {
    const point = new Point(10, iterations);
	point.add();
}

iterations = 1e7;

// Measure this file first commented, then uncomment this block and run again.
// const point = new Point('10', iterations);
// point.add();

while (iterations--) {
    const point = new Point(10, iterations);
	point.add();
}

performance.mark('end');
performance.measure('Benchmark', 'start', 'end');
