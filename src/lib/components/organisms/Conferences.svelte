<script lang="ts">
	import type { Conference } from '$lib/utils/types';
	import ConferenceCard from '$lib/components/molecules/ConferenceCard.svelte';
	import ContentSection from '$lib/components/organisms/ContentSection.svelte';

	export let conferences: Conference[];
</script>

<ContentSection
	id="conferences"
	title="Conferences"
	description="Events and conferences I've attended"
>
	<div class="marquee" aria-label="Conferences attended">
		<div class="marquee-track">
			{#each conferences as conference, i (i)}
				<ConferenceCard {conference} />
			{/each}
			{#each conferences as conference, i (`dup-${i}`)}
				<div class="marquee-duplicate" aria-hidden="true">
					<ConferenceCard {conference} />
				</div>
			{/each}
		</div>
	</div>
</ContentSection>

<style lang="scss">
	.marquee {
		width: 100%;
		overflow: hidden;
		mask-image: linear-gradient(to right, transparent, black 8%, black 92%, transparent);
	}

	.marquee-track {
		display: flex;
		align-items: flex-start;
		gap: 48px;
		width: max-content;
		padding: 8px 0;
		animation: marquee-scroll 35s linear infinite;

		&:hover {
			animation-play-state: paused;
		}
	}

	.marquee-duplicate {
		display: contents;
	}

	@keyframes marquee-scroll {
		from {
			transform: translateX(0);
		}
		to {
			transform: translateX(-50%);
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.marquee {
			mask-image: none;
			overflow-x: auto;
			-webkit-overflow-scrolling: touch;
		}

		.marquee-track {
			animation: none;
			padding-bottom: 8px;
		}
	}
</style>
