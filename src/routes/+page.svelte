<script lang="ts">
	import type { PageData } from './$types';
	import SectionHero from './_components/section-hero.svelte';
	import SectionAbout from './_components/section-about.svelte';
	import SectionSpeakers from './_components/section-speakers.svelte';
	import SectionAgenda from './_components/section-agenda.svelte';
	import SectionSponsors from './_components/section-sponsors.svelte';

	export let data: PageData;
	$: ({ speakers, schedule } = data);
</script>

<main>
	<h1 class="sr-only">GalsenDev x Hacktoberfest 2024</h1>

	<SectionHero />
	<SectionAbout />
	<SectionSpeakers {speakers} />
	<SectionAgenda {schedule} />
	<SectionSponsors />
</main>
