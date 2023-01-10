<template>
    <NuxtLayout>
        <section class="mx-auto space-y-8">
            <MiscLogoReveal />

            <div
                class="max-w-7xl mx-auto mt-16 lg:mt-6 prose dark:prose-dark text-justify p-2"
            >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                sed eros vel ante blandit interdum. In lacus enim, luctus
                scelerisque eros nec, convallis blandit nisi. Etiam imperdiet,
                purus sed gravida hendrerit, odio odio condimentum mauris, ut
                iaculis quam augue vitae justo. Cras tincidunt mattis odio nec
                ultricies. Etiam tincidunt ex odio, nec efficitur tortor aliquam
                vitae. Aenean quis tempus nisl. Etiam vel velit risus. Orci
                varius natoque penatibus et magnis dis parturient montes,
                nascetur ridiculus mus. Nullam nec odio eget magna commodo
                pulvinar. Donec vehicula libero eget est interdum, et lobortis
                libero rutrum. Nunc lobortis condimentum magna at porttitor.
                Nulla finibus ac purus ultricies sollicitudin. Phasellus a
                viverra elit. Curabitur consectetur at ligula eget aliquet.
            </div>
            <div
                class="flex flex-col items-center lg:justify-center gap-8 lg:flex-row mx-auto"
            >
                <NuxtLink to="/events"><span class="sr-only">Events</span><ButtonTech size="100" text="Events" type="gray" /></NuxtLink>
                <ButtonTech size="100" text="Register" type="gray" />
            </div>
        </section>
    </NuxtLayout>
</template>
