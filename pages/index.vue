<template>
    <NuxtLayout>
        <section class="mx-auto space-y-8">
            <MiscLogoReveal />
            <div class="flex flex-col items-center mx-auto mt-5 gonnaglow">
                <MiscCountDown :time="1711596600000" />
            </div>
            <div class="max-w-7xl mx-auto mt-16 lg:mt-6 prose prose-dark text-justify p-4 text-xl" data-aos="fade-up"
                data-aos-easing="linear" data-aos-delay="100" data-aos-duration="260">
                We invite you to come and witness as we proudly
                showcase the successes, progression and advances of
                Students and Faculty of the Department of Automobile
                Engineering, Easwari Engineering college.
            </div>
            <div class="flex flex-col items-center lg:justify-center gap-8 lg:flex-row mx-auto lg:mt-6 p-4">
                <a href="https://forms.gle/aoucCKGdBsqgzVaNA" data-aos="fade-up" data-aos-easing="linear"
                    data-aos-delay="100" data-aos-duration="260" class="gonnaglow flex flex-col gap-2"><span class="sr-only">Event
                        Register</span>
                    <img src="/qr.webp" class="w-48" />
                    <div class="text-center font-shadowed mx-auto">Register</div>
                </a>
            </div>
            <section class="lg:flex flex-1 w-full mx-auto mt-8 max-w-7xl">
                <PageEvents />
            </section>
            <div class="flex flex-col items-center gap-2 max-w-7xl mx-auto text-justify p-4" data-aos="fade-up"
                data-aos-easing="linear" data-aos-delay="100" data-aos-duration="260">
                <h2 class="text-center text-4xl md:text-6xl lg:text-7xl font-rye mx-auto text-white" data-aos="fade-up"
                    data-aos-easing="linear" data-aos-delay="100" data-aos-duration="260">
                    Agenda
                </h2>
                <MiscAgenda class="prose prose-dark mt-8" />
            </div>
            <div class="flex flex-col items-center gap-2 max-w-7xl mx-auto text-justify p-4" data-aos="fade-up"
                data-aos-easing="linear" data-aos-delay="100" data-aos-duration="260">
                <h2 class="text-center text-4xl md:text-6xl lg:text-7xl font-rye mx-auto" data-aos="fade-up"
                    data-aos-easing="linear" data-aos-delay="100" data-aos-duration="260">
                    Contact
                </h2>
                <div class="mt-8 grid grid-cols-1 lg:grid-cols-2 font-loubag text-xl mx-auto prose prose-dark">
                    <div class="p-2">Aakash</div>
                    <a class="p-2 block no-underline text-zinc-600 dark:text-royal-yellow" href="tel:+919500116259">+91
                        95001 16259</a>
                    <div class="p-2">Dinesh</div>
                    <a class="p-2 block no-underline text-zinc-600 dark:text-royal-yellow" href="tel:+919940397424">+91
                        99403 97424</a>
                    <div class="p-2">Gokul</div>
                    <a class="p-2 block no-underline text-zinc-600 dark:text-royal-yellow" href="tel:+917904057220">+91
                        79040 57220</a>
                </div>
            </div>
            <div class="flex flex-col lg:flex-row items-center gap-2 max-w-7xl mx-auto prose prose-dark text-justify p-4"
                data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="260">
                <img src="/EEC_ICON.webp" alt="Easwari Engineering College Logo" class="w-48 mb-0" />
                <div class="p-2">
                    Easwari Engineering College is an Autonomous institution,
                    which was established during the 1996-1997 academic year
                    by the Sri Ramaswamy Memorial (SRM) group, EEC has 12
                    academic departments for engineering and also offers
                    management programs. The management at EEC prioritizes
                    academics, social and cultural activities, aiming to become a
                    model institution for higher learning
                </div>
            </div>
            <div class="flex flex-col lg:flex-row-reverse items-center gap-2 max-w-7xl mx-auto prose prose-dark text-justify p-4"
                data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="260">
                <img src="/ssae.png" alt="SSAE" class="w-48 mb-0 invert" />
                <div class="p-2">
                    The student council of automobile department provides
                    students with a platform to showcase their abilities and
                    spark innovations in both technical and non-technical
                    fields. Students can deploy many of automobile in the
                    real world among ssae. It enables the students to
                    investigate the applicability of the practical issues they
                    study.
                </div>
            </div>
        </section>
    </NuxtLayout>
</template>
<script setup lang="ts">
useHead({
    title: "Welcome | Detono",
    meta: [
        {
            name: "description",
            content:
                "An annual tech festival hosted by the department of Automobile Engineering of Easwari Engineering College in association with SSAE.",
        },
    ],
});
</script>