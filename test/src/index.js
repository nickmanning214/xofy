import App from './App.svelte';
import { normalize, sleep } from './utils.js';
import { assert, test, done } from 'tape-modern';

// setup
const target = document.querySelector('main');

assert.htmlEqual = (a, b, msg) => {
	assert.equal(normalize(a), normalize(b), msg);
};

// tests
test('with no data, creates nothing', async t => {
	const app = new App({
		target
	});

	t.htmlEqual(target.innerHTML, ``);

	app.$destroy();
});

test('allows x and y prop to be passed', async t => {
	const app = new App({
		target,
		props: {
			x: 2,
			y:4
		}
	});
	await sleep(1);
	t.htmlEqual(target.innerHTML, `
	<article>
		2 of 4
	</article>
`);


	app.$destroy();
});



// this allows us to close puppeteer once tests have completed
window.done = done;
