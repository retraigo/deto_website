<template>
    <span style="background-image:url(/ticket.webp)" :class="`
      text-xs
      font-medium
      flex
      items-center
      px-1.5
      py-0.5
      rounded
      bg-center bg-cover
    `">
        <div :class="`${!gray ? `left-5` : ``} relative text-red-900 w-full`">
            <slot />
        </div>

    </span>
</template>
<script setup lang="ts">
const {gray} = defineProps<{gray: boolean}>()
</script>
