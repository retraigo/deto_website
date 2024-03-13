<template>
    <div :style="{ filter: length < text.length + 1 ? `drop-shadow(0 0 1rem #f8c538) drop-shadow(0 0 1rem #f8c538);` : `` }">
        {{ text.slice(0, length) || `ㅤ` }}{{ length > 0 && (text.length > length) ?
        `_` : `` }}</div>
</template>

<script setup lang="ts">
const { text, delay } = defineProps<{ text: string, delay?: number }>()

const length = ref(0)

onMounted(() => {
    setTimeout(() => {
        const int = setInterval(() => {
            if (length.value > text.length) {
                clearInterval(int);
                return;
            }
            length.value += 1
        }, 250)
    }, delay || 0)
})

</script>