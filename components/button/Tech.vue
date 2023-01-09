<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        :height="`${size}`"
        :width="`${Number(size) * 2}`"
        viewBox="0 0 64 32"
        :class="`stroke-2 group transform transition duration-500 ease-in-out cursor-pointer hover:scale-110 hover:-translate-y-1 ${
            type === 'success'
                ? 'fill-green-500/20 stroke-green-700 dark:stroke-green-200'
                : type === 'info'
                ? 'fill-blue-500/20 stroke-blue-700 dark:stroke-blue-200'
                : type === 'warning'
                ? 'fill-yellow-500/20 stroke-yellow-700 dark:stroke-yellow-200'
                : type === 'error'
                ? 'fill-rose-500/20 stroke-rose-700 dark:stroke-rose-200'
                : type === 'gray'
                ? 'fill-black/20 dark:fill-black/20'
                : 'fill-royal-orange/80 stroke-royal-orange dark:stroke-royal-orange'
        }`"
    >
        <text
            x="14"
            y="19"
            textLength="70%"
            lengthAdjust="spacingAndGlyphs"
            :class="`font-azonix text-[8px] tracking-wide stroke-none dark:group-hover:fill-white group-hover:fill-black transition duration-500 ease-in-out ${
                type === 'success'
                    ? 'fill-green-700 dark:fill-green-200'
                    : type === 'info'
                    ? 'fill-blue-700 dark:fill-blue-200'
                    : type === 'warning'
                    ? 'fill-yellow-700 dark:fill-yellow-200'
                    : type === 'error'
                    ? 'fill-rose-700 dark:fill-rose-200'
                    : type === 'gray'
                    ? 'fill-black/20'
                    : 'fill-black dark:fill-royal-orange'
            }`"
        >
            {{ text }}
        </text>

        <path d="M 2 2 L 58 2 L 62 6 L 62 30 L 6 30 L 2 26 L 2 2 Z" />
    </svg>
</template>

<script setup lang="ts">
    const { text, size, type } = defineProps<{
        text: string;
        size: string;
        type: "success" | "info" | "warning" | "error" | "gray";
    }>();
</script>
