<template>
    <NuxtLayout>
        <section class="lg:flex flex-1 w-full mx-auto mt-8 max-w-7xl">
            <PageEvents />
        </section>
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
useHead({
    title: "Events",
    meta: [
        {
            name: "description",
            content: "A list of events in Datronix.",
        },
    ],
});
</script>
