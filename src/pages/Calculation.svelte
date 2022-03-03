<script lang="ts">
	import CalculationForm from '../components/CalculationForm.svelte';
	import Aestumaris from '../lib/aestumaris';

	const aestumaris = new Aestumaris();

	$: calculatedGrade = aestumaris.calculateGrade();
	let tableIndex = 0;

	$: {
		aestumaris.tableManager.setActiveTable(tableIndex);
		// update the calculatedGrade as well
		calculatedGrade = aestumaris.calculateGrade();
	}
</script>

<div class="wrapper">
	<section>
		<h1>AESTUMARIS - Grade Calculation</h1>

		<CalculationForm
			bind:pointsMaximum={aestumaris.pointsMaximum}
			bind:pointsReached={aestumaris.pointsReached}
			tableList={aestumaris.tableManager.getTableList()}
			bind:tableIndex
		/>

		<h2>Grade</h2>
		<span class="grade">{calculatedGrade}</span>
	</section>
</div>

<style lang="scss">
	@use '../scss/abstracts' as a;

	.wrapper {
		width: clamp(30rem, 75rem, 95%);

		.grade {
			font-size: 4rem;
			background-color: a.$gray6;
			border: 0.2rem solid darken(a.$gray1, 40);
			border-radius: 0.4rem;
			padding: 1rem 2rem;
		}
	}
</style>
