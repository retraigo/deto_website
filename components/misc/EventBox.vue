<template>
    <a :key="event._id" :href="event._path" style="background-image:url(/invit.webp)"
        class="flex flex-col gap-4 items-center bg-cover bg-center bg-no-repeat w-full lg:max-w-xl px-8 h-72 transition duration-500 ease-in-out transform hover:-translate-y-1"
        data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="260">
        <div class="uppercase text-base text-black font-semibold text-center font-elementaryGothic text-lg relative top-16">
            {{ event.title }}
        </div>
        <div class="text-lg text-center max-w-xs text-red-900 relative top-[4.5rem]">
            {{ event.description }}
        </div>
    </a>
</template>
<script setup lang="ts">
const { event } = defineProps<{ event: { _id: string, _path: string, title: string, description: string } }>()
</script>