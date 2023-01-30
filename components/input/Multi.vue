<template>
    <div class="flex flex-col gap-4 items-stretch p-2">
        <div
            v-for="(item, i) in values"
            :key="`entry_${i}_${editCount}`"
            class="flex flex-row flex-wrap items-center gap-4 justify-between"
        >
            <div
                class="flex flex-row items-center gap-2"
                v-for="(field, j) in fields"
                :key="`field_${field.name}_of_${j}`"
            >
                <label
                    :for="`field_${j}_of_${i}`"
                    class="text-xs font-azonix"
                    >{{ field.name }}</label
                >
                <input
                    :id="`field_${j}_of_${i}`"
                    :name="field.name"
                    :type="field.type"
                    v-model="values[i][j].content"
                    @input="(e) => handleInput(e, i, j)"
                    class="bg-zinc-200 dark:bg-black/50 dark:text-white border-royal-orange/50 dark:border-royal-yellow/50 border max-w-md w-full text-sm rounded-md p-2"
                />
            </div>
            <button @click="() => removeEntry(i)">
                <svg
                    :class="`block h-8 w-8 text-white stroke-2 stroke-white`"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 30 24"
                >
                    <g>
                        <path
                            :class="`transition-all duration-400 transform ease-in-out`"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            :d="`M 04 06 L 24 24 M 04 06 L 24 24 M 24 06 L 04 24`"
                        />
                    </g>
                </svg>
            </button>
        </div>
    </div>
</template>
<script setup lang="ts">
    const { fields, maxTags } = defineProps<{
        fields: { name: string; type: "text" | "email" | "textarea" }[];
        maxTags?: number;
    }>();
    const emit = defineEmits<{
        (e: "update", content: { name: string; content: string }[][]): void;
    }>();

    const editCount = ref(0);

    const values = ref([fields.map((x) => ({ ...x, content: "" }))]);

    function handleInput(e: Event, i: number, j: number) {
        if (i === values.value.length - 1) {
            if (values.value.length < Number(maxTags))
                values.value.push(fields.map((x) => ({ ...x, content: "" })));
        }
        emit("update", values.value);
    }
    function removeEntry(i: number) {
        if (i === values.value.length - 1) return;
        values.value.splice(i, 1);
        editCount.value += 1;
    }
</script>
