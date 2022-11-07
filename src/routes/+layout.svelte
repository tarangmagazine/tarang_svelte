<script>
	import '../app.css';
	import { onMount } from 'svelte';

	
	/**
	 * @type {HTMLDivElement}
	 */
	let menuDiv;
	let togglePushed = false;

	function toggleMenu() {
		let mobileMenuDisplay = menuDiv.style.display;
		togglePushed = !togglePushed;
		if (mobileMenuDisplay === 'none') {
			menuDiv.style.display = 'block';
		} else {
			menuDiv.style.display = 'none';
		}
	}
	// Media match query handler

	const mediaQueryHandler = (/** @type {{ matches: any; }} */ e) => {
		// Reset mobile state
		if (!e.matches) {
			menuDiv.style.display = 'block';
		}
		else {
			menuDiv.style.display = 'none';
		}
	};

	// Attach media query listener on mount hook
	onMount(() => {
		// mediaQueryList object handles sending notifications to listener when the media query state changes.
		const mediaQueryList = window.matchMedia('(max-width: 767px)');
		mediaQueryList.addEventListener('change', mediaQueryHandler);
	});

</script>

<nav class="flex justify-between bg-white-500">
	<div class="m-8 block md:flex">
		<div><a href="/">Tarang</a></div>
		<div bind:this={menuDiv} class="hidden md:block justify-end md:px-4">
			<ul class="md:flex justify-end block">
				<li class="md:px-3"><a href="/current_edition">Current Edition</a></li>
				<li class="md:px-3"><a href="/previous_editions">Previous Edition</a></li>
				<li class="md:px-3"><a href="/about">About Us</a></li>
			</ul>
		</div>
	</div>
	<div
		class="block md:hidden hover:cursor-pointer m-8 relative justify-end rounded-lg border-solid border-2 border-black-900 p-2 w-12 h-12"
		on:click={toggleMenu}
	>
		<div class="my-1 w-7 h-1 bg-black" />
		<div class="my-1 w-7 h-1 bg-black" />
		<div class="my-1 w-7 h-1 bg-black" />
	</div>
</nav>
<slot />


<footer class="flex justify-between bg-white-500">
	<div class="m-8 block bottom-0">
		<ul class="md:flex justify-end block">
			<li class="md:px-3"><a href="www.twitter.com">Twitter</a></li>
			<li class="md:px-3"><a href="www.facebook.com">Facebook</a></li>
			<li class="md:px-3"><a href="whatsapp.com">WhatsApp</a></li>
		</ul>
	</div>
</footer>