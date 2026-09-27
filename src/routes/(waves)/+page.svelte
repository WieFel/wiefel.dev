<script lang="ts">
	import Hero from '$lib/components/organisms/Hero.svelte';
	import About from '$lib/components/organisms/About.svelte';
	import RecentPosts from '$lib/components/organisms/RecentPosts.svelte';
	import Projects from '$lib/components/organisms/Projects.svelte';
	import type { Project, BlogArticle } from '$lib/utils/types';

	export let data: {
		projects: Project[];
		blogArticles: BlogArticle[];
	};

	let { projects, blogArticles } = data;
</script>

<div class="container">
	<Hero />
	<About />
	<Projects {projects} />
	<RecentPosts articles={blogArticles} />
</div>
