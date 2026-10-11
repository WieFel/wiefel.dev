<script lang="ts">
	import '$lib/scss/global.scss';
	import type { Hst } from '@histoire/plugin-svelte';
	import Waves from './Waves.svelte';

	export let Hst: Hst;
</script>

<Hst.Story title="Organisms/Waves" layout={{ type: 'single', iframe: true }}>
	<div class="preview">
		<Waves />
	</div>
</Hst.Story>

<style>
	.preview {
		background: linear-gradient(60deg, var(--color--waves-start) 0%, var(--color--waves-end) 100%);
		padding-top: 80px;
	}
</style>
