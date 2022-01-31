<script lang="ts">
	export let name: string;
	export let column = false;
</script>

<div class="form-item no-select">
	<label for={name} class:column>
		<div>
			<p>
				<slot name="title">{name}</slot>
			</p>
			{#if $$slots.description}
				<small>
					<slot name="description" />
				</small>
			{/if}
		</div>
		<div class="form-item-input">
			<slot name="input" />
		</div>
	</label>
</div>

<style lang="scss">
	@use '../scss/abstracts' as a;

	.form-item {
		margin: 1rem;

		label {
			@include a.flex-container(row);
			align-items: center;
			gap: 1rem;

			&.column {
				flex-flow: column nowrap;
				align-items: flex-start;

				.form-item-input {
					width: 100%;
				}
			}
		}
	}
</style>
