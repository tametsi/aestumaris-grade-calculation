<script lang="ts">
	import CalculationForm from './components/CalculationForm.svelte';

	let pointsReached: number;
	let pointsMaximum: number;
</script>

<main>
	<div class="card">
		<h1>AESTUMARIS - Grade Calculation</h1>

		<p>
			AESTUMARIS is a little tool to calculate grades based on the points,
			reached in a classtest.
		</p>

		<CalculationForm bind:pointsMaximum bind:pointsReached />
	</div>
</main>

<style lang="scss">
	@use './scss/abstracts' as a;
	main {
		padding: 1rem 0;

		.card {
			width: clamp(30rem, 75rem, 95%);
			background-color: a.$gray5;
			margin: auto;
			padding: 1.5rem;

			border-radius: 0.5rem;
			box-shadow: darken(a.$gray6, 10) 0 0 1.5rem;
		}
	}
</style>
