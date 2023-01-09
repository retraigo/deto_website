<template>
    <div class = "w-full relative overflow-hidden">
        <div class = "absolute inset-0 w-full flex flex-wrap gap-0 z-0">
            <div v-for = "(_x, i) in elements" :key="`grid_item_${i}`" class = "w-12 h-12 rounded-full bg-transparent hover:bg-royal-yellow/20 transition duration-100 ease-in-out" />

        </div>
        <div class = "relative z-10 pointer-events-none"><slot /></div>
    </div>
</template>
<script setup lang="ts">
const elements = new Array(225).fill(0)
</script>