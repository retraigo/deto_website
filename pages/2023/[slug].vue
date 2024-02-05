<template>
    <NuxtLayout>
        <section class="mx-auto space-y-8">
            <ContentDoc>
                <template #default="{ doc }">
                    <div
                        class="pt-8 flex flex-col flex-grow text-justify lg:flex-row items-start lg:justify-between space-y-8 gap-8 lg:space-y-0 lg:space-x-8"
                    >
                        <article
                            class="mx-auto flex-1 prose prose-gray dark:prose-invert lg:max-w-5xl flex-grow w-full prose-code:before:content-none prose-code:after:content-none p-8 lg:px-4 bg-transparent rounded-xl overflow-y-auto"
                        >
                            <ContentRenderer :value="doc" />
                        </article>
                    </div>
                </template>
                <template #not-found>
                    <div class="p-8">404 Totally not found.</div>
                </template>
                <template #empty>
                    <div class="p-8">There is nothing here.</div>
                </template>
            </ContentDoc>
        </section>
    </NuxtLayout>
</template>
<script setup lang="ts"></script>
