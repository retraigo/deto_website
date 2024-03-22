<template>
    <div
        class="min-h-screen flex flex-col items-center relative z-0 w-full tracking-wide font-ltfunk bg-white text-zinc-900 circus dark:bg-repeat bg-fixed dark:text-white transition duration-500 ease-in-out">
        <div class="h-screen fixed inset-0 -z-10 w-full bg-black/30"></div>
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
        name: "Register",
        icon: "M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z",
        href: "https://forms.gle/aoucCKGdBsqgzVaNA",
    },
    {
        name: "Events",
        icon: "M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z M 4 22 4 15",
        href: "/events",
    },

];
</script>