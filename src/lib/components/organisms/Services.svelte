<script lang="ts">
	import type { Service } from '$lib/utils/types';
	import ServiceCard from '$lib/components/molecules/ServiceCard.svelte';
	import ContentSection from '$lib/components/organisms/ContentSection.svelte';

	export let services: Service[];
</script>

<ContentSection
	id="services"
	title="Services"
	description="Freelance work I offer — from mobile apps to open source and AI"
>
	<div class="grid">
		{#each services as service}
			<ServiceCard {service} />
		{/each}
	</div>
</ContentSection>

<style lang="scss">
	@import '$lib/scss/breakpoints.scss';

	.grid {
		width: 100%;
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-gap: 20px;

		@include for-phone-only {
			grid-template-columns: 1fr;
		}
	}
</style>
