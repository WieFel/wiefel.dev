<script lang="ts">
	import Card from '$lib/components/atoms/Card.svelte';
	import ContentSection from '$lib/components/organisms/ContentSection.svelte';
	import type { BlogArticle } from '$lib/utils/types';
	import Button from '$lib/components/atoms/Button.svelte';
	import dateformat from 'dateformat';

	export let articles: BlogArticle[];
</script>

<ContentSection
	id="recent-posts"
	title="Blog posts"
	description="This section shows the blog posts I wrote on Medium"
	align="left"
>
	<div slot="button">
		<Button href="/blog">View All</Button>
	</div>
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

<style lang="scss">
	@import '$lib/scss/breakpoints.scss';

	.grid {
		width: 100%;
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-gap: 20px;

		@include for-phone-only {
			grid-template-columns: 1fr;
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
		text-align: left;
		color: rgba(var(--color--text-rgb), 0.9);
	}
</style>
