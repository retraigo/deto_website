<template>
    <div :class="`fixed ${right ? `bottom-0 right-0` : `top-0 left-0`} z-40`">
        <div
            class="relative flex flex-col items-center gap-8 justify-center font-atmospheric"
        >
            <button
                :class="`
                  inline-flex
                  items-center z-50
                  justify-center bg-black w-16 h-16
                  lg:pointer-events-none
                  p-2                 text-white focus:outline-none
      `"
                @click="toggle"
            >
                <span :class="`sr-only`">Open menu</span>
                <svg
                    :class="`block lg:hidden h-8 w-8 text-white stroke-2 stroke-white`"
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
            <a
                v-for="(route, i) in links"
                :key="route.name"
                :href="route.href"
                class="absolute lg:static block transition duration-500 ease-in-out transform z-40 group bg-black/40 dark:bg-transparent p-2"
                :style="{
                    transform: `translate(0, ${
                        navState ? (right ? -1 : 1) * 5 * (i + 1) : 0
                    }rem)`,
                }"
            >
                <span class="sr-only">Home</span>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    :class="`fill-none stroke-2 transition duration-500 ease-in-out stroke-white hover:stroke-royal-orange dark:hover:stroke-royal-yellow`"
                >
                    <path :d="route.icon" />
                </svg>
                <div
                    :class="`absolute inset-y-0 lg:max-w-[70rem] ${
                        right ? `-left-24` : `left-8`
                    } ${
                        navState ? `max-w-[70rem] w-[3rem]` : `max-w-0`
                    } flex justify-end transition-all overflow-hidden duration-500 ease-in-out text-right`"
                    :style="{
                        transform: `translate(${right ? `-2rem` : `1rem`})`,
                    }"
                >
                    <MiscTag type="a"
                        ><span class="font-bold uppercase">{{
                            route.name
                        }}</span></MiscTag
                    >
                </div>
            </a>
            <button
                class="absolute lg:static block transition duration-500 ease-in-out transform z-40 group bg-black/40 dark:bg-transparent p-2"
                :style="{
                    transform: `translate(0, ${
                        navState ? (right ? -1 : 1) * 5 * (links.length + 5) : 0
                    }rem)`,
                }"
                @click="switchMode"
            >
                <span class="sr-only">Home</span>
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
                    :class="`lg:max-w-[70rem] absolute inset-y-0 ${
                        right ? `-left-24` : `left-8`
                    } ${
                        navState ? `max-w-[70rem]` : `max-w-0`
                    } flex justify-end transition-all overflow-hidden duration-500 ease-in-out text-right`"
                    :style="{
                        transform: `translate(${right ? `-2rem` : `1rem`})`,
                    }"
                >
                    <MiscTag type="a"
                        ><span class="font-bold uppercase"
                            >{{ $colorMode.value }}
                        </span></MiscTag
                    >
                </div>
            </button>
        </div>
        <div
            :class="`fixed w-full inset-0 ${
                navState ? `visible` : `invisible`
            } bg-black/60 z-30`"
            @click="() => (navState = false)"
        />
    </div>
</template>

<script setup lang="ts">
    const { right } = defineProps<{ right: boolean }>();
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

    const links = [
        {
            name: "Home",
            icon: "M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z M 9 22 L 9 12 L 15 12 L 15 22 Z",
            href: "/",
        },
        {
            name: "Events",
            icon: "M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z M 4 22 4 15",
            href: "/events",
        },
        {
            name: "Event Register",
            icon: "M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z",
            href: "/register",
        },
        {
            name: "All Pass Register",
            icon: "M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z",
            href: "/pass",
        },
        {
            name: "Office",
            icon: "M 5 8 A 7 7 0 0 0 19 8 A 7 7 0 0 0 5 8 M 8.21 13.89 L 7 23 L 12 20 L 17 23 L 15.79 13.88",
            href: "/office",
        },
        {
            name: "Contact",
            icon: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",
            href: "/contact",
        },
    ];
</script>
