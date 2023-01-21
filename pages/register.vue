<template>
    <NuxtLayout>
        <section class="mx-auto space-y-8 mt-8">
            <h1 class="text-center text-4xl font-bold font-azonix mx-auto">
                Register for Events
            </h1>

            <form
                class="mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4 items-center max-w-xl px-2"
            >
                <label
                    for="EVENT_NAME"
                    class="text-xl font-azonix font-semibold uppercase"
                    >Event</label
                >
                <select
                    id="EVENT_NAME"
                    v-model="current_ev"
                    placeholder="Choose an Event"
                    class="bg-zinc-200 dark:bg-black/50 dark:text-white border-royal-orange/50 dark:border-royal-yellow/50 border max-w-md w-full text-lg rounded-md p-2 h-12 cursor-pointer"
                    required
                >
                    <option value="" disabled selected>Choose an Event</option>
                    <optgroup label="Technical">
                        <option
                            v-for="ev in tech_ev"
                            :key="ev.name"
                            :value="ev.name"
                        >
                            {{ ev.name }}
                        </option>
                    </optgroup>
                    <optgroup label="Non-Technical">
                        <option
                            v-for="ev in nontech_ev"
                            :key="ev.name"
                            :value="ev.name"
                        >
                            {{ ev.name }}
                        </option>
                    </optgroup>
                </select>
                <label
                    for="TEAM_NAME"
                    class="text-xl font-azonix font-semibold uppercase"
                    >Team Name</label
                >
                <input
                    id="TEAM_NAME"
                    type="text"
                    placeholder="The Watchers"
                    class="bg-zinc-200 dark:bg-black/50 dark:text-white border-royal-orange/50 dark:border-royal-yellow/50 border max-w-md w-full text-lg rounded-md p-2"
                    required
                />
                <label
                    for="TEAM_MEM"
                    class="text-xl font-azonix font-semibold uppercase"
                    >Team Members</label
                >
                <InputTag cid="TEAM_MEM" :max-tags="currentEvent?.maxTeam" />
                <label
                    for="COLLEGE_NAME"
                    class="text-xl font-azonix font-semibold uppercase"
                    >Insitution Name</label
                >
                <input
                    id="COLLEGE_NAME"
                    type="text"
                    placeholder="Easwari Engineering College"
                    class="bg-zinc-200 dark:bg-black/50 dark:text-white border-royal-orange/50 dark:border-royal-yellow/50 border max-w-md w-full text-lg rounded-md p-2"
                    required
                />
                <label
                    for="DEGREE"
                    class="text-xl font-azonix font-semibold uppercase"
                    >Degree & Branch</label
                >
                <input
                    id="DEGREE"
                    type="text"
                    placeholder="BSc. Computer Science"
                    class="bg-zinc-200 dark:bg-black/50 dark:text-white border-royal-orange/50 dark:border-royal-yellow/50 border max-w-md w-full text-lg rounded-md p-2"
                    required
                />
                <label
                    for="CONTACT_NUMBER"
                    class="text-xl font-azonix font-semibold uppercase"
                    >Contact Number</label
                >
                <input
                    id="CONTACT_NUMBER"
                    type="text"
                    placeholder="+919876598765"
                    pattern="^(?:\+91)?[0-9]{10}$"
                    class="bg-zinc-200 dark:bg-black/50 dark:text-white border-royal-orange/50 dark:border-royal-yellow/50 border max-w-md w-full text-lg rounded-md p-2"
                    required
                />
                <label
                    for="EMAIL_ID"
                    class="text-xl font-azonix font-semibold uppercase"
                    >Email ID</label
                >
                <input
                    id="EMAIL_ID"
                    type="email"
                    placeholder="john.doe@gmail.com"
                    class="bg-zinc-200 dark:bg-black/50 dark:text-white border-royal-orange/50 dark:border-royal-yellow/50 border max-w-md w-full text-lg rounded-md p-2"
                    required
                />
                <button type="submit" disabled>
                    <ButtonTech size="100" text="Opens Soon" type="gray" />
                </button>
            </form>
        </section>
    </NuxtLayout>
</template>

<script setup lang="ts">
    useHead({
        title: "Register",
        meta: [
            {
                name: "description",
                content: "Register for an event in Datronix.",
            },
        ],
    });
    const tech_ev = EVENTS.filter((x) => x.type === EVENT_TYPE.TECH);
    const nontech_ev = EVENTS.filter((x) => x.type === EVENT_TYPE.NONTECH);

    const current_ev = ref("");
    const currentEvent = computed(() =>
        EVENTS.find((x) => x.name === current_ev.value)
    );
</script>
