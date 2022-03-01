<script lang="ts">
	import Calculation from './pages/Calculation.svelte';

	import { fade } from 'svelte/transition';
	import { afterUpdate } from 'svelte';
	import Tab from './tab';

	const FADE_DURATION = 200;

	let activeTab: Tab = Tab.calculator;

	function checkHash() {
		const hash = window.location.hash.substring(1);
		if (!Object.keys(Tab).includes(hash)) return;

		activeTab = Tab[hash as keyof typeof Tab] ?? Tab.calculator;
	}
	checkHash();

	// update hash
	afterUpdate(() => {
		window.location.hash = `#${Tab[activeTab] ?? ''}`;
	});
</script>

<svelte:window on:hashchange={checkHash} />

<div class="wrapper">
	<main>
		{#if activeTab === Tab.calculator}
			<div in:fade={{ duration: FADE_DURATION }}>
				<Calculation />
			</div>
		{/if}
	</main>
</div>
