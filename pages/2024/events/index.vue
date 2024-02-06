<template>
    <NuxtLayout>
        <section class="lg:flex flex-1 w-full mx-auto mt-8 max-w-7xl">
            <div class="flex-1 w-full flex flex-col gap-8 items-center">
                <div class="p-8">
                    <h1 class="text-center text-7xl font-bold font-tahu mx-auto" data-aos="fade-up" data-aos-easing="linear"
                        data-aos-delay="100" data-aos-duration="260">
                        Technical Events
                    </h1>
                    <div class="flex flex-row flex-wrap items-stretch justify-center gap-8 mt-6">
                        <a v-for="event in technical" :key="event._id" :href="event._path"
                            class="flex flex-col gap-4 items-center w-full lg:max-w-xl p-8 border-2 border-zinc-700 dark:border-royal-yellow bg-black/60 transition duration-500 ease-in-out transform hover:-translate-y-1"
                            data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="260">
                            <div
                                class="uppercase text-base text-royal-yellow font-semibold text-center font-elementaryGothic text-lg">
                                {{ event.title }}
                            </div>
                            <div class="text-lg text-center">
                                {{ event.description }}
                            </div>
                        </a>
                    </div>
                </div>
                <div class="p-8">
                    <h1 class="text-center text-7xl font-bold font-tahu mx-auto" data-aos="fade-up" data-aos-easing="linear"
                        data-aos-delay="100" data-aos-duration="260">
                        Non-Technical Events
                    </h1>
                    <div class="flex flex-row flex-wrap items-stretch justify-center gap-8 mt-6">
                        <a v-for="event in nonTechnical" :key="event._id" :href="event._path"
                            class="flex flex-col gap-4 items-center w-full lg:max-w-xl p-8 border-2 border-zinc-700 dark:border-royal-yellow bg-black/60 transition duration-500 ease-in-out transform hover:-translate-y-1"
                            data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="260">
                            <div
                                class="uppercase text-base text-royal-yellow font-semibold text-center font-elementaryGothic text-lg">
                                {{ event.title }}
                            </div>
                            <div class="text-lg text-center">
                                {{ event.description }}
                            </div>
                        </a>
                    </div>
                </div>
                <div class="p-8">
                    <h1 class="text-center text-7xl font-bold font-tahu mx-auto" data-aos="fade-up" data-aos-easing="linear"
                        data-aos-delay="100" data-aos-duration="260">
                        Online Events
                    </h1>
                    <div class="flex flex-row flex-wrap items-stretch justify-center gap-8 mt-6">
                        <a v-for="event in onlineEvents" :key="event._id" :href="event._path"
                            class="flex flex-col gap-4 items-center w-full lg:max-w-xl p-8 border-2 border-zinc-700 dark:border-royal-yellow bg-black/60 transition duration-500 ease-in-out transform hover:-translate-y-1"
                            data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="260">
                            <div
                                class="uppercase text-royal-yellow font-semibold text-center font-elementaryGothic text-lg">
                                {{ event.title }}
                            </div>
                            <div class="text-lg text-center">
                                {{ event.description }}
                            </div>
                        </a>
                    </div>
                </div>
            </div>
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

const technical = await queryContent("2024/events/technical-events").find();
const nonTechnical = await queryContent(
    "2024/events/non-technical-events"
).find();
const onlineEvents = await queryContent(
    "2024/events/online-events").find();
</script>
