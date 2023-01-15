<template>
    <div class="flex flex-col max-w-sm gap-2 items-center text-center">
        <div
            class="w-52 h-52 p-2 flex flex-col items-center justify-center border-double border-royal-yellow border-4 group rounded-full hover:rounded-xl transition-all duration-500 ease-in-out"
        >
            <img
                :src="image"
                :alt="name"
                class="w-48 h-48 rounded-full border-dotted border-black dark:border-white border-2 group-hover:rounded-xl transition-all duration-500 ease-in-out"
            />
        </div>
        <div
            class="uppercase font-semibold text-sm text-zinc-600 dark:text-royal-yellow"
        >
            {{ title }}
        </div>
        <div class="text-lg font-bold">{{ name }}</div>
    </div>
</template>

<script setup lang="ts">
    const { name, image, title } = defineProps<{
        name: string;
        image: string;
        title: string;
    }>();
</script>
