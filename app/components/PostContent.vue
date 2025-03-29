<template>
	<img
		src="https://img.freepik.com/fotos-gratis/bela-paisagem-natural-com-montanhas-e-lago_23-2150706041.jpg"
		alt="Изображение поста"
		class="post-image"
	/>
	<p class="post-subtitle">About</p>
	<p class="post-description">{{ post?.description }}</p>
</template>

<script setup lang="ts">
import type { IPostEmits } from '~/types';

const { params } = useRoute();

const { getPost } = usePostsStore();
const post = await getPost(params.post as string);

const emits = defineEmits<IPostEmits>();

post &&
	watch(post, newVal => newVal && emits('title', newVal.title), {
		immediate: true,
		deep: true,
	});
</script>

<style scoped lang="scss">
.post-title {
	font-weight: 400;
	font-size: 84px;
	line-height: 84px;
	margin-bottom: 34px;
}

.post-image {
	display: block;
	max-width: 1216px;
	height: 700px;
	padding-top: 40px;
	margin-bottom: 80px;
}

.post-subtitle {
	font-size: 16px;
	line-height: 16px;
	margin-bottom: 32px;
}

.post-description {
	font-size: 36px;
	line-height: 45px;
	margin-bottom: 80px;
}
</style>
