<template>
    <svg
        xmlns="http://www.w3.org/200/200/svg"
        :height="`${size}`"
        :width="`${Number(size) * 2}`"
        viewBox="0 0 64 32"
        :class="`stroke-1 group transform transition duration-500 ease-in-out cursor-pointer hover:scale-110 hover:-translate-y-1 ${
            type === 'success'
                ? 'fill-green-500/20 stroke-green-700/20 dark:stroke-green-200/20'
                : type === 'info'
                ? 'fill-blue-500/20 stroke-blue-700/20 dark:stroke-blue-200/20'
                : type === 'warning'
                ? 'fill-yellow-500/20 stroke-yellow-700/20 dark:stroke-yellow-200/20'
                : type === 'error'
                ? 'fill-rose-500/20 stroke-rose-700/20 dark:stroke-rose-200/20'
                : type === 'gray'
                ? 'fill-black/20 stroke-royal-orange dark:stroke-royal-yellow'
                : 'fill-royal-orange/80 stroke-royal-orange dark:stroke-royal-orange'
        }`"
    >
        <text
            x="9.6"
            y="19"
            textLength="44.8"
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
                    ? 'fill-black dark:fill-zinc-300'
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
