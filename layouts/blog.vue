<template>
    <div
        class="min-h-screen lg:h-screen flex flex-col items-center relative circus bg-fixed dark:text-white tracking-wide overflow-x-hidden break-words font-ltfunk">
        <!--        <div class = "fixed -bottom-24 -right-24 bg-chaos-tertiary w-96 h-96 blur-2xl rounded-full opacity-60" />-->
        <LayoutHeader />
        <main class="flex-1 w-full max-w-7xl mt-24 lg:mt-0">
            <slot />
        </main>
        <UiFab :links="links" :right="true" class="lg:hidden" />
        <UiFooter />
    </div>
</template>
<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
</style>
<script setup lang="ts">
const route = useRoute();

const paths = route.path.split("/");
const parent = paths.slice(0, paths.length - 1).join("/");

const layoutStore = useLayoutStore();
const links = [
    {
        name: "Home",
        icon: "M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z M 9 22 L 9 12 L 15 12 L 15 22 Z",
        href: "/2024",
    },
    {
        name: "Trifecta",
        icon: "M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z",
        href: "/2024/pass",
    },
    {
        name: "Register",
        icon: "M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z",
        href: "/2024/register",
    },
    {
        name: "Pre-Events",
        icon: "M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z M 4 22 4 15",
        href: "/2024/events/#pre-events",
    },
    {
        name: "Events",
        icon: "M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z M 4 22 4 15",
        href: "/2024/events",
    },
    {
        name: "Office",
        icon: "M 5 8 A 7 7 0 0 0 19 8 A 7 7 0 0 0 5 8 M 8.21 13.89 L 7 23 L 12 20 L 17 23 L 15.79 13.88",
        href: "/2024/office",
    },

];
</script>
