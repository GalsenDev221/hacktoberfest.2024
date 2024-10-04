<script lang="ts">
	import type { PageData } from './$types';
	import GalsenDev from '$lib/components/icons/galsen-dev.svelte';
	import LogoMark from '$lib/components/icons/logo-mark.svelte';
	import Speaker from '$lib/components/ui/speaker.svelte';
	import Countdown from '$lib/components/ui/countdown.svelte';

	export let data: PageData;
	$: ({ speakers, schedule } = data);
</script>

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
	<section class="container mx-auto px-4 py-10">
		<h2 class="text-xl font-medium">Programme</h2>

		<ul
			class="mt-8 divide-y-[3px] divide-dashed divide-light/50 border-y-[3px] border-dashed border-light/50"
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

	<!-- NOTE: sponsors SECTION -->
	<section class="container mx-auto px-4 py-10">
		<h2 class="sr-only">Sponsors</h2>

		<article>
			<h3 class="text-2xl font-medium">Sponsor vedette</h3>
			<div
				class="mt-6 grid grid-cols-1 justify-between gap-6 rounded-lg bg-green p-8 lg:grid-flow-col lg:items-end"
			>
				<div class="text-black lg:max-w-sm">
					<!-- <h3 class="mb-2 text-2xl font-medium">Socium Job</h3> -->
					<p>
						Socium connecte les talents du monde entier aux entreprises africaines, offrant la
						promotion de la marque employeur, une gestion complète des processus de recrutement et
						l'accès à un large bassin de talents.
					</p>
				</div>

				<div class="mt-">
					<img src="/sponsor--socium-job.png" alt="sponsor xarala" />
				</div>
			</div>
		</article>

		<article class="mt-8">
			<h3 class="text-xl font-medium">Autres sponsors</h3>
			<ul class="mt-6 flex flex-wrap items-center items-center justify-center gap-x-10 gap-y-12">
				{#each Array(6) as _}
					<li class="flex-none">
						<a href="https://xarala.co" target="_blank">
							<img src="/sponsor--xarala.png" alt="sponsor xarala" />
						</a>
					</li>
				{/each}
			</ul>
		</article>
	</section>
</main>
