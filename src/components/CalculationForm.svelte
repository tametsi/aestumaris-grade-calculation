<script lang="ts">
	import FormItem from './FormItem.svelte';

	export let pointsReached = 0;
	export let pointsMaximum = 15;
	export let tableIndex: number;
	export let tableList: {
		index: number;
		name: string;
	}[];
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

	<FormItem name="table">
		<svelte:fragment slot="title">Table</svelte:fragment>
		<select slot="input" name="table" id="table" bind:value={tableIndex}>
			{#each tableList as x}
				<option value={x.index}>{x.name}</option>
			{/each}
		</select>
	</FormItem>
</form>
