<template>
<div class="flex flex-col min-h-screen">
    <Header />

    <main class="flex-grow bg-[#F2F2F2] text-sm">
        <slot />
    </main>

    <Footer />
</div>
</template>