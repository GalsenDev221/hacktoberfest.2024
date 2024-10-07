<script lang="ts">
	import GalsenDev from '$lib/components/icons/galsen-dev.svelte';
	import LogoMark from '$lib/components/icons/logo-mark.svelte';
	import Map from '$lib/components/icons/map.svelte';
	import Countdown from '$lib/components/ui/countdown.svelte';
</script>

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
			Cette annee rejoignez <span class="text-green">Galsen Dev</span> pour celebrer l'open source.
		</p>

		<p class="mt-2 flex items-center justify-center gap-2 text-green lg:justify-start">
			<Map />
			Impact Hub Dakar
		</p>

		<div class="mt-8">
			<Countdown />
		</div>
	</div>
</section>
