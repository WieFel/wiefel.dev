<script lang="ts">
	import Image from '$lib/components/atoms/Image.svelte';
	import type { Conference } from '$lib/utils/types';

	export let conference: Conference;

	$: alt = conference.title || 'Conference logo';
</script>

<div class="conference-item">
	<div class="logo">
		<a
			href={conference.url}
			target="_blank"
			rel="noopener noreferrer"
			aria-label="Visit {conference.title} website"
		>
			<Image src={conference.image} {alt} />
		</a>
	</div>
	{#if conference.title}
		<p class="title">{conference.title}</p>
	{/if}
	{#if conference.place}
		<p class="place">{conference.place}</p>
	{/if}
</div>

<style lang="scss">
	.conference-item {
		flex: 0 0 auto;
		width: 140px;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 8px;
		text-align: center;
	}

	.logo {
		width: 100%;
		height: 52px;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 0 4px;

		a {
			display: flex;
			align-items: center;
			justify-content: center;
			width: 100%;
			height: 100%;
		}

		:global(img) {
			max-width: 100%;
			max-height: 100%;
			width: auto;
			height: auto;
			object-fit: contain;
			transition: transform 0.25s ease;
			transform-origin: center center;
		}

		&:hover :global(img) {
			transform: scale(1.3);
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.logo :global(img) {
			transition: none;
		}

		.logo:hover :global(img) {
			transform: none;
		}
	}

	.title {
		font-size: 0.8rem;
		font-family: var(--font--title);
		font-weight: 600;
		line-height: 1.2;
	}

	.place {
		font-size: 0.7rem;
		color: rgba(var(--color--text-rgb), 0.65);
		line-height: 1.2;
	}
</style>
