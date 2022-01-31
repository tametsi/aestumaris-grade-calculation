<script lang="ts">
	import FormItem from './FormItem.svelte';

	export let pointsReached = 0;
	export let pointsMaximum = 15;
</script>

<form on:submit|preventDefault>
	<FormItem name="points-reached">
		<svelte:fragment slot="title">Reached points</svelte:fragment>
		<input
			slot="input"
			type="number"
			bind:value={pointsReached}
			name="points-reached"
			id="points-reached"
			min="0"
		/>
	</FormItem>

	<FormItem name="points-maximum">
		<svelte:fragment slot="title">Maximum points</svelte:fragment>
		<input
			slot="input"
			type="number"
			bind:value={pointsMaximum}
			name="points-maximum"
			id="points-maximum"
			min="0"
		/>
	</FormItem>
</form>
