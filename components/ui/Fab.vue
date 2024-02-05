<template>
    <div :class="`fixed ${right ? `bottom-0 right-0` : `top-0 left-0`} z-40`">
        <div class="relative flex flex-col items-center gap-8 justify-start font-atmospheric">
            <button :class="`
                  inline-flex
                  items-center z-50
                  justify-center w-16 h-16 bg-black lg:bg-royal-yellow
                  p-2                 text-white focus:outline-none
      `" @click="toggle">
                <span :class="`sr-only`">Open menu</span>
                <svg :class="`block h-8 w-8 text-white stroke-2 stroke-white lg:stroke-black`"
                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 30 24">
                    <g>
                        <path :class="`transition-all duration-400 transform ease-in-out`" stroke-linecap="round"
                            stroke-linejoin="round" :d="navState ? `M 04 06 L 24 24` : `M 04 06 L 20 06`
                                " />
                        <path :class="`transition-all duration-400 transform ease-in-out`" stroke-linecap="round"
                            stroke-linejoin="round" :d="navState ? `M 04 06 L 24 24` : `M 04 14 L 28 14`
                                " />
                        <path :class="`transition-all duration-400 transform ease-in-out`" stroke-linecap="round"
                            stroke-linejoin="round" :d="navState ? `M 24 06 L 04 24` : `M 04 22 L 12 22`
                                " />
                    </g>
                </svg>
            </button>
            <a v-for="(route, i) in links" :key="route.name" :href="route.href"
                class="absolute block transition duration-500 ease-in-out transform z-40 group bg-black/40 dark:bg-transparent p-2"
                :style="{
                    transform: `translate(0, ${navState ? (right ? -1 : 1) * 5 * (i + 1) : 0
                        }rem)`,
                }">
                <span class="sr-only">{{ route.name }}</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    :class="`fill-none stroke-2 transition duration-500 ease-in-out stroke-white hover:stroke-royal-orange dark:hover:stroke-royal-yellow`">
                    <path :d="route.icon" />
                </svg>
                <div :class="`absolute overflow-hidden inset-y-0 w-[8rem] ${right ? `-left-24` : `left-8`
                    } ${navState ? `max-w-[70rem]` : `max-w-0`
                    } flex justify-end transition-all overflow-hidden duration-500 ease-in-out text-left`" :style="{
        transform: `translate(${right ? `-2rem` : `1rem`})`,
    }">
                    <MiscTag type="a" class="w-full">
                        <div class="font-bold uppercase w-full">
                            {{ route.name }}
                        </div>
                    </MiscTag>
                </div>
            </a><!--
            <button
                class="absolute lg:static block transition duration-500 ease-in-out transform z-40 group bg-black/40 dark:bg-transparent p-2"
                :style="{
                    transform: `translate(0, ${
                        navState ? (right ? -1 : 1) * 5 * (links.length + 1) : 0
                    }rem)`,
                }"
                @click="switchMode"
            >
                <span class="sr-only">Color</span>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    :class="`fill-none stroke-2 transition duration-500 ease-in-out stroke-white hover:stroke-royal-orange dark:hover:stroke-royal-yellow`"
                >
                    <path
                        :d="
                            $colorMode.value === `dark`
                                ? `M 7 12 A 5 5 0 0 0 17 12 A 5 5 0 0 0 7 12 M 12 1 L 12 3 M 12 21 L 12 23 M 4.22 4.22 L 5.64 5.64 M 18.36 18.36 L 19.78 19.78 M 1 12 L 3 12 M 21 12 L 23 12 M 3.22 19.78 L 5.64 18.36 M 18.36 5.64 L 19.78 4.22`
                                : $colorMode.value === `preferred`
                                ? `M 13 2 L 3 14 L 12 14 L 11 22 L 21 10 L 12 10 L 13 2 Z`
                                : `M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z`
                        "
                    />
                </svg>
                <div
                    :class="`lg:max-w-[70rem] w-[8rem] absolute inset-y-0 ${
                        right ? `-left-24` : `left-8`
                    } ${
                        navState ? `max-w-[70rem]` : `max-w-0`
                    } flex justify-end transition-all overflow-hidden duration-500 ease-in-out text-left`"
                    :style="{
                        transform: `translate(${right ? `-2rem` : `1rem`})`,
                    }"
                >
                    <MiscTag type="a" class="w-full"
                        ><div class="font-bold uppercase w-full"
                            >{{ $colorMode.value }}
                        </div></MiscTag
                    >
                </div>
            </button>-->
        </div>
        <div :class="`fixed w-full inset-0 ${navState ? `visible` : `invisible`
            } bg-black/60 z-30`" @click="() => (navState = false)" />
    </div>
</template>

<script setup lang="ts">
const { right, links } = defineProps<{ right: boolean, links: { name: string, icon: string, href: string }[] }>();
const navState = ref(false);

const toggle = () => (navState.value = !navState.value);

const colorModes = ["preferred", "dark", "light"];

const colorMode = useColorMode();

const current = ref(colorModes.indexOf(colorMode.value));

const switchMode = () => {
    if (current.value === 2) current.value = 0;
    else current.value += 1;
    colorMode.preference = colorModes[current.value];
};
</script>
