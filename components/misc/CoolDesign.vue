<template>
    <svg
        :stroke="layoutStore.hoverFooterLogo ? `#08c2c6` : `#e0e0e0`"
        viewBox="0 0 64 64"
        fill="transparent"
        stroke-width="0.125px"
        :class="`transition duration-500 ease-in-out dashed ${layoutStore.hoverFooterLogo ? `opacity-100` : `opacity-0`}`"
    >
        <path d="M 64 0 L 32 0 L 32 16 L 32 32 L 4 64 L 0 64 " />
    </svg>
</template>

<script setup lang="ts">
    const layoutStore = useLayoutStore();
</script>
