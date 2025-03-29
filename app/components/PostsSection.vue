<template>
	<section
		class="posts-section"
		v-if="posts"
	>
		<ul class="posts-list">
			<PostCard
				v-for="post in posts.slice(elemBegin, elemEnd)"
				:key="post.id"
				:post="post"
			/>
		</ul>
		<PaginationComponent />
	</section>
</template>

<script setup lang="ts">
import type { IPostsProps } from '~/types';

const { countPages, pagesArr, elemEnd, elemBegin } = storeToRefs(
	usePostsStore()
);

const props = defineProps<IPostsProps>();

onMounted(() => {
	if (props.posts) {
		countPages.value = Math.ceil(props.posts.length / 8);

		for (let page = 1; page <= countPages.value; page++) {
			pagesArr.value.push(page);
		}
	}
});
</script>

<style scoped lang="scss">
.posts-list {
	list-style: none;
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	grid-template-rows: repeat(2, 1fr);
	gap: 32px;
	margin-bottom: 50px;
}
</style>
