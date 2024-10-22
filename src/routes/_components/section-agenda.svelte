<script lang="ts">
	import type { Schedule } from '$lib/types';

	export let schedule: Schedule[];
</script>

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
