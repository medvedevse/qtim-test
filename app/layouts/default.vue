<template>
	<div class="wrapper">
		<PageHeader />
		<main class="main">
			<slot />
		</main>
		<PageFooter />
	</div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.wrapper {
	max-width: 1440px;
	display: grid;
	grid-template-rows: 121px 1fr 900px;
}

.main {
	min-height: 100vh;
	padding: 120px 112px 140px 112px;
}
</style>
