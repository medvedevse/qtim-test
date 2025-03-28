<template>
	<div class="pagination">
		<ul class="pages">
			<li v-for="page in pagesArr?.slice(pages.begin, pages.end)">
				<button
					class="page-number"
					v-if="pages.begin <= page && pages.end >= page"
					@click="goToPage(page)"
					:class="[
						{
							active: currPage > 1 ? page === currPage : page === 1,
						},
					]"
				>
					{{ page }}
				</button>
			</li>
		</ul>
		<button
			class="next-page"
			@click="goNextPage"
		>
			<img
				src="../assets//icons/next-page-icon.svg"
				alt="Next page"
			/>
		</button>
	</div>
</template>

<script setup lang="ts">
const { goToPage, goNextPage, pagesArr, pages } = usePostsStore();
const { currPage } = storeToRefs(usePostsStore());
</script>

<style scoped lang="scss">
.pagination {
	display: flex;
	gap: 8px;
}

.pages {
	max-width: 252px;
	list-style: none;
	display: flex;
	gap: 8px;
	.page-number {
		cursor: pointer;
		border: none;
		border-radius: 12px;
		padding: 11px;
		width: 44px;
		height: 44px;
		font-weight: 400;
		font-size: 16px;
		line-height: 8px;
		&:not(.active):hover {
			background: $white-300;
		}
	}
}

.active {
	background: $black;
	color: $white-800;
}

.next-page {
	display: flex;
	cursor: pointer;
	border: 1px solid $white-300;
	border-radius: 12px;
	padding: 11px;
	width: 44px;
	height: 44px;
	font-weight: 400;
	font-size: 16px;
	line-height: 8px;
	background: $white-800;
	img {
		display: block;
	}
	&:hover {
		background: $white-300;
	}
}
</style>
