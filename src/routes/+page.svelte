<script>
	import GalsenDev from '$lib/components/icons/galsen-dev.svelte';
	import LogoMark from '$lib/components/icons/logo-mark.svelte';
	import Logo from '$lib/components/icons/logo.svelte';
</script>

<header class="container mx-auto p-4 sm:py-6">
	<nav class="flex items-center justify-between">
		<Logo />
		<button class="text-dark bg-green px-5 py-3 font-medium text-black hover:bg-green-light">
			Participer
		</button>
	</nav>
</header>

<main>
	<h1 class="sr-only">GalsenDev x Hacktoberfest 2024</h1>

	<!-- NOTE: hero SECTION -->
	<section
		class="container mx-auto grid items-start justify-center gap-8 px-4 py-10 lg:grid-cols-[auto_auto] lg:justify-between"
	>
		<div class="flex items-center justify-center gap-8 lg:order-2">
			<GalsenDev />
			<span class="text-4xl font-medium">x</span>
			<LogoMark />
		</div>
		<div class="max-w-sm">
			<h2 class="text-center text-2xl font-medium text-green-light lg:text-left lg:text-4xl">
				Hacktoberfest 2024 <br />
				<span class="text-green">Galsen DEV</span>
			</h2>
			<p class="mt-4 text-center lg:text-left">
				Cette annee rejoignez <span class="text-green">Galsen Dev</span> pour celebrer l'open source
			</p>
			<div class="mt-8 flex h-20 items-center justify-center bg-green"></div>
		</div>
	</section>

	<!-- NOTE: about the event SECTION -->
	<section class="my-10 h-40 bg-green-light">
		<div class="container flex h-full items-center justify-center">
			<h2 class="text-black">About us here</h2>
		</div>
	</section>

	<!-- NOTE: speakers SECTION -->
	<section class="container mx-auto space-y-8 px-4 py-10">
		<h2 class="text-xl font-medium">Intervenants</h2>
		<ul
			class="mx-auto grid max-w-sm grid-cols-1 items-center gap-6 sm:max-w-full sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
		>
			{#each Array(10) as _}
				<li>
					<!-- TODO: make this a component that accepts the infos as props -->
					<article class="">
						<div
							id="avatar-here"
							class="aspect-video rounded-lg bg-pink-light sm:aspect-square"
						></div>
						<div class="mt-4 space-y-1 overflow-hidden">
							<h3 class="truncate text-lg font-medium leading-none" title="Modou Fall">
								Modou Fall
							</h3>
							<p class="text-green">Frontend Developer</p>
						</div>
					</article>
				</li>
			{/each}
		</ul>
	</section>

	<!-- NOTE: agenda SECTION -->
	<section class="container mx-auto space-y-8 px-4 py-10">
		<h2 class="text-xl font-medium">Programme</h2>

		<ul
			class="divide-y-[3px] divide-dashed divide-light/50 border-y-[3px] border-dashed border-light/50"
		>
			<li class="py-8">
				<!-- TODO: make this a component that accepts the infos as props -->
				<article class="grid grid-cols-1 items-center gap-4 sm:grid-cols-[200px_1fr]">
					<h3 class="text-xl font-medium leading-none text-green">08:00</h3>
					<div class="space-y-1">
						<h4 class="truncate text-lg font-medium" title="Mise en place">Mise en place</h4>
						<!-- <p>Modou FALL</p> -->
					</div>
				</article>
			</li>

			<li class="py-8">
				<article class="grid grid-cols-1 items-center gap-4 sm:grid-cols-[200px_1fr]">
					<h3 class="text-xl font-medium leading-none text-green">08:00</h3>
					<div class="space-y-1 overflow-hidden">
						<h4 class="truncate text-lg font-medium" title="Presentation #1">
							Presentation #1asdfsadfdsafdddddddddddddddddddddddddddddddd
						</h4>
						<p>Modou FALL</p>
					</div>
				</article>
			</li>
		</ul>
	</section>
</main>
