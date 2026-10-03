<script>
	import Socials from '$lib/components/molecules/Socials.svelte';
	import Waves from '$lib/components/organisms/Waves.svelte';
</script>

<section id="hero">
	<div class="container">
		<h1 class="hello">Hi, I'm Felix!</h1>
		<p class="intro">
			Full-Stack Developer & Open Source Contributor. Offering seamless mobile and web experiences
			using Flutter and AI. Dedicated to simplicity, maintainability and clean code.
		</p>
		<p class="discover">
			Discover my
			<a href="#projects">projects</a>
			and
			<a href="#recent-posts">blog posts</a>
		</p>
		<div class="socials">
			<Socials />
		</div>
	</div>
	<Waves />
</section>

<style lang="scss">
	@import '$lib/scss/breakpoints.scss';

	#hero {
		position: relative;
		display: flex;
		flex-direction: column;

		&::before {
			content: '';
			position: absolute;
			top: -10rem;
			bottom: 0;
			left: 50%;
			width: 100vw;
			transform: translateX(-50%);
			background: linear-gradient(
				60deg,
				var(--color--waves-start) 0%,
				var(--color--waves-end) 100%
			);
		}

		.container,
		:global(.waves) {
			position: relative;
			z-index: 1;
		}

		.container {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			gap: 32px;
			padding-top: 96px;
			padding-bottom: 96px;

			@include for-phone-only {
				padding-top: 64px;
				padding-bottom: 64px;
			}
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
