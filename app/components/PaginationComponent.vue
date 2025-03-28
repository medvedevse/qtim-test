<template>
	<div class="pagination">
		<NuxtLink
			v-if="pages.begin > 0"
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
			<li v-for="page in pagesArr?.slice(pages.begin, pages.end)">
				<PaginationLink
					v-if="pages.begin <= page && pages.end >= page"
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

const { goToPage, goNextPage, goPreviousPage } = usePostsStore();
const { pagesArr, pages, currPage, countPages } = storeToRefs(usePostsStore());

watch(
	() => query,
	newQuery => {
		if (newQuery.page) {
			currPage.value = +newQuery.page;
			pages.value.begin = currPage.value > 5 ? currPage.value - 5 : 0;
			pages.value.end = currPage.value > 5 ? currPage.value : 5;
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
