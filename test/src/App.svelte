<script>
	//somehow capitalizing this made it work. Calling it xofy didn't work!
	//Oh maybe one is considered a custom element and one is considered a component...
	import Xofy from '../../xofy.svelte';

	export let x;
	export let y;

	console.log(Xofy)

</script>

<Xofy {x} {y} />
