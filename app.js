const test = () => console.trace("Hello World!!!");

const calcTime = () => {
	console.time("time");
	for (let i = 0; i < 10000000; i++) {}
	test();
	console.timeEnd("time");
};
calcTime();
