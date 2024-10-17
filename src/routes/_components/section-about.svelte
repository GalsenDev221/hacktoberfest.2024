<script lang="ts">
	import ArrowLink from '$lib/components/icons/arrow-link.svelte';
</script>

<section class="relative my-10 bg-green">
	<div class="absolute inset-x-0 h-[140px] bg-black sm:h-[225px] lg:h-20"></div>
	<div class="absolute inset-x-0 bottom-0 bg-black lg:h-20"></div>

	<div class="container mx-auto items-center justify-between px-4 pb-8 lg:flex lg:py-8">
		<div class="relative overflow-hidden rounded-lg lg:w-[450px] xl:w-[500px]">
			<img
				class="h-[280px] w-full object-cover object-bottom sm:h-[450px] lg:h-[500px] lg:object-right"
				src="/hero.webp"
				alt="Hacktoberfest 2023"
			/>
			<div class="pointer-events-none absolute inset-0 bg-green/45 mix-blend-multiply"></div>
		</div>
		<div class="mt-4 lg:order-first lg:mt-0 lg:max-w-md">
			<h2 class="text-2xl font-medium text-black">Hacktoberfest x Galsen DEV.</h2>
			<p class="mt-2 text-black">
				Rejoignez-nous pour célébrer la quatrième édition du Hacktoberfest 2024 ! La communauté
				Galsen DEV vous invite à vous rassembler le 26 octobre pour partager, découvrir et
				apprendre. Cet événement mettra en avant une série de conférences dynamiques et de
				démonstrations interactives, animées par des experts issus de divers domaines.
				<br />
				Inscrivez-vous dès maintenant pour ne rien manquer !
			</p>
			<p class="mt-2 inline-flex items-center gap-2 text-black hover:underline">
				<ArrowLink />
				<a href="https://hacktoberfest.com" target="_blank">Site web Hacktoberfest</a>
			</p>
		</div>
	</div>
</section>
