<template>
    <div
        :class="`fixed ${right ? `bottom-0 right-0` : `top-0 left-0`} z-40`"
    >
        <div class="relative flex items-center justify-center">
            <button
                :class="`
                  inline-flex
                  items-center z-50
                  justify-center bg-black w-16 h-16
                  p-2                 text-white focus:outline-none
      `"
                @click="toggle"
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
            <a
                v-for="(route, i) in links"
                :key="route.name"
                :href="route.href"
                class="absolute block transition duration-500 ease-in-out transform z-40 group"
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
                    :class="`fill-none stroke-2 transition duration-500 ease-in-out stroke-black dark:stroke-white hover:stroke-royal-orange dark:hover:stroke-royal-yellow`"
                >
                    <path :d="route.icon" />
                </svg>
                <div
                    :class="`absolute inset-y-0 ${right ? `-left-24` : `left-8`} ${
                        navState ? `max-w-[70rem]` : `max-w-0`
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
    //
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
            name: "Register",
            icon: "M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z",
            href: "/register",
        },
        {
            name: "Office",
            icon: "M 5 8 A 7 7 0 0 0 19 8 A 7 7 0 0 0 5 8 M 8.21 13.89 L 7 23 L 12 20 L 17 23 L 15.79 13.88",
            href: "/office",
        },
    ];
</script>
