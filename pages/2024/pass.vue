<template>
    <NuxtLayout>
        <section v-if="message" class="mx-auto space-y-8 mt-24">
            <h1 class="text-center text-lg max-w-6xl font-bold font-ltfunk mx-auto mt-8">
                {{ message }}
            </h1>
            <div v-if="message.startsWith(`To complete the registration`)">
                <div class="mx-auto text-center text-base mt-12 flex flex-col gap-8">
                    <div class="flex flex-col gap-2">
                        <span class="uppercase font-bold tracking-wider text-2xl">UPI</span>
                        <div class="flex flex-col lg:flex-row items-center gap-2 justify-center max-w-xl mx-auto">
                            <span title="copy"
                                class="p-1 mx-auto text-black bg-royal-yellow rounded-md font-semibold text-lg cursor-pointer"
                                @click="copy(UPI_ID.NAVEEN)">{{
                                    UPI_ID.NAVEEN
                                }}
                            </span>
                            <button class="bg-royal-yellow rounded-md p-2" @click="copy(UPI_ID.NAVEEN)">
                                <SVGCopy class="stroke-black stroke-2" />
                            </button>
                        </div>
                    </div>
                    <div class="flex flex-col gap-2">
                        <span class="uppercase font-bold tracking-wider text-2xl">GPay</span>
                        <div class="flex flex-col lg:flex-row items-center gap-2 justify-center max-w-xl mx-auto">
                            <span title="copy"
                                class="p-1 mx-auto text-black bg-royal-yellow rounded-md font-semibold text-lg cursor-pointer"
                                @click="copy(UPI_NO.NAVEEN)">+91
                                {{
                                    UPI_NO.NAVEEN
                                }}
                            </span>
                            <button class="bg-royal-yellow rounded-md p-2" @click="copy(UPI_NO.NAVEEN)">
                                <SVGCopy class="stroke-black stroke-2" />
                            </button>
                        </div>
                    </div>
                    <p class="text-2xl font-ltfunk">Mention the ID <span type="a"
                            class="max-w-md p-1 mx-auto text-black bg-royal-yellow rounded-md font-semibold text-sm cursor-pointer"
                            @click="copy(`P-${uniqueCode}`)" title="copy">P-{{
                                uniqueCode
                            }}</span> <span class="font-bold">(or)</span> your name, email ID and event name
                        on the note
                        for verification</p>
                </div>
                <h1 class="text-center text-lg max-w-6xl font-bold font-ltfunk mx-auto mt-16">
                    Send your Payment screen shot to this whatsapp link to complete the registration
                </h1>
                <a href="https://wa.me/+917904302894" class="flex flex-col items-center gap-4"><span
                        class="bg-royal-yellow text-black p-2 rounded-md font-semibold">Click Here</span>
                </a>
            </div>
            <div class="flex flex-col items-center gap-2 max-w-7xl mx-auto text-justify p-4" data-aos="fade-up"
                data-aos-easing="linear" data-aos-delay="100" data-aos-duration="260">
                <h1 class="text-center text-lg max-w-6xl font-bold font-ltfunk mx-auto mt-8">
                    If you face any payment issues, kindly contact any of the below numbers
                </h1>
                <div class="grid grid-cols-1 lg:grid-cols-2 font-ltfunk text-xl mx-auto">
                    <div class="p-2">Sabetha</div>
                    <a class="p-2 block no-underline text-zinc-600 dark:text-royal-yellow" href="tel:+919345225837">+91
                        93452 25837</a>
                    <div class="p-2">Asvin</div>
                    <a class="p-2 block no-underline text-zinc-600 dark:text-royal-yellow" href="tel:+917358652205">+91
                        73586 52205</a>
                    <div class="p-2">Jennifer</div>
                    <a class="p-2 block no-underline text-zinc-600 dark:text-royal-yellow" href="tel:+919840860012">+91
                        98408 60012</a>
                    <div class="p-2">Naveen</div>
                    <a class="p-2 block no-underline text-zinc-600 dark:text-royal-yellow" href="tel:+917904302894">+91
                        79043 02894</a>
                </div>
            </div>
        </section>
        <section v-else class="mx-auto space-y-8 mt-24">
            <h1 class="text-center text-4xl font-bold font-ltfunk mx-auto">
                Trifecta-Pass
            </h1>
            <div class="text-base max-w-xl mx-auto text-center text-zinc-700 dark:text-zinc-300">
                The trifecta pass is a unique permit that offers its bearer the benefit of:
                <ul>
                    <li>free admission to three events</li>
                    <li>complimentary lunch</li>
                </ul>
            </div>
            <form @submit="applyForPass">
                <div class="mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4 items-center max-w-xl px-2">
                    <label for="PARTICIPANT_NAME" class="text-xl font-ltfunk font-semibold uppercase">Name</label>
                    <input name="participant_name" id="PARTICIPANT_NAME" type="text"
                        class="bg-zinc-200 dark:bg-black/50 dark:text-white border-royal-orange/50 dark:border-royal-yellow/50 border max-w-md w-full text-lg rounded-md p-2"
                        required />
                    <label for="COLLEGE_NAME" class="text-xl font-ltfunk font-semibold uppercase">Institution
                        Name</label>
                    <input name="college_name" id="COLLEGE_NAME" type="text"
                        class="bg-zinc-200 dark:bg-black/50 dark:text-white border-royal-orange/50 dark:border-royal-yellow/50 border max-w-md w-full text-lg rounded-md p-2"
                        required />
                    <label for="DEGREE" class="text-xl font-ltfunk font-semibold uppercase">Degree & Branch</label>
                    <input name="degree" id="DEGREE" type="text"
                        class="bg-zinc-200 dark:bg-black/50 dark:text-white border-royal-orange/50 dark:border-royal-yellow/50 border max-w-md w-full text-lg rounded-md p-2"
                        required />
                    <label for="CONTACT_NUMBER" class="text-xl font-ltfunk font-semibold uppercase">Contact
                        Number</label>
                    <input name="contact_number" id="CONTACT_NUMBER" type="text" pattern="^(?:\+91)?[0-9]{10}$"
                        class="bg-zinc-200 dark:bg-black/50 dark:text-white border-royal-orange/50 dark:border-royal-yellow/50 border max-w-md w-full text-lg rounded-md p-2"
                        required />
                    <label for="EMAIL_ID" class="text-xl font-ltfunk font-semibold uppercase">Email ID</label>
                    <input name="email_id" id="EMAIL_ID" type="email"
                        class="bg-zinc-200 dark:bg-black/50 dark:text-white border-royal-orange/50 dark:border-royal-yellow/50 border max-w-md w-full text-lg rounded-md p-2"
                        required />
                </div>
                <div class="max-w-xl mx-auto flex items-center justify-center gap-4 mt-8 py-2">
                    <input name="agree_to_terms" id="AGREE_TERMS" type="checkbox"
                        class="bg-zinc-200 dark:bg-black/50 dark:text-white border-royal-orange/50 dark:border-royal-yellow/50 border text-lg rounded-md p-2"
                        required />
                    <label for="AGREE_TERMS" class="text-sm font-ltfunk font-semibold uppercase">I agree to the
                        <NuxtLink to="/tos" class="text-zinc-600 dark:text-royal-yellow">Terms & Conditions</NuxtLink>
                        and
                        <NuxtLink to="/privacy" class="text-zinc-600 dark:text-royal-yellow">Privacy Policy</NuxtLink>
                    </label>
                </div>
                <button type="submit" class="mx-auto block mt-8">
                    <ButtonPaper size="100" text="Purchase" type="gray" />
                </button>
            </form>
        </section>
    </NuxtLayout>
</template>

<script setup lang="ts">
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
const uniqueCode = ref("")
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
        `http://localhost:6123/all_pass`,
        {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        }
    );
    window.scrollTo(0, 0)

    if (res.ok) {
        const data = await res.json();
        uniqueCode.value = data.unique_code
        message.value = `To complete the registration process, please make a payment of ₹200 to the below ID.`;
    } else {
        message.value = "Registration unsuccessful. Please try again.";
    }
}
function copy(text: string) {
    navigator.clipboard.writeText(text);
}
</script>