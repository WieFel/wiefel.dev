<script lang="ts">
	import Card from '$lib/components/atoms/Card.svelte';
	import Tag from '$lib/components/atoms/Tag.svelte';
	import Android from '$lib/icons/android.svelte';
	import Apple from '$lib/icons/apple.svelte';
	import Dart from '$lib/icons/dart.svelte';
	import ExternalLink from '$lib/icons/external-link.svelte';
	import Github from '$lib/icons/socials/github.svelte';
	import type { Project, TagType } from '$lib/utils/types';
	import Image from '../atoms/Image.svelte';

	export let project: Project;
</script>

<Card additionalClass="project-card">
	<div class="image" slot="image">
		<Image src={project.image} alt="Picture describing the {project.name} project" />
	</div>
	<div class="content" slot="content">
		<div class="title">
			<span>{project.name}</span>
			<div class="links">
				{#if project.github}
					<a
						href={project.github}
						target="_blank"
						rel="noopener noreferrer"
						title="Open Source Code"
					>
						<Github />
					</a>
				{/if}
				{#if project.webpage}
					<a href={project.webpage} target="_blank" rel="noopener noreferrer" title="Open Webpage">
						<ExternalLink />
					</a>
				{/if}
				{#if project.playStore}
					<a
						href={project.playStore}
						target="_blank"
						rel="noopener noreferrer"
						title="Open on Play Store"
					>
						<Android />
					</a>
				{/if}
				{#if project.appStore}
					<a
						href={project.appStore}
						target="_blank"
						rel="noopener noreferrer"
						title="Open on Appstore"
					>
						<Apple />
					</a>
				{/if}
				{#if project.pubDev}
					<a
						href={project.pubDev}
						target="_blank"
						rel="noopener noreferrer"
						title="Open on pub.dev"
					>
						<Dart />
					</a>
				{/if}
			</div>
		</div>
		<p>{project.description}</p>
	</div>
	<div class="footer" slot="footer">
		{#if project.tags && project.tags.length > 0}
			<div class="tags">
				{#each project.tags as tag}
					<Tag color={tag.color}>{tag.label}</Tag>
				{/each}
			</div>
		{/if}
	</div>
</Card>

<style lang="scss">
	.content {
		display: flex;
		flex-direction: column;
		gap: 10px;
		align-items: flex-start;
	}

	.title {
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 100%;

		font-size: 1.2rem;
		font-family: var(--font--title);
		font-weight: 700;
	}

	.links {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 15px;

		a {
			width: 30px;
			height: 30px;
			padding: 3px;
			color: var(--color--secondary);

			&:hover {
				filter: drop-shadow(0px 0px 3px var(--color--secondary));
			}
		}
	}

	.tags {
		display: flex;
		align-items: center;
		gap: 5px;
		flex-wrap: wrap;
	}

	.footer {
		margin-top: 20px;
	}

	:global(.project-card .image img) {
		object-fit: cover;
	}
</style>
