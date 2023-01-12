<template>
    <div
        class="min-h-screen flex flex-col items-center w-full tracking-wide font-quicksand bg-white text-zinc-900 dark:bg-black dark:bg-pattern dark:bg-repeat bg-fixed dark:text-white transition duration-500 ease-in-out"
    >
        <UiHeader />
        <main class="flex-1 w-full mt-20 lg:mt-0">
            <slot />
        </main>
        <UiFooter />
    </div>
</template>
