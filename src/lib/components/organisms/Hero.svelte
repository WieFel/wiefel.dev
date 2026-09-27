<script>
	import Socials from '$lib/components/molecules/Socials.svelte';
</script>

<section id="hero">
	<h1 class="hello">Hi, I'm Felix!</h1>
	<p class="intro">
		Full-Stack Developer & Open Source Contributor. I build seamless mobile and web experiences
		using Flutter and AI. Dedicated to clean code, community growth, and pushing the limits of
		modern tech.
	</p>
	<p class="discover">
		Discover the
		<a href="#projects">projects</a>
		I worked on and my
		<a href="#recent-posts">recent posts</a>
	</p>
	<div class="socials">
		<Socials />
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
			text-align: center;
		}

		.discover {
			font-size: 1.15rem;
			font-weight: 600;
			text-align: center;
			width: min(100%, 768px);

			a {
				color: var(--color--secondary);
				text-decoration: none;

				&:hover {
					text-decoration: underline;
				}
			}
		}

		.socials {
			display: flex;
			align-items: center;
			justify-content: center;
		}
	}
</style>
