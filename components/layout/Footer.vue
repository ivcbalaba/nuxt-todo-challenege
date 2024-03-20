<template>
<div class="footer">
    <div class="footer-item">
        <img
            src="/assets/images/ecv-logo.png"
            width="200px"
            height="100px"
        />
    </div>
    <div>
        <h3>Sitemap</h3>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>

        </ul>
    </div>
    <div>
        <h3>Socials</h3>
        <ul>
            <li>Facebook</li>
            <li>Linkedin</li>
            <li>Instagram</li>
            <li>Twitter</li>

        </ul>
    </div>
    <div>
        <h3>Head Office</h3>
        <p>Xilliams Corner Wine © 2017. 1112 A Market St # Ste B22, Charlottesville, CA 45565</p>
        <h3 class="pt-10">News letter</h3>
        <div class="flex flex-row">
            <input
                v-model="email"
                @input="validateEmail"
                class="bg-transparent text-xs border-b w-1/2 focus:outline-none"
                type="email"
                placeholder="Enter your email address"
            >
            <span class="pl-8">
                <Icon
                    icon="ic:outline-email"
                    height="24"
                />
            </span>
        </div>

        <p
            v-if="emailError"
            class="text-red-500 text-xs"
        >{{ emailError }}</p>

    </div>

</div>
</template>

<script setup>
const email = ref('')
const emailError = ref('')

const validateEmail = () => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@(([^<>()[\]\\.,;:\s@"]+\.)+[^<>()[\]\\.,;:\s@"]{2,})$/i
    if (email.value && !re.test(email.value)) {
        emailError.value = 'Please enter a valid email address.'
    } else {
        emailError.value = ''
    }
}
watch(email, validateEmail)
</script>

<style
    lang="postcss"
    scoped
>
.footer {
    @apply text-white bg-primary min-h-48 flex flex-row justify-around pt-8;
}

li,
p {
    @apply text-xs pt-2
}
</style>