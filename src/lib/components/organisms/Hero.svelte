<script>
	import ProjectsIcon from '$lib/icons/projects.svelte';
	import ExperienceIcon from '$lib/icons/experience.svelte';
	import Button from '$lib/components/atoms/Button.svelte';
	import Sparkles from '../atoms/Sparkles.svelte';
</script>

<section id="hero">
	<h1 class="hello">Hi, I'm Felix!</h1>
	<p class="intro">
		Full-Stack Developer & Open Source Contributor. I build seamless mobile and web experiences
		using Flutter and AI. Dedicated to clean code, community growth, and pushing the limits of
		modern tech.
	</p>
	<div class="ctas">
		<Sparkles>
			<Button href="#projects">
				<ProjectsIcon slot="icon" />
				Projects
			</Button>
		</Sparkles>
		<Button color="primary" href="#experience">
			<ExperienceIcon slot="icon" />
			Experience
		</Button>
	</div>
</section>

<style lang="scss">
	@import '$lib/scss/breakpoints.scss';

	#hero {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 32px;
		position: relative;
		padding: 96px 0;

		@include for-phone-only {
			padding: 64px 0;
		}

		.hello {
			text-align: center;
		}

		.intro {
			font-weight: 500;
			font-size: 18px;
			width: min(100%, 768px);
			display: flex;
			flex-direction: column;
			text-align: justify;

			// @include for-phone-only {
			// 	display: none;
			// }
		}

		.ctas {
			display: flex;
			flex-wrap: wrap;
			align-items: center;
			justify-content: center;
			gap: 24px;
			width: 100%;
		}
	}
</style>
