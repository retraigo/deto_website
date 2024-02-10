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
                    <img
                        src="/icons/2024/icon.webp"
                        :class="`${
                            layoutStore.hoverFooterLogo
                                ? `grayscale-0`
                                : `grayscale`
                        } transition duration-500 ease-in-out cursor-help w-8 h-8`"
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
            <div class="flex items-center justify-center gap-2 relative z-20 text-xs mt-2">
                <span>Made with</span>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="8"
                    height="8"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-heart"
                >
                    <path
                        d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
                    ></path>
                </svg>
                <a href="https://nett.moe">by Pranev</a>
            </div>
        </div>
    </footer>
</template>
<script setup lang="ts">
    const layoutStore = useLayoutStore();
    const colorModes = ["preferred", "dark", "light"];

    const colorMode = useColorMode();

    const current = ref(0);

    const switchMode = () => {
        if (current.value === 2) current.value = 0;
        else current.value += 1;
        colorMode.preference = colorModes[current.value];
    };
</script>
