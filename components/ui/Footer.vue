<template>
    <footer class="p-4 w-full font-azonix mt-8">
        <UiPreFooter />
        <div
            :class="`border-t ${
                layoutStore.hoverFooterLogo
                    ? `border-royal-orange dark:border-royal-yellow`
                    : `border-zinc-700 dark:border-zinc-300`
            } w-full py-4 relative transition-colors duration-500 ease-in-out max-w-7xl mx-auto mt-4`"
        >
            <div
                class="absolute inset-0 -top-4 flex justify-center items-start z-10"
            >
                <div class="relative flex justify-center items-center">
                    <div
                        class="absolute bg-white dark:bg-zinc-900 rounded-full blur-md w-16 h-16"
                    />
                    <MiscLogo
                        :size="`32`"
                        :gray="false"
                        :eye-closed="false"
                        :left="false"
                        :class="`${
                            layoutStore.hoverFooterLogo
                                ? `grayscale-0`
                                : `grayscale`
                        } transition duration-500 ease-in-out cursor-help`"
                        @mouseover="() => (layoutStore.hoverFooterLogo = true)"
                        @mouseleave="
                            () => (layoutStore.hoverFooterLogo = false)
                        "
                        @touchstart="() => (layoutStore.hoverFooterLogo = true)"
                        @touchend="() => (layoutStore.hoverFooterLogo = false)"
                        @click="switchMode"
                    />
                </div>
            </div>
            <div class="flex items-center justify-center relative z-20">
                © 2022 - {{ new Date().getFullYear() }} {{ Constants.SC }}
            </div>
        </div>
    </footer>
</template>
<script setup lang="ts">
    const layoutStore = useLayoutStore();
    const colorModes = ["preferred", "dark", "light"];

    const colorMode = useColorMode()

    const current = ref(0);

    const switchMode = () => {
        if(current.value === 2) current.value = 0;
        else current.value += 1;
        colorMode.preference = colorModes[current.value]
    }
</script>
