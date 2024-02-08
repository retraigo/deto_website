<template>
    <header
        :class="`top-0 left-0 w-full bg-black/50 bg-fixed flex flex-row py-2 lg:px-2 z-40 border-b text-black dark:text-white font-semibold border-royal-orange dark:border-royal-yellow ${
            layoutStore.hoverFooterLogo
                ? `lg:border-royal-orange dark:lg:border-royal-yellow`
                : `lg:border-transparent dark:lg:border-transparent`
        } fixed lg:relative transition-color duration-500 ease-in-out font-ltfunk`"
    >
        <div
            class="relative flex flex-row lg:items-center lg:max-w-[110rem] mx-auto w-full justify-between"
        >
            <button
                :class="`
                  inline-flex
                  items-center
                  justify-center
                  p-2
                  rounded-md
                text-white focus:outline-none
      `"
                @click="toggleNav"
            >
                <span :class="`sr-only`">Open menu</span>
                <svg
                    :class="`block h-8 w-8 text-white stroke-2 stroke-black dark:stroke-white`"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 30 24"
                >
                    <g>
                        <path
                            :class="`transition-all duration-400 transform ease-in-out`"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            :d="
                                navState ? `M 04 06 L 24 24` : `M 04 06 L 20 06`
                            "
                        />
                        <path
                            :class="`transition-all duration-400 transform ease-in-out`"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            :d="
                                navState ? `M 04 06 L 24 24` : `M 04 14 L 28 14`
                            "
                        />
                        <path
                            :class="`transition-all duration-400 transform ease-in-out`"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            :d="
                                navState ? `M 24 06 L 04 24` : `M 04 22 L 12 22`
                            "
                        />
                    </g>
                </svg>
            </button>
            <img
                src="/icons/2024/icon.webp"
                :class="`transition duration-500 ease-in-out w-16 h-16`"
            />

            <section
                id="nav"
                :class="`p-2 hidden lg:flex lg:flex-row justify-end w-full gap-4 relative lg:bg-transparent`"
            >
                <a href="/2024">
                    <button
                        class="block w-full py-2 px-4 hover:text-royal-orange dark:hover:text-royal-yellow transition-all duration-500 ease-in-out border-b-2 border-transparent hover:border-royal-yellow"
                    >
                        Home
                    </button>
                </a>
                <a href="/2024/events">
                    <button
                        class="block w-full py-2 px-4 hover:text-royal-orange dark:hover:text-royal-yellow transition-all duration-500 ease-in-out border-b-2 border-transparent hover:border-royal-yellow"
                    >
                        Events
                    </button>
                </a>
                <a href="/2024/register">
                    <button
                        class="block w-full py-2 px-4 hover:text-royal-orange dark:hover:text-royal-yellow transition-all duration-500 ease-in-out border-b-2 border-transparent hover:border-royal-yellow"
                    >
                        Register
                    </button>
                </a>
                <a href="/2024/pass">
                    <button
                        class="block w-full py-2 px-4 hover:text-royal-orange dark:hover:text-royal-yellow transition-all duration-500 ease-in-out border-b-2 border-transparent hover:border-royal-yellow"
                    >
                        Trifecta-Pass
                    </button>
                </a>
                <a href="/2024/office">
                    <button
                        class="block w-full py-2 px-4 hover:text-royal-orange dark:hover:text-royal-yellow transition-all duration-500 ease-in-out border-b-2 border-transparent hover:border-royal-yellow"
                    >
                        Office
                    </button>
                </a>
            </section>
            <section
                id="nav"
                :class="`p-2 flex flex-col overflow-y-auto min-h-screen w-full gap-4 absolute top-[4.5rem] left-0 transition duration-500 ease-in-out bg-black/50 lg:bg-transparent dark:lg:bg-transparent dark:lg:bg-none ${
                    navState ? 'translate-x-0' : '-translate-x-[200rem]'
                }`"
            >
                <LayoutNav class="relative lg:left-0 lg:max-w-xl lg:bg-black/60 lg:p-8" />
            </section>
        </div>
    </header>
</template>

<script setup>
    const layoutStore = useLayoutStore();
    const navState = ref(false);

    const toggleNav = () => {
        navState.value = !navState.value;
    };
</script>
