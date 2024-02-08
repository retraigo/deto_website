<template>
    <div class="flex-1 w-full flex flex-col gap-8 items-center">
        <div class="p-8">
            <h1 class="text-center text-4xl md:text-6xl lg:text-7xl font-bold font-rye mx-auto" data-aos="fade-up" data-aos-easing="linear"
                data-aos-delay="100" data-aos-duration="260">
                Technical Events
            </h1>
            <div class="flex flex-row flex-wrap items-stretch justify-center gap-8 mt-6">
                <MiscEventBox v-for="event in technical" :key="event._id" :event="event" class="gonnaglow" />
            </div>
        </div>
        <div class="p-8">
            <h1 class="text-center text-4xl md:text-6xl lg:text-7xl font-bold font-rye mx-auto" data-aos="fade-up" data-aos-easing="linear"
                data-aos-delay="100" data-aos-duration="260">
                Non-Technical Events
            </h1>
            <div class="flex flex-row flex-wrap items-stretch justify-center gap-8 mt-6">
                <MiscEventBox v-for="event in nonTechnical" :key="event._id" :event="event" class="gonnaglow" />
            </div>
        </div>
        <div class="p-8">
            <h1 class="text-center text-4xl md:text-6xl lg:text-7xl font-bold font-rye mx-auto" data-aos="fade-up" data-aos-easing="linear"
                data-aos-delay="100" data-aos-duration="260">
                Online Events
            </h1>
            <div class="flex flex-row flex-wrap items-stretch justify-center gap-8 mt-6">
                <MiscEventBox v-for="event in onlineEvents" :key="event._id" :event="event" class="gonnaglow" />
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
const technical = await queryContent("2024/events/technical-events").find();
const nonTechnical = await queryContent(
    "2024/events/non-technical-events"
).find();
const onlineEvents = await queryContent("2024/events/online-events").find();
</script>