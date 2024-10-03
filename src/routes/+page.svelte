<script lang="ts">
	import type { PageData } from './$types';
	import GalsenDev from '$lib/components/icons/galsen-dev.svelte';
	import LogoMark from '$lib/components/icons/logo-mark.svelte';
	import Logo from '$lib/components/icons/logo.svelte';
	import Speaker from '$lib/components/ui/speaker.svelte';
	import Countdown from '$lib/components/ui/countdown.svelte';

	export let data: PageData;
	$: ({ speakers, schedule } = data);
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
			<div class="mt-8">
				<Countdown />
			</div>
		</div>
	</section>

	<!-- NOTE: about the event SECTION -->
	<section class="relative my-10 bg-green">
		<div class="absolute inset-x-0 h-[140px] bg-black sm:h-[225px] lg:h-20"></div>
		<div class="absolute inset-x-0 bottom-0 bg-black lg:h-20"></div>

		<div class="container mx-auto items-center justify-between px-4 pb-8 lg:flex lg:py-8">
			<div class="relative overflow-hidden rounded-lg lg:w-[450px] xl:w-[500px]">
				<img
					class="h-[280px] w-full object-cover object-bottom sm:h-[450px] lg:h-[500px] lg:object-right"
					src="/hero.png"
					alt="Hacktoberfest 2023"
				/>
				<div class="pointer-events-none absolute inset-0 bg-green/45 mix-blend-multiply"></div>
			</div>
			<div class="mt-4 lg:order-first lg:mt-0 lg:max-w-md">
				<h2 class="text-2xl font-medium text-black">Hacktoberfest</h2>
				<p class="mt-2 text-black">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni blanditiis veniam saepe,
					deserunt sunt vel fuga quis ipsum cumque commodi asperiores corporis veritatis accusantium
					quae! Similique est autem nobis vero.
				</p>
			</div>
		</div>
	</section>

	<!-- NOTE: speakers SECTION -->
	<section class="container mx-auto space-y-8 px-4 py-10">
		<h2 class="text-xl font-medium">Intervenants</h2>
		<ul
			class="mx-auto grid max-w-sm grid-cols-1 items-center gap-6 sm:max-w-full sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
		>
			{#each speakers as speaker, i (i)}
				<li><Speaker {speaker} /></li>
			{/each}
		</ul>
	</section>

	<!-- NOTE: agenda SECTION -->
	<section class="container mx-auto grid grid-cols-1 gap-8 px-4 py-10 lg:grid-cols-5">
		<div class="col-span-2">
			<h2 class="text-xl font-medium">Programme</h2>

			<div class="mt-20 hidden lg:block">
				<p>Illustration ici</p>
			</div>
		</div>

		<ul
			class="col-span-3 divide-y-[3px] divide-dashed divide-light/50 border-y-[3px] border-dashed border-light/50"
		>
			{#each schedule as { title, time, speaker } (title)}
				<li class="flex h-32 items-center sm:h-24">
					<article class="grid grid-cols-1 items-center gap-2 sm:grid-cols-[200px_1fr]">
						<h3 class="text-xl font-medium leading-none text-green">{time}</h3>
						<div class="space-y-1 overflow-hidden">
							<h4 class="truncate text-lg font-medium" {title}>
								{title}
							</h4>
							{#if speaker}
								<p class="text-beige">{speaker}</p>
							{/if}
						</div>
					</article>
				</li>
			{/each}
		</ul>
	</section>
</main>
