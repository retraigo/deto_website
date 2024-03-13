<template>
    <div
        class="min-h-screen flex flex-col items-center w-full tracking-wide font-ltfunk bg-white text-zinc-900 circus dark:bg-repeat bg-fixed dark:text-white transition duration-500 ease-in-out">
        <UiFab :right="false" :links="links" />
        <main class="flex-1 w-full lg:mt-0">
            <slot />
        </main>
        <UiFooter />
    </div>
</template>
<script setup lang="ts">
const links = [
    {
        name: "Home",
        icon: "M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z M 9 22 L 9 12 L 15 12 L 15 22 Z",
        href: "/",
    },
    {
        name: "Trifecta",
        icon: "M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z",
        href: "/pass",
    },
    {
        name: "Register",
        icon: "M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z",
        href: "/register",
    },
    {
        name: "Pre-Events",
        icon: "M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z M 4 22 4 15",
        href: "/events/#pre-events",
    },
    {
        name: "Events",
        icon: "M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z M 4 22 4 15",
        href: "/events",
    },
    {
        name: "Office",
        icon: "M 5 8 A 7 7 0 0 0 19 8 A 7 7 0 0 0 5 8 M 8.21 13.89 L 7 23 L 12 20 L 17 23 L 15.79 13.88",
        href: "/office",
    },

];
</script>