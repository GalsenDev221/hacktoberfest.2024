<script lang="ts">
	import '../app.css';
	import Logo from '$lib/components/icons/logo.svelte';
	import type { LayoutData } from './$types';

	export let data: LayoutData;
	$: ({ eventURL } = data);
</script>

<svelte:head>
	<title>Hacktoberfest 2024 | Galsen DEV</title>
	<script id="luma-checkout" src="https://embed.lu.ma/checkout-button.js"></script>

	<!-- OG Meta Tags -->
	<meta property="og:url" content="https://hfest24.galsen.dev" />
	<meta property="og:type" content="website" />
	<meta
		property="og:image"
		content="https://res.cloudinary.com/degyjrpjj/image/upload/v1729083508/galsendev/hacktoberfest/ij6cwmhylk1akjs2t0i9.png"
	/>
	<meta property="og:title" content="Hacktoberfest 2024 | Galsen DEV" />
	<meta
		property="og:description"
		content="Rejoignez-nous pour célébrer la quatrième édition du Hacktoberfest 2024 !"
	/>
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />

	<!-- Twitter Meta Tags -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta property="twitter:domain" content="hfest24.galsen.dev" />
	<meta property="twitter:url" content="https://hfest24.galsen.dev" />
	<meta name="twitter:title" content="Hacktoberfest 2024 | Galsen DEV" />
	<meta
		name="twitter:description"
		content="Rejoignez-nous pour célébrer la quatrième édition du Hacktoberfest 2024 !"
	/>
	<meta
		name="twitter:image"
		content="https://res.cloudinary.com/degyjrpjj/image/upload/v1729083508/galsendev/hacktoberfest/ij6cwmhylk1akjs2t0i9.png"
	/>
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
	<span>Tous droits réservés, 2024.</span>
	<span>
		❤️ by
		<a class="underline" href="https://galsen.dev" target="_blank">Galsen DEV</a>
	</span>
</footer>
