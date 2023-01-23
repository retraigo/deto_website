<template>
    <div
        class="min-h-screen lg:h-screen flex flex-col items-center relative dark:bg-pattern bg-fixed dark:text-white tracking-wide overflow-x-hidden break-words"
    >
        <!--        <div class = "fixed -bottom-24 -right-24 bg-chaos-tertiary w-96 h-96 blur-2xl rounded-full opacity-60" />-->
        <LayoutHeader />
        <main class="flex-1 w-full max-w-7xl mt-24 lg:mt-0">
            <slot />
        </main>
        <UiFab :right="true" class="lg:hidden" />
        <UiFab :right="false" class="lg:block hidden" />
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
</script>
