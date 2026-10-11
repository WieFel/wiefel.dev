<script lang="ts">
	import Card from '$lib/components/atoms/Card.svelte';
	import type { Service } from '$lib/utils/types';

	export let service: Service;
</script>

<Card additionalClass="service-card">
	<div class="content" slot="content">
		<p class="title">{service.title}</p>
		<p class="text">{service.description}</p>
	</div>
</Card>

<style lang="scss">
	.content {
		display: flex;
		flex-direction: column;
		gap: 10px;
		align-items: flex-start;
	}

	.title {
		font-size: 1.2rem;
		font-family: var(--font--title);
		font-weight: 700;
	}

	.text {
		font-size: 0.95rem;
		color: rgba(var(--color--text-rgb), 0.9);
		text-align: left;
	}
</style>
