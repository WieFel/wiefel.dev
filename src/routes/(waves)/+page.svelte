<script lang="ts">
	import Hero from '$lib/components/organisms/Hero.svelte';
	import About from '$lib/components/organisms/About.svelte';
	import RecentPosts from '$lib/components/organisms/RecentPosts.svelte';
	import Services from '$lib/components/organisms/Services.svelte';
	import Projects from '$lib/components/organisms/Projects.svelte';
	import type { Project, BlogArticle, Service } from '$lib/utils/types';

	export let data: {
		services: Service[];
		projects: Project[];
		blogArticles: BlogArticle[];
	};

	let { services, projects, blogArticles } = data;
</script>

<div class="container">
	<Hero />
	<About />
	<Services {services} />
	<Projects {projects} />
	<RecentPosts articles={blogArticles} />
</div>
