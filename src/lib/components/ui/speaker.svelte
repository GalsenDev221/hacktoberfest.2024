<script lang="ts">
	import Linkedin from '$lib/components/icons/linkedin.svelte';
	import TwitterX from '$lib/components/icons/twitter-x.svelte';
	import Github from '$lib/components/icons/github.svelte';

	type Social = {
		name: 'linkedin' | 'github' | 'twitter';
		href: string;
	};

	type Speaker = {
		photo?: string;
		name: string;
		role: string;
		socials?: Social[];
	};

	export let speaker: Speaker;

	const iconMap = {
		linkedin: Linkedin,
		github: Github,
		twitter: TwitterX
	};
</script>

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
		<h3 class="truncate text-lg font-medium leading-none" title={speaker.name}>{speaker.name}</h3>
		<p title={speaker.role} class="truncate text-green">{speaker.role}</p>
	</figcaption>
</figure>
