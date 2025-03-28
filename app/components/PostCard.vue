<template>
	<li class="posts-item">
		<NuxtLink :to="`/post/${post.id}`">
			<img
				src="https://img.freepik.com/fotos-gratis/bela-paisagem-natural-com-montanhas-e-lago_23-2150706041.jpg"
				alt="Изображение поста"
				width="280"
				class="card-image"
			/>
			<p
				ref="textRef"
				class="card-title"
			>
				{{ post.title }}
			</p>
			<p
				v-if="isOverflowing"
				class="more-link"
			>
				Read more
			</p>
		</NuxtLink>
	</li>
</template>

<script setup lang="ts">
import type { IPost } from '~/types';

const { getPosts, isOverflowing } = usePostsStore();

const props = defineProps<{ post: IPost }>();

const posts = await getPosts();
</script>

<style scoped lang="scss">
.posts-item {
	max-width: 280px;
}

.posts-item a {
	display: block;
	color: $black;
	text-decoration: none;
	&:hover {
		background: $white-500;
	}
}

.card-image {
	display: block;
	max-width: 280px;
	margin-bottom: 24px;
}

.card-title {
	@include ClampText(3);
	font-size: 20px;
	line-height: 24px;
	margin-bottom: 12px;
	font-weight: 400;
}

.more-link {
	color: $purple;
	font-size: 20px;
	line-height: 24px;
	font-weight: 400;
	&:hover {
		border-bottom: 1px solid $purple;
	}
}
</style>
