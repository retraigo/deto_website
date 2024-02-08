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
        <span class="left-5 relative text-red-900">
            <slot />
        </span>

    </span>
</template>
<script setup lang="ts">
</script>
