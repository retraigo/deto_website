<template>
    <svg xmlns="http://www.w3.org/200/200/svg" :height="`${size}`" :width="`${Number(size) * 2}`" viewBox="0 0 64 32"
        :class="`stroke-1 group transform transition duration-500 ease-in-out cursor-pointer hover:scale-110 hover:-translate-y-1 ${type === 'success'
            ? 'fill-green-500/20 stroke-green-700/20 dark:stroke-green-200/20'
            : type === 'info'
                ? 'fill-blue-500/20 stroke-blue-700/20 dark:stroke-blue-200/20'
                : type === 'warning'
                    ? 'fill-yellow-500/20 stroke-yellow-700/20 dark:stroke-yellow-200/20'
                    : type === 'error'
                        ? 'fill-rose-500/20 stroke-rose-700/20 dark:stroke-rose-200/20'
                        : type === 'gray'
                            ? 'fill-black/20'
                            : 'fill-red-800/80'
            }`">
        <image x="0" width="64" clip-path="url(#plsClip)" href="/paper.svg" />
        <text x="9.6" y="19" textLength="44.8" lengthAdjust="spacingAndGlyphs" :class="`font-loubag text-[8px] tracking-wide stroke-none group-hover:fill-red-800 transition duration-500 ease-in-out ${type === 'success'
            ? 'fill-green-700 dark:fill-green-200'
            : type === 'info'
                ? 'fill-blue-700 dark:fill-blue-200'
                : type === 'warning'
                    ? 'fill-yellow-700 dark:fill-yellow-200'
                    : type === 'error'
                        ? 'fill-rose-700 dark:fill-rose-200'
                        : type === 'gray'
                            ? 'fill-black'
                            : 'fill-black'
            }`">
            {{ text }}
        </text>
        <defs>
            <clipPath id="plsClip">
                <path d="M 6 2 L 58 2 L 57 3 L 58 4 L 62 6 L 60 7 L 62 8 L 62 10 L 60 11 L 62 12 L 62 14 L 58 15 L 62 16 L 62 19 L 54 20 L 62 21 L 62 24 L 59 25 L 62 26 L 62 27 L 61 28 L 62 29 L 62 30 L 6 30 L 2 26 L 2 6 L 6 2 Z" />
            </clipPath>
        </defs>

    </svg>
</template>

<script setup lang="ts">
const { text, size, type } = defineProps<{
    text: string;
    size: string;
    type: "success" | "info" | "warning" | "error" | "gray";
}>();
</script>
