<template>
    <section class="p-4 w-full max-w-[100rem] mx-auto">
        <div
            :class="`border-t ${
                layoutStore.hoverFooterLogo
                    ? `border-royal-orange dark:border-royal-yellow`
                    : `border-transparent dark:border-transparent`
            } w-full py-4 relative transition-colors duration-500 ease-in-out`"
        >
            <div class="flex items-center justify-center relative z-20 gap-4">
                <a href="https://www.instagram.com/datronix.24/" target="_blank">
                    <span class="sr-only">Datronix Instagram</span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        stroke-width="1"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        :class="`fill-none transition duration-500 ease-in-out ${
                            layoutStore.hoverFooterLogo
                                ? `stroke-royal-orange dark:stroke-royal-yellow`
                                : `stroke-black dark:stroke-white`
                        } hover:stroke-royal-orange dark:hover:stroke-royal-yellow`"
                    >
                        <rect
                            x="2"
                            y="2"
                            width="20"
                            height="20"
                            rx="5"
                            ry="5"
                        />
                        <path
                            d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"
                        />
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                    </svg>
                </a>
                <a
                    href="https://srmeaswari.ac.in/"
                    target="_blank"
                >
                    <span class="sr-only">SRM Easwari</span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        stroke-width="1"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        :class="`fill-none transition duration-500 ease-in-out ${
                            layoutStore.hoverFooterLogo
                                ? `stroke-royal-orange dark:stroke-royal-yellow`
                                : `stroke-black dark:stroke-white`
                        } hover:stroke-royal-orange dark:hover:stroke-royal-yellow`"
                    >
                        <circle cx="12" cy="12" r="10" />
                        <circle cx="12" cy="12" r="8" />
                        <path
                            d="M 12 18 C 8 14 8 16 8 14 L 8 8 L 16 8 L 16 14 C 16 16 16 14 12 18 Z M 10 8 A 2 2 0 0 1 14 8"
                        />
                    </svg>
                </a>
                <a
                    href="/"
                    target="_blank"
                >
                    <span class="sr-only">Home</span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="1"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        :class="`fill-none transition duration-500 ease-in-out ${
                            layoutStore.hoverFooterLogo
                                ? `stroke-royal-orange dark:stroke-royal-yellow`
                                : `stroke-black dark:stroke-white`
                        } hover:stroke-royal-orange dark:hover:stroke-royal-yellow`"
                    >
                        <path
                            d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"
                        ></path>
                        <polyline points="9 22 9 12 15 12 15 22"></polyline>
                    </svg>
                </a>
            </div>
        </div>
    </section>
</template>
<script setup lang="ts">
    const layoutStore = useLayoutStore();
</script>
