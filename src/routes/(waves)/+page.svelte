<script lang="ts">
	import Hero from '$lib/components/organisms/Hero.svelte';
	import RecentPosts from '$lib/components/organisms/RecentPosts.svelte';
	import Services from '$lib/components/organisms/Services.svelte';
	import Conferences from '$lib/components/organisms/Conferences.svelte';
	import Projects from '$lib/components/organisms/Projects.svelte';
	import type { Project, BlogArticle, Service, Conference } from '$lib/utils/types';

	export let data: {
		services: Service[];
		conferences: Conference[];
		projects: Project[];
		blogArticles: BlogArticle[];
	};

	let { services, conferences, projects, blogArticles } = data;
</script>

<Hero />

<div class="container">
	<Services {services} />
	<Conferences {conferences} />
	<Projects {projects} />
	<RecentPosts articles={blogArticles} />
</div>
