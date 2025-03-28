<template>
	<h1 class="page-title">{{ text }}</h1>
</template>

<script setup lang="ts">
import type { IPageTitleProps } from '~/types';

withDefaults(defineProps<IPageTitleProps>(), { text: 'Title' });
</script>

<style scoped lang="scss">
.page-title {
	font-weight: 400;
	font-size: 84px;
	line-height: 84px;
	margin-bottom: 40px;
}
</style>
