<template>
  <div class="inline-flex" :style="{ gap: grid + 'px' }">
    <div class="bg-black" :style="{ width: grid + 'px', height: height + 'px' }"></div>
    <div class="bg-black" :style="{ width: grid + 'px', height: height + 'px' }"></div>
    <div class="bg-black" :style="{ width: grid + 'px', height: height / 2 + 'px' }"></div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  size: number,
}>();
const columns = 5;
const grid = props.size / columns;
const height = grid * columns;
</script>
