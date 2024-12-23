<script lang="ts" setup>
defineProps({
  text: String,
  title: String,
})
</script>

<template>
  <VAlert
    :text=text
    :title=title
    class="mb-4"
  ></VAlert>
</template>

<style lang="scss" scoped></style>
