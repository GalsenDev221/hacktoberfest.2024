<script lang="ts">
	import ArrowLink from '$lib/components/icons/arrow-link.svelte';
</script>

<section class="container mx-auto px-4 py-10">
	<h2 class="sr-only">Sponsors</h2>

	<article>
		<h3 class="text-2xl font-medium">Sponsor vedette</h3>
		<div
			class="mt-6 grid grid-cols-1 justify-between gap-8 rounded-lg bg-green p-8 lg:grid-flow-col lg:items-end"
		>
			<div class="text-black lg:max-w-sm">
				<p>
					Socium connecte les talents du monde entier aux entreprises africaines, offrant la
					promotion de la marque employeur, une gestion complète des processus de recrutement et
					l'accès à un large bassin de talents.
				</p>
				<p class="mt-2 inline-flex items-center gap-2 hover:underline">
					<ArrowLink />
					<a href="https://sociumjob.com" target="_blank">Site web</a>
				</p>
			</div>

			<img src="/sponsor-socium-job.webp" alt="sponsor xarala" />
		</div>
	</article>

	<article class="mt-12">
		<h3 class="text-xl font-medium">Partenaires</h3>
		<ul class="mt-6 flex flex-wrap justify-start gap-x-10 gap-y-12">
			<li class="flex-none">
				<a href="https://xarala.co" target="_blank">
					<img class="h-12" src="/partner-xarala.webp" alt="sponsor xarala" />
				</a>
			</li>
			<li class="flex-none">
				<a href="https://dakar.impacthub.net" target="_blank">
					<img class="h-12" src="/partner-impact-hub-dakar.webp" alt="sponsor xarala" />
				</a>
			</li>
		</ul>
	</article>
</section>
