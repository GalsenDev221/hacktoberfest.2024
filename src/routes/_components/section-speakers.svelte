<script lang="ts">
	import type { Speaker } from '$lib/types';
	import Linkedin from '$lib/components/icons/linkedin.svelte';
	import TwitterX from '$lib/components/icons/twitter-x.svelte';
	import Github from '$lib/components/icons/github.svelte';

	const iconMap = {
		linkedin: Linkedin,
		github: Github,
		twitter: TwitterX
	};

	export let speakers: Speaker[];
</script>

<section class="container mx-auto space-y-8 px-4 py-10">
	<h2 class="text-xl font-medium">Intervenants</h2>
	<ul
		class="mx-auto grid max-w-sm grid-cols-1 items-center gap-6 sm:max-w-full sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
	>
		{#each speakers as speaker, i (i)}
			<li>
				<figure>
					<div class="relative aspect-video overflow-hidden rounded-lg sm:aspect-square">
						<img src={speaker.photo} alt={speaker.name} class="h-full w-full object-cover" />
						<div
							class="absolute inset-0 bg-gradient-to-t from-black/90 opacity-0 transition-opacity duration-500 hover:opacity-100"
						>
							<ul class="-my-4 mx-4 flex h-full items-end justify-end gap-4">
								{#if speaker.socials}
									{#each speaker.socials as { name, href }}
										<li>
											<a {href} target="_blank"><svelte:component this={iconMap[name]} /></a>
										</li>
									{/each}
								{:else}
									👻 Caveman
								{/if}
							</ul>
						</div>
					</div>
					<figcaption class="mt-4 space-y-1 overflow-hidden">
						<h3 class="truncate text-lg font-medium leading-none" title={speaker.name}>
							{speaker.name}
						</h3>
						<p title={speaker.role} class="truncate text-green">{speaker.role}</p>
					</figcaption>
				</figure>
			</li>
		{/each}
	</ul>
</section>
