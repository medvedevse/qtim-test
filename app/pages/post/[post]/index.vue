<template>
	<PageTitle :text="postTitle" />
	<PostContent @title="postTitle = $event" />
</template>

<script setup lang="ts">
const postTitle = ref<string>('');
</script>

<style scoped lang="scss"></style>
