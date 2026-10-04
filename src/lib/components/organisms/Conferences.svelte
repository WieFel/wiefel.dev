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
			<div class="marquee-group">
				{#each conferences as conference, i (i)}
					<ConferenceCard {conference} />
				{/each}
			</div>
			<div class="marquee-group" aria-hidden="true">
				{#each conferences as conference, i (`dup-${i}`)}
					<ConferenceCard {conference} />
				{/each}
			</div>
		</div>
	</div>
</ContentSection>

<style lang="scss">
	$marquee-gap: 48px;

	.marquee {
		width: 100%;
		overflow: hidden;
		mask-image: linear-gradient(to right, transparent, black 8%, black 92%, transparent);
	}

	.marquee-track {
		display: flex;
		width: max-content;
		padding: 8px 0;
		animation: marquee-scroll 35s linear infinite;
		will-change: transform;

		&:hover {
			animation-play-state: paused;
		}
	}

	.marquee-group {
		display: flex;
		align-items: flex-start;
		flex: 0 0 auto;
		gap: $marquee-gap;
		// Trailing space matches inter-item gap so -50% aligns with the duplicate set.
		padding-right: $marquee-gap;
	}

	@keyframes marquee-scroll {
		from {
			transform: translate3d(0, 0, 0);
		}
		to {
			transform: translate3d(-50%, 0, 0);
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
