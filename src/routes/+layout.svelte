<script>
	import '../app.css';
	import Logo from '$lib/components/icons/logo.svelte';
</script>

<svelte:head>
	<title>Hacktoberfest 2024 | GalsenDEV</title>
	<!-- TODO: Add Open Graph -->
	<!-- TODO: Add Twitter Card -->
	<!-- TODO: Add Facebook Open Graph -->
	<!-- TODO: Add favicon -->
</svelte:head>

<header class="container mx-auto p-4 sm:py-6">
	<nav class="flex items-center justify-between">
		<Logo />
		<button class="text-dark bg-green px-5 py-3 font-medium text-black hover:bg-green-light">
			Participer
		</button>
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
