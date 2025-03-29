<template>
	<div class="pagination">
		<NuxtLink
			v-if="pagesIdx.begin > 0"
			class="next-page"
			@click="goPreviousPage"
			to="/"
		>
			<img
				src="../assets/icons/next-page-icon.svg"
				alt="Next page"
				class="flipped"
			/>
		</NuxtLink>
		<ul class="pages">
			<li v-for="page in pagesArr?.slice(pagesIdx.begin, pagesIdx.end)">
				<PaginationLink
					v-if="pagesIdx.begin <= page && pagesIdx.end >= page"
					:handle-click="() => goToPage(page)"
					:page="page"
				/>
			</li>
		</ul>
		<NuxtLink
			v-if="currPage < countPages"
			class="next-page"
			@click="goNextPage"
			to="/"
		>
			<img
				src="../assets/icons/next-page-icon.svg"
				alt="Next page"
			/>
		</NuxtLink>
	</div>
</template>

<script setup lang="ts">
const { query } = useRoute();

const { goToPage, goNextPage, goPreviousPage, updatePagesRange } =
	usePostsStore();
const { pagesArr, pagesIdx, currPage, countPages } = storeToRefs(
	usePostsStore()
);

watch(
	() => query,
	newQuery => {
		if (newQuery.page) {
			currPage.value = +newQuery.page;
			updatePagesRange();
		}
	},
	{ deep: true, immediate: true }
);
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

.flipped {
	transform: scaleX(-1);
}
</style>
