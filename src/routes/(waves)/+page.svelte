<script lang="ts">
	import Hero from '$lib/components/organisms/Hero.svelte';
	import About from '$lib/components/organisms/About.svelte';
	import RecentPosts from '$lib/components/organisms/RecentPosts.svelte';
	import Projects from '$lib/components/organisms/Projects.svelte';
	import type { Project, BlogArticle, WorkExperience } from '$lib/utils/types';
	import Experience from '$lib/components/organisms/Experience.svelte';

	export let data: {
		projects: Project[];
		blogArticles: BlogArticle[];
		yearsOfExperience: number;
		workExperience: WorkExperience[];
	};

	let { projects, blogArticles, yearsOfExperience, workExperience } = data;
</script>

<div class="container">
	<Hero />
	<About />
	<Projects {projects} />
	<RecentPosts articles={blogArticles} />
	<Experience {yearsOfExperience} entries={workExperience} />
</div>
