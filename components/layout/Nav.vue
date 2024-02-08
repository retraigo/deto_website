<template>
    <aside
        :class="`flex flex-col lg:flex-shrink-0 items-start space-y-8 transition duration-500 ease-in-out pt-8 h-screen lg:max-h-[70vh] overflow-y-hidden pr-2 w-full lg:w-64 pb-16`">
        <div v-for="link, i of links" :key="link._path">
            <a class="font-semibold text-lg cursor-pointer" @click="_ => expand(i)">{{
                link.title
            }}</a>
            <ul :class="`${open[i] ? `py-2 max-h-[50rem]` : `max-h-0`} overflow-y-hidden transition-all duration-500 ease-in-out flex flex-col items-start space-y-8 text-sm`" v-if="link.children?.length">
                <li v-for="child in link.children" :key="child._path" :class="`${child._path === route.path
                    ? `font-bold underline text-red-300`
                    : `font-semibold text-royal-yellow`
                    }  uppercase`">
                    <a :href="child._path">{{ child.title }}</a>
                </li>
            </ul>
        </div>
    </aside>
</template>

<script setup lang="ts">
const layoutStore = useLayoutStore();

const toggleNav = ref(false);
const route = useRoute();

const paths = route.path.split("/");
const parent = ["events"].includes(paths.at(-1)?.toLowerCase() || "a")
    ? paths.join("/")
    : paths.slice(0, paths.length - 1).join("/");

const log = (x: unknown) => console.log(x)

const navigation = await fetchContentNavigation()

// @ts-ignore pls
const links = navigation.find(x => x.title === `2024`).children.find(x => x.title === `Events`).children as any[]
const open = ref(new Array(links.length).fill(false))

function expand(i: number) {
    open.value.fill(false)
    open.value[i] = true;
}

</script>
