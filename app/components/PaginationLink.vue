<template>
	<NuxtLink
		to="/"
		class="page-number"
		@click="handleClick(page)"
		:class="[
			{
				active: currPage > 1 ? page === currPage : page === 1,
			},
		]"
	>
		{{ page }}
	</NuxtLink>
</template>

<script setup lang="ts">
import type { IPaginationButtonProps } from '~/types';

const { currPage } = storeToRefs(usePostsStore());

defineProps<IPaginationButtonProps>();
</script>

<style scoped lang="scss">
.page-number {
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	border: none;
	border-radius: 12px;
	padding: 11px;
	width: 44px;
	height: 44px;
	font-weight: 400;
	font-size: 16px;
	line-height: 8px;
	text-decoration: none;
	background: $white-500;
	color: $black;
	&:not(.active):hover {
		background: $white-300;
	}
}

.active {
	background: $black;
	color: $white-800;
}
</style>
