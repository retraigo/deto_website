<template>
    <div
        class="flex flex-col space-y-2"
    >
        <input
            :id="cid || `TAG_INPUTS`"
            @keyup.enter="submit"
            @keydown.backspace="handleBackspace"
            maxlength="100"
            :class="`bg-zinc-200 text-zinc-900 dark:bg-black/50 dark:text-white border-royal-orange/50 dark:border-royal-yellow/50 border p-2 text-xl rounded-md max-w-md w-full`"
            type="text"
            v-model="inputString"
            :disabled="tags.length === maxTags"
            @input="(_e) => handleInput(inputString)"
            :placeholder="placeholder"
        />
        <div class="flex flex-row flex-wrap gap-2">
            <MiscTag
                class="pl-3"
                v-for="(tag, i) in tags"
                :key="tag"
                :type="`dash`"
                ><span>{{ tag }}</span
                ><button
                    class="pl-3 pr-1 text-lg font-light"
                    @click="() => removeTag(i)"
                >
                    ×
                </button></MiscTag
            >
        </div>
    </div>
</template>
<script setup lang="ts">
    const router = useRouter();
    const emit = defineEmits<{
        (e: "update", tags: string[]): void;
    }>();
    const { defaultTags, cid, maxTags } = defineProps<{
        defaultTags?: string[];
        cid?: string;
        maxTags?: number;
        placeholder?: string;
    }>();
    const tags = ref<string[]>(defaultTags ?? []);
    const inputString = ref("");
    const inputShow = computed(() => (tags.value.length > 8 ? false : true));
    function handleInput(newVal: string) {
        if(tags.value.length === maxTags) {
            return;
        };
        if (newVal.endsWith(",")) {
            tags.value.push(newVal.slice(0, newVal.length - 1));
            tags.value = [...new Set(tags.value)];
            inputString.value = "";
            emit("update", tags.value);
        }
    }
    function handleBackspace(e: Event) {
        if (inputString.value.length !== 0) return;
        tags.value.splice(tags.value.length - 1, 1);
    }
    function removeTag(i: number) {
        tags.value.splice(i, 1);
        emit("update", tags.value);
    }
    function submit() {
        router.push(`/search?query="${tags.value.join(`+`)}"`);
    }
</script>
