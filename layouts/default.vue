<template>
    <div
        class="min-h-screen flex flex-col space-y-8 items-center w-full tracking-wide font-quicksand bg-white text-zinc-900 dark:bg-zinc-900 dark:text-white"
    >
    <UiHeader />
        <main class="flex-1">
            <slot />
        </main>
        <UiFooter />
    </div>
</template>
