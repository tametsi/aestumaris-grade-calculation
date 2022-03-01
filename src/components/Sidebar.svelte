<script lang="ts">
	import Tab from '../tab';

	export let activeTab: Tab;
</script>

<div class="sidebar">
	<div>
		<!-- top items -->
		<a
			class="sidebar-item text-overflow no-select"
			class:active={activeTab === Tab.calculator}
			href="#calculator"
		>
			<span>⚡ Calculator</span>
		</a>
	</div>
	<div>
		<!-- bottom items -->
	</div>
</div>

<style lang="scss">
	@use '../scss/abstracts' as a;

	.sidebar {
		@include a.flex-container();

		height: 100%;
		width: 100%;

		background-color: a.$gray6;

		border-right: 0.3rem solid lighten(a.$lavender-floral, 10);
		box-shadow: 0.4rem 0 1rem a.$gray6;
		margin-right: 2rem;

		.sidebar-item {
			padding: 1rem;
			margin: 0.2rem 0.5rem;
			border-radius: 0.3rem;
			display: block;
			color: a.$gray1;

			cursor: pointer;

			transition: all 0.3s;
			&:hover {
				background-color: a.$gray4;
			}
			&:active {
				letter-spacing: -0.1rem;
			}

			&.active {
				color: lighten(a.$lavender-floral, 10);
				background-color: darken(a.$gray6, 5);
			}
		}
	}
</style>
