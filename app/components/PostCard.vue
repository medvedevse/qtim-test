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
			<NuxtLink
				v-if="isOverflowing"
				class="more-link"
			>
				Read more
			</NuxtLink>
		</NuxtLink>
	</li>
</template>

<script setup lang="ts">
import type { IPost } from '~/types';

defineProps<{ post: IPost }>();

const { isOverflowing, textRef } = storeToRefs(usePostsStore());

onMounted(() => {
	if (textRef.value) {
		isOverflowing.value =
			textRef.value.scrollHeight > textRef.value.clientHeight;
	}
});
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

.posts-item .more-link {
	max-width: 100px;
	color: $purple;
	font-size: 20px;
	line-height: 24px;
	font-weight: 400;
	&:hover {
		border-bottom: 1px solid $purple;
	}
}
</style>
