<template>
    <NuxtLayout>
        <section class="mx-auto space-y-8 max-w-7xl mt-24">
            <h1 class="text-center text-4xl font-bold font-azonix mx-auto">
                Office Bearers
            </h1>
            <div class="grid grid-cols-1 lg:grid-cols-4 gap-8">
                <MiscProfile
                    v-for="person in ob"
                    :name="person.name"
                    :title="person.title"
                    :image="person.image"
                    :key="person.title"
                    data-aos="fade-up"
                    data-aos-easing="linear"
                    data-aos-delay="100"
                    data-aos-duration="260"
                />
            </div>
        </section>
    </NuxtLayout>
</template>

<script setup lang="ts">
    const ob = OFFICE_BEARERS;
    useHead({
        title: "The Office",
        meta: [
            {
                name: "description",
                content: "The list of office bearers of SCARDS",
            },
        ],
    });
</script>
