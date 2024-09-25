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
	// $: remainingSeconds = Math.floor((remaining % MINUTES) / SECONDS);

	$: if (Math.floor(remaining / SECONDS) <= 0) clearInterval(interval);
	$: isPastDue = remaining < 0;
</script>

<article>
	<h2 class="sr-only">Countdown</h2>

	{#if isPastDue}
		<p>LFG</p>
	{:else}
		<dl class="flex items-start justify-center gap-8 lg:justify-start">
			<div class="grid justify-center gap-1">
				<dt class="text-center text-4xl font-medium text-white">
					{remainingDays.toString().padStart(2, '0')}
				</dt>
				<dd class="text-sm capitalize tracking-widest text-green">Jours</dd>
			</div>
			<p class="text-4xl font-medium">:</p>
			<div class="grid justify-center gap-1">
				<dt class="text-center text-4xl font-medium text-white">
					{remainingHours.toString().padStart(2, '0')}
				</dt>
				<dd class="text-sm capitalize tracking-widest text-green">Heures</dd>
			</div>
			<p class="text-4xl font-medium">:</p>
			<div class="grid justify-center gap-1">
				<dt class="text-center text-4xl font-medium text-white">
					{remainingMinutes.toString().padStart(2, '0')}
				</dt>
				<dd class="text-sm capitalize tracking-widest text-green">Mins</dd>
			</div>
		</dl>
	{/if}
</article>
