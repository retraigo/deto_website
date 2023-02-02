<template>
    <NuxtLayout>
        <section v-if="message" class="mx-auto space-y-8 mt-24">
            <h1
                class="text-center text-lg max-w-6xl font-bold font-azonix mx-auto mt-8"
            >
                {{ message }}
            </h1>
            <div v-if="message.startsWith(`To complete the registration`)">
                <div class="mx-auto text-center text-base">
                    <p>UPI ID : snaveenkumar343@okhdfcbank</p>
                    <p>Phone number : +91 79043 02894</p>
                </div>
                <a :href="upiData" class="flex flex-col items-center gap-12"
                    ><img class="w-48 h-48 mx-auto mt-12" :src="qrCode" /><span
                        class="text-zinc-600 dark:text-royal-yellow font-semibold"
                        >Payment Link</span
                    >
                </a>
                <div class="mx-auto text-center text-base mt-12">
                    <p>If QR Code didn't work, refresh the webpage and try again scanning the new QR code</p>
                    <p>Else you can pay through UPI ID by mentioning the amount ₹200 and Name / Email on the note for verification</p>
                </div>
                <h1
                    class="text-center text-lg max-w-6xl font-bold font-azonix mx-auto mt-8"
                >
                    Send your Payment screen shot to this whatsapp link to complete the registration
                </h1>
                <a href="https://wa.me/7904302894" class="flex flex-col items-center gap-4"
                    ><span
                        class="text-zinc-600 dark:text-royal-yellow font-semibold"
                        >Click Here</span
                    >
                </a>
            </div>
            <div
                class="flex flex-col items-center gap-2 max-w-7xl mx-auto prose dark:prose-dark text-justify p-4"
                data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-delay="100"
                data-aos-duration="260"
            >
                <h1
                    class="text-center text-lg max-w-6xl font-bold font-azonix mx-auto mt-8"
                >
                    If you face any payment issues, kindly contact any of the below numbers
                </h1>
                <div
                    class="grid grid-cols-1 lg:grid-cols-2 font-azonix text-xl mx-auto"
                >
                    <div class="p-2">Sabetha</div>
                    <a
                        class="p-2 block no-underline text-zinc-600 dark:text-royal-yellow"
                        href="tel:+919345225837"
                        >+91 93452 25837</a
                    >
                    <div class="p-2">Asvin</div>
                    <a
                        class="p-2 block no-underline text-zinc-600 dark:text-royal-yellow"
                        href="tel:+917358652205"
                        >+91 73586 52205</a
                    >
		    <div class="p-2">Jennifer</div>
                    <a
                        class="p-2 block no-underline text-zinc-600 dark:text-royal-yellow"
                        href="tel:+919840860012"
                        >+91 98408 60012</a
                    >
		    <div class="p-2">Naveen</div>
                    <a
                        class="p-2 block no-underline text-zinc-600 dark:text-royal-yellow"
                        href="tel:+917904302894"
                        >+91 79043 02894</a
                    >
                </div>
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
            message.value = `To complete the registration process, please make a payment of ₹200 to the below QR code.`;
            upiData.value = `upi://pay?pn=${`SCARDS Treasury`}&pa=${
                UPI_ID.NAVEEN
            }&am=${200}&tr=P-${data.unique_code}&tn=P-${data.unique_code}`;
            qrCode.value = `https://chart.googleapis.com/chart?cht=qr&choe=UTF-8&chs=${200}x${200}&chl=${encodeURIComponent(
                upiData.value
            )}`;
        } else {
            message.value = "Registration unsuccessful. Please try again.";
        }
    }
</script>
