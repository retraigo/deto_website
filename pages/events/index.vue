<template>
    <NuxtLayout>
        <section class="mx-auto space-y-8">
        <article class="lg:flex flex-1 w-full mx-auto mt-8">
            <div class="flex-1 w-full flex flex-col gap-8 items-center">
                <div class="p-8">
                    <h1
                        class="text-center text-4xl font-bold font-azonix mx-auto"
                    >
                        Technical Events
                    </h1>
                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-6 w-full">
                        <a
                            v-for="event in technical"
                            :key="event._id"
                            :href="event._path"
                            class="flex flex-col gap-4 items-center w-full lg:max-w-md p-8 border rounded-xl border-zinc-700 dark:border-royal-yellow bg-black/60 transition duration-500 ease-in-out transform hover:-translate-y-1"
                        >
                            <div
                                class="uppercase text-base text-royal-yellow font-semibold text-center"
                            >
                                {{ event.title }}
                            </div>
                            <div class="text-lg text-center">
                                {{ event.description }}
                            </div>
                        </a>
                    </div>
                </div>
                <div class="p-8">
                    <h1
                        class="text-center text-4xl font-bold font-azonix mx-auto"
                    >
                        Non-Technical Events
                    </h1>
                    <div
                        class="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-6 w-full"
                    >
                        <a
                            v-for="event in nonTechnical"
                            :key="event._id"
                            :href="event._path"
                            class="flex flex-col gap-4 items-center w-full lg:max-w-md p-8 border rounded-xl border-zinc-700 dark:border-royal-yellow bg-black/60 transition duration-500 ease-in-out transform hover:-translate-y-1"
                        >
                            <div
                                class="uppercase text-base text-royal-yellow font-semibold text-center"
                            >
                                {{ event.title }}
                            </div>
                            <div class="text-lg text-center">
                                {{ event.description }}
                            </div>
                        </a>
                    </div>
                </div>
                <div class="p-8">
                    <h1
                        class="text-center text-4xl font-bold font-azonix mx-auto"
                    >
                        Online Events
                    </h1>
                    <div
                        class="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-6 w-full"
                    >
                        <a
                            v-for="event in online"
                            :key="event._id"
                            :href="event._path"
                            class="flex flex-col gap-4 items-center w-full lg:max-w-md p-8 border rounded-xl border-zinc-700 dark:border-royal-yellow bg-black/60 transition duration-500 ease-in-out transform hover:-translate-y-1"
                        >
                            <div
                                class="uppercase text-base text-royal-yellow font-semibold text-center"
                            >
                                {{ event.title }}
                            </div>
                            <div class="text-lg text-center">
                                {{ event.description }}
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </article>
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
    const route = useRoute();

    const technical = await queryContent("events/technical-events").find();
    const nonTechnical = await queryContent(
        "events/non-technical-events"
    ).find();
    const online = await queryContent(
"events/online-events").find();
</script>
