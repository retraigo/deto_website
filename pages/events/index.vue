<template>
    <NuxtLayout>
        <article class="lg:flex flex-1 w-full mx-auto">
            <div class="flex-1 w-full">
                <LayoutNav class="max-w-7xl w-full p-8 lg:w-full" />
            </div>
        </article>
    </NuxtLayout>
</template>

<style lang="postcss">
    /* Customize headers to remove default underline */
    .prose h1 {
        @apply text-royal-orange;
        &:hover {
            @apply text-zinc-600 dark:text-royal-yellow;
        }
    }
    .prose h2 a {
        @apply no-underline transition duration-500 ease-in-out block font-bold border-b border-neutral-600 dark:border-neutral-300;
        &:hover {
            @apply text-zinc-600 dark:text-royal-yellow;
        }
    }
    .prose h3 a {
        @apply font-semibold no-underline;
    }
</style>
<script setup lang="ts">
    definePageMeta({
        layout: "blog",
    });
    const { next, prev } = useContent();
    const route = useRoute();

    const paths = route.path.split("/");
    const parent = paths.slice(0, paths.length - 1).join("/");
    function pleaseLog(x: any) {
        console.log(x.value);
    }
</script>
