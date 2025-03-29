<template>
	<PageTitle text="Articles" />
	<PostsSection
		:posts="posts"
		:key="$route.fullPath"
	/>
</template>

<script setup lang="ts">
import type { IPost } from '~/types';

const { getPosts } = usePostsStore();

const posts = ref<IPost[]>([]);
const data = await getPosts();
data && (posts.value = data);
</script>

<style scoped lang="scss"></style>
