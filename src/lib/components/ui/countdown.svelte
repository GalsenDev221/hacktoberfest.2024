<script lang="ts">
	const SECONDS = 1000,
		MINUTES = SECONDS * 60,
		HOURS = MINUTES * 60,
		DAYS = HOURS * 24;

	const endDate = new Date('October, 26 2024 00:00:00');
	let remaining: number;

	function updateCountdown() {
		remaining = endDate.getTime() - new Date().getTime();
	}
	updateCountdown();
	const interval = setInterval(updateCountdown, 1000);

	$: remainingDays = Math.floor(remaining / DAYS);
	$: remainingHours = Math.floor((remaining % DAYS) / HOURS);
	$: remainingMinutes = Math.floor((remaining % HOURS) / MINUTES);
	$: remainingSeconds = Math.floor((remaining % MINUTES) / SECONDS);

	$: isPastDue = remaining < 0;
	$: if (Math.floor(remaining / SECONDS) <= 0) clearInterval(interval);
	$: countdownMap = [
		{ label: 'Jours', value: remainingDays },
		{ label: 'Heures', value: remainingHours },
		{ label: 'Minutes', value: remainingMinutes },
		{ label: 'Secondes', value: remainingSeconds }
	];
</script>

<article>
	<h2 class="sr-only">Countdown</h2>

	{#if isPastDue}
		<p>LFG</p>
	{:else}
		<dl class="flex items-start justify-center gap-5 lg:justify-start">
			{#each countdownMap as { label, value }, i (i)}
				<div class="space-y-1 text-center">
					<dt class="text-4xl font-medium text-white">{value.toString().padStart(2, '0')}</dt>
					<dd class="text-sm capitalize tracking-widest text-green">{label}</dd>
				</div>

				{#if i < countdownMap.length - 1}
					<p class="text-4xl font-medium">:</p>
				{/if}
			{/each}
		</dl>
	{/if}
</article>
