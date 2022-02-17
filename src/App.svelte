<script lang="ts">
	import CalculationForm from './components/CalculationForm.svelte';
	import Aestumaris from './lib/aestumaris';
	import type Table from './lib/table/table';

	const aestumaris = new Aestumaris();

	$: calculatedGrade = aestumaris.calculateGrade();
	let tableIndex = 0;

	$: {
		aestumaris.tableManager.setActiveTable(tableIndex);
		// also update the calculatedGrade
		calculatedGrade = aestumaris.calculateGrade();
	}
</script>

<main>
	<div class="card">
		<h1>AESTUMARIS - Grade Calculation</h1>

		<p>
			AESTUMARIS is a little tool to calculate grades based on the points,
			reached in a classtest.
		</p>

		<CalculationForm
			bind:pointsMaximum={aestumaris.pointsMaximum}
			bind:pointsReached={aestumaris.pointsReached}
		/>

		<h2>Grade</h2>
		<span class="grade">{calculatedGrade}</span>
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

			.grade {
				font-size: 4rem;
				background-color: a.$gray6;
				border: 0.2rem solid darken(a.$gray1, 40);
				border-radius: 0.4rem;
				padding: 1rem 2rem;
			}
		}
	}
</style>
