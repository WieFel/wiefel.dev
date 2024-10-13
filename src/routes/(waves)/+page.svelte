<script lang="ts">
	import Hero from '$lib/components/organisms/Hero.svelte';
	import About from '$lib/components/organisms/About.svelte';
	// import RecentPosts from '$lib/components/organisms/RecentPosts.svelte';
	import Projects from '$lib/components/organisms/Projects.svelte';
	import type { Project, BlogPost, WorkExperience } from '$lib/utils/types';
	import Experience from '$lib/components/organisms/Experience.svelte';

	export let data: {
		projects: Project[];
		posts: BlogPost[];
		yearsOfExperience: number;
		workExperience: WorkExperience[];
	};

	let { projects, posts, yearsOfExperience, workExperience } = data;
</script>

<div class="container">
	<Hero />
	<About />
	<!-- {#if posts && posts.length > 0}
		<RecentPosts {posts} />
	{/if} -->
	<Projects {projects} />
	<Experience {yearsOfExperience} entries={workExperience} />
</div>
