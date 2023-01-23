<template>
    <aside
        :class="`flex flex-col lg:flex-shrink-0 items-start space-y-8 lg:border-r  ${
            layoutStore.hoverFooterLogo
                ? `border-royal-yellow`
                : `border-zinc-600`
        } transition duration-500 ease-in-out pt-8 h-screen lg:max-h-[70vh] overflow-y-auto pr-2 w-full lg:w-64 pb-16`"
    >
        <ContentNavigation v-slot="{ navigation }">
            <div
                v-for="link of navigation.reduce((acc: any[], v: any) => acc.concat(v.children), []).filter((x: any) => x /*&& x?._path.includes(parent)*/)"
                :key="link._path"
            >
                <a class="font-semibold text-lg" :href="link._path">{{
                    link.title
                }}</a>
                <ul
                    class="py-2 flex flex-col items-start space-y-8 text-sm"
                    v-if="link.children?.length"
                >
                    <li
                        v-for="child in link.children"
                        :key="child._path"
                        :class="`${
                            child._path === route.path
                                ? `font-bold underline`
                                : ``
                        } text-royal-orange dark:text-royal-yellow`"
                    >
                        <a :href="child._path">{{ child.title }}</a>
                    </li>
                </ul>
            </div>
        </ContentNavigation>
    </aside>
</template>

<script setup lang="ts">
    const layoutStore = useLayoutStore();

    const toggleNav = ref(false);
    const route = useRoute();

    const paths = route.path.split("/");
    const parent = ["events"].includes(paths.at(-1)?.toLowerCase()  || "a")
        ? paths.join("/")
        : paths.slice(0, paths.length - 1).join("/");
</script>
