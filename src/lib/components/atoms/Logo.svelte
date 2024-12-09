<script>
	export let animated = true;
</script>

<div class="logo" class:animated>
	<svg
		id="logo-text"
		width="512"
		height="256"
		viewBox="0 0 512 256"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<g clip-path="url(#clip0_32_2)">
			<path
				id="text"
				d="M74.57 129.35H172.01V167.05H74.57V129.35ZM78.05 241H31.07V38H184.48V75.7H78.05V241ZM238.905 241L172.495 38H221.215L278.925 217.8H254.565L314.885 38H358.385L416.385 217.8H392.895L452.055 38H497.005L430.595 241H380.135L328.805 83.24H342.145L289.365 241H238.905Z"
				fill="url(#gradient)"
			/>
		</g>
		<defs>
			<linearGradient
				id="gradient"
				x1="7"
				y1="-40"
				x2="486.036"
				y2="318.972"
				gradientUnits="userSpaceOnUse"
			>
				<stop stop-color="#219F86" />
				<stop offset="1" stop-color="#15499C" />
			</linearGradient>
			<clipPath id="clip0_32_2">
				<rect width="512" height="256" fill="white" />
			</clipPath>
		</defs>
	</svg>
</div>

<style lang="scss">
	@import '$lib/scss/breakpoints.scss';

	.logo {
		width: auto;
		height: 50px;

		display: flex;
		gap: 16px;
		align-items: center;

		@include for-phone-only {
			gap: 8px;
		}

		#logo-text {
			width: auto;
			height: 100%;

			#text {
				transition: all 0.2s ease-in-out;
			}
		}

		&:hover {
			#logo-text {
				filter: drop-shadow(0px 0px 3px var(--color--primary));
			}
		}
	}

	@media screen and (prefers-reduced-motion: no-preference) {
		.animated {
			#text {
				animation: svg-text-stroke 3s;
				stroke-width: 2;
				--text-color: var(--color--primary);
			}
		}
	}
</style>
