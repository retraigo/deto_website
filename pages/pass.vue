<template>
    <NuxtLayout>
        <section v-if="message" class="mx-auto space-y-8 mt-24">
            <h1
                class="text-center text-lg max-w-6xl font-bold font-azonix mx-auto mt-8"
            >
                {{ message }}
            </h1>
            <div v-if="message.startsWith(`Registration successful`)">
                <div class="mx-auto text-center text-base">
                    aisabetha05@okaxis
                </div>
                <a :href="upiData" class="flex flex-col items-center gap-4"
                    ><img class="w-48 h-48 mx-auto mt-4" :src="qrCode" /><span
                        class="text-zinc-600 dark:text-royal-yellow"
                        >Payment Link</span
                    >
                </a>
            </div>
        </section>
        <section v-else class="mx-auto space-y-8 mt-24">
            <h1 class="text-center text-4xl font-bold font-azonix mx-auto">
                All-Event Pass
            </h1>
            <div
                class="text-base max-w-xl mx-auto text-center text-zinc-700 dark:text-zinc-300"
            >
                Purchase an all-event pass for ₹200 and attend any event as an
                individual! Further, a portion of the registration fee will be
                waived when registering for events as a group.
                <span class="text-zinc-600 dark:text-royal-yellow font-semibold"
                    >The all-event pass includes lunch and refreshments.</span
                >
            </div>
            <form @submit="applyForPass">
                <div
                    class="mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4 items-center max-w-xl px-2"
                >
                    <label
                        for="PARTICIPANT_NAME"
                        class="text-xl font-azonix font-semibold uppercase"
                        >Name</label
                    >
                    <input
                        name="participant_name"
                        id="PARTICIPANT_NAME"
                        type="text"
                        placeholder="John Wick"
                        class="bg-zinc-200 dark:bg-black/50 dark:text-white border-royal-orange/50 dark:border-royal-yellow/50 border max-w-md w-full text-lg rounded-md p-2"
                        required
                    />
                    <label
                        for="COLLEGE_NAME"
                        class="text-xl font-azonix font-semibold uppercase"
                        >Insitution Name</label
                    >
                    <input
                        name="college_name"
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
                        name="degree"
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
                        name="contact_number"
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
                        name="email_id"
                        id="EMAIL_ID"
                        type="email"
                        placeholder="john.doe@gmail.com"
                        class="bg-zinc-200 dark:bg-black/50 dark:text-white border-royal-orange/50 dark:border-royal-yellow/50 border max-w-md w-full text-lg rounded-md p-2"
                        required
                    />
                </div>
                <div
                    class="max-w-xl mx-auto flex items-center justify-center gap-4 mt-8 py-2"
                >
                    <input
                        name="agree_to_terms"
                        id="AGREE_TERMS"
                        type="checkbox"
                        class="bg-zinc-200 dark:bg-black/50 dark:text-white border-royal-orange/50 dark:border-royal-yellow/50 border text-lg rounded-md p-2"
                        required
                    />
                    <label
                        for="AGREE_TERMS"
                        class="text-sm font-azonix font-semibold uppercase"
                        >I agree to the
                        <NuxtLink
                            to="/tos"
                            class="text-zinc-600 dark:text-royal-yellow"
                            >Terms & Conditions</NuxtLink
                        >
                        and
                        <NuxtLink
                            to="/privacy"
                            class="text-zinc-600 dark:text-royal-yellow"
                            >Privacy Policy</NuxtLink
                        ></label
                    >
                </div>
                <button type="submit" class="mx-auto block mt-8">
                    <ButtonTech size="100" text="Purchase" type="gray" />
                </button>
            </form>
        </section>
    </NuxtLayout>
</template>

<script setup lang="ts">
    const qrCode = ref("");
    const upiData = ref("");

    const message = ref("");
    useHead({
        title: "All-Event Pass",
        meta: [
            {
                name: "description",
                content:
                    "Purchase an All-Event pass to participate in ANY event as an individual and receive discounts in group events.",
            },
        ],
    });
    async function applyForPass(e: Event) {
        if (!e) return;
        e.preventDefault();
        if (!e.currentTarget) return;
        const form = new FormData(e.currentTarget as HTMLFormElement);

        const data = {
            name: `${form.get("participant_name")}`,
            institution_name: `${form.get("college_name")}`,
            degree_and_branch: `${form.get("degree")}`,
            contact_number: `${form.get("contact_number")}`,
            email_id: `${form.get("email_id")}`,
            agree_to_terms: `${form.get("agree_to_terms")}`,
        };
        const res = await fetch(
            `https://datronix.nekooftheabyss.moe/all_pass`,
            {
                method: "POST",
                headers: { "content-type": "application/json" },
                body: JSON.stringify(data),
            }
        );
        if (res.ok) {
            const data = await res.json();
            message.value = `Registration successful. Please make a payment of ₹200 to the below QR code with "P-${data.unique_code}" as the message.`;
            upiData.value = `upi://pay?pn=${`SCARDS Treasury`}&pa=${
                UPI_ID.SABETHA
            }&am=${200}&tr=P-${data.unique_code}&tn=P-${data.unique_code}`;
            qrCode.value = `https://chart.googleapis.com/chart?cht=qr&choe=UTF-8&chs=${200}x${200}&chl=${encodeURIComponent(
                upiData.value
            )}`;
        } else {
            message.value = "Registration unsuccessful. Please try again.";
        }
    }
</script>
