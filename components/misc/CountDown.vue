<template>
    <div
        class="flex flex-row items-stretch gap-4 justify-center text-xl md:text-3xl lg:text-7xl font-atmospheric"
    >
        <div v-for="(comp, i) in remaining.split(`:`)" :key="`${comp}_${i}`" class = "flex flex-row gap-4 items-center">
            <div class="table-cell text-royal-yellow p-2 align-middle lg:w-48 text-center">{{ comp }}</div>
            <div v-if="i !== remaining.split(`:`).length - 1">:</div>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { Duration } from "@retraigo/duration.js/src/duration";
    const { time } = defineProps<{ time: number }>();

    const comps = ["99", "23", "59", "59"]

    const date = new Date(time);
    const remaining = ref("00:00:00:00");
    const refreshRemaining = () =>
        (remaining.value = new Duration(
            date.getTime() - Date.now()
        ).toTimeString("d", "s"));

    setInterval(refreshRemaining, 1000);
</script>
