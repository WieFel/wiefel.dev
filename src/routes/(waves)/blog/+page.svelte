<script lang="ts">
	import Card from '$lib/components/atoms/Card.svelte';
	import ContentSection from '$lib/components/organisms/ContentSection.svelte';
	import type { BlogArticle } from '$lib/utils/types';
	import dateformat from 'dateformat';

	export let data: {
		articles: BlogArticle[];
	};

	let { articles } = data;
</script>

<div class="container">
	<ContentSection title="All Blog Posts">
		<div class="grid">
			{#each articles as article}
				<Card
					href={article.url}
					target="_blank"
					rel="noopener noreferrer"
					additionalClass="blog-article-link"
				>
					<div class="content" slot="content">
						<p class="title">{article.title}</p>
						{#if article.date}
							<p class="date">{dateformat(article.date, 'dd mmm yyyy')}</p>
						{/if}
						{#if article.description}
							<p class="text">{article.description}</p>
						{/if}
					</div>
				</Card>
			{/each}
		</div>
	</ContentSection>
</div>

<style lang="scss">
	@import '$lib/scss/_mixins.scss';

	.grid {
		width: 100%;
		display: grid;
		grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
		grid-gap: 20px;

		@include for-tablet-portrait-down {
			grid-template-columns: 1fr;
		}

		@include for-tablet-landscape-up {
			// Select every 6 elements, starting from position 1
			// And make it take up 6 columns
			> :global(:nth-child(6n + 1)) {
				grid-column: span 6;
			}
			// Select every 6 elements, starting from position 2
			// And make it take up 3 columns
			> :global(:nth-child(6n + 2)) {
				grid-column: span 3;
			}
			// Select every 6 elements, starting from position 3
			// And make it take up 3 columns
			> :global(:nth-child(6n + 3)) {
				grid-column: span 3;
			}
			// Select every 6 elements, starting from position 4, 5 and 6
			// And make it take up 2 columns
			> :global(:nth-child(6n + 4)),
			:global(:nth-child(6n + 5)),
			:global(:nth-child(6n + 6)) {
				grid-column: span 2;
			}
		}
	}

	.title {
		font-size: 1.2rem;
		font-family: var(--font--title);
		font-weight: 700;
	}

	.date {
		font-size: 0.8rem;
		color: rgba(var(--color--text-rgb), 0.7);
		margin-top: 4px;
	}

	.text {
		margin-top: 5px;
		font-size: 0.9rem;
		text-align: justify;
		color: rgba(var(--color--text-rgb), 0.9);
	}
</style>
