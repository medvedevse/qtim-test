<template>
	<section
		class="posts-section"
		v-if="posts"
	>
		<ul class="posts-list">
			<PostCard
				v-for="post in posts.slice(elems.begin, elems.end)"
				:key="post.id"
				:post="post"
			/>
		</ul>
		<PaginationComponent />
	</section>
</template>

<script setup lang="ts">
const { getPosts } = usePostsStore();
const { countPages, pagesArr, textRef, isOverflowing, elems } = storeToRefs(
	usePostsStore()
);
const posts = await getPosts();

onMounted(() => {
	if (posts.value) {
		countPages.value = Math.ceil(posts.value.length / 8);

		for (let page = 1; page <= countPages.value; page++) {
			pagesArr.value.push(page);
		}
	}

	if (textRef.value) {
		for (const key in textRef.value) {
			isOverflowing.value =
				textRef.value[key].scrollHeight > textRef.value[key].clientHeight;
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
