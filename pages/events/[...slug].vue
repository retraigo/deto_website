<template>
    <NuxtLayout>
        <article class="lg:flex flex-1 w-full mx-auto">
            <LayoutNav class="hidden lg:flex" />
            <div class="flex-1 w-full">
                <ContentDoc>
                    <template #default="{ doc }">
                        <div
                            class="pt-8 flex flex-col flex-grow text-justify lg:flex-row items-start lg:justify-between space-y-8 gap-8 lg:space-y-0 lg:space-x-8"
                        >
                            <article
                                class="flex-1 prose prose-gray dark:prose-invert lg:max-w-5xl flex-grow w-full prose-code:before:content-none prose-code:after:content-none p-8 lg:px-4 bg-transparent rounded-xl lg:h-[60vh] overflow-y-auto"
                                :style="{
                                 //   backgroundImage: `linear-gradient(rgba(24, 24, 27, 0.9), rgba(0, 0, 0, 0.9)), url('/paimon.jpg')`,
                                 //   backgroundRepeat: `no-repeat`,
                                 //   backgroundSize: `cover`,
                                 //   backgroundAttachment: `scroll`
                                }"
                            >
                                <ContentRenderer :value="doc" />
                                <nav
                                    key="navigation"
                                    class="flex flex-col lg:flex-row w-full items-center justify-between mt-8 gap-8"
                                >
                                    <a
                                        v-if="
                                            prev && prev._path.includes(parent)
                                        "
                                        :href="prev._path"
                                        class="p-2 flex flex-col space-y-2 lg:border-zinc-600 border rounded-xl no-underline w-full"
                                    >
                                        <span class="text-sm text-left"
                                            >Prev</span
                                        >

                                        <span
                                            class="text-royal-orange dark:text-royal-yellow text-left"
                                            >{{ prev.title }}</span
                                        >
                                    </a>
                                    <a
                                        v-if="
                                            next && next._path.includes(parent)
                                        "
                                        :href="next._path"
                                        class="p-2 flex flex-col space-y-2 lg:border-zinc-600 border rounded-xl no-underline w-full"
                                    >
                                        <span class="text-sm text-right"
                                            >Next</span
                                        >
                                        <span
                                            class="text-royal-orange dark:text-royal-yellow text-right"
                                            >{{ next.title }}</span
                                        >
                                    </a>
                                </nav>
                            </article>
                        </div>
                    </template>
                    <template #not-found>
                        <div class="p-8">
                            Select an event from the list in the menu.
                        </div>
                    </template>
                    <template #empty>
                        <div class="p-8">There is nothing here.</div>
                    </template>
                </ContentDoc>
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
