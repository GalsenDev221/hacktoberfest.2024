<script lang="ts">
	import '../app.css';
	import Logo from '$lib/components/icons/logo.svelte';
	import type { LayoutData } from './$types';

	export let data: LayoutData;
	$: ({ eventURL } = data);
</script>

<svelte:head>
	<title>Hacktoberfest 2024 | GalsenDEV</title>
	<!-- TODO: Add Open Graph -->
	<!-- TODO: Add Twitter Card -->
	<!-- TODO: Add Facebook Open Graph -->
	<!-- TODO: Add favicon -->

	<script id="luma-checkout" src="https://embed.lu.ma/checkout-button.js"></script>
</svelte:head>

<header class="container mx-auto p-4 sm:py-6">
	<nav class="flex items-center justify-between">
		<Logo />

		<a
			href={eventURL}
			target="_blank"
			class="text-dark bg-green px-5 py-3 font-medium text-black hover:bg-green-light"
		>
			Participer
		</a>
	</nav>
</header>

<slot></slot>

<footer class="container mx-auto flex items-center justify-between px-4 py-10">
	<span>Tous droits réservés, 2024</span>
	<span>
		Made with ❤️ by
		<a class="underline" href="https://galsen.dev" target="_blank">GalsenDEV</a>
	</span>
</footer>
