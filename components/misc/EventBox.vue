<template>
    <a :key="event._id" :href="event._path" style="background-image:url(/invit_e.webp)"
        class="flex flex-col gap-4 items-center bg-center bg-no-repeat w-full lg:max-w-xl h-60 sm:h-72 bg-contain transition duration-500 ease-in-out transform hover:-translate-y-1"
        data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="260">
        <div class="uppercase text-black font-semibold text-center font-james text-xs sm:text-sm md:text-lg relative top-16">
            {{ event.title }}
        </div>
        <div class="text-xs sm:text-sm font-rye text-center max-w-56 sm:max-w-xs text-yellow-900 relative top-[4rem] sm:top-[4.5rem]">
            {{ event.description }}
        </div>
    </a>
</template>
<script setup lang="ts">
const { event } = defineProps<{ event: { _id: string, _path: string, title: string, description: string } }>()
</script>