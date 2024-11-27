<template>
  <main class="flex flex-col gap-16 p-8 lg:p-24 w-full 2xl:w-[120rem] 2xl:mx-auto min-w-[23.125rem]">
    <header class="flex items-center gap-6">
      <logo v-if="showLogo" :size="20" @mouseover="showLogo = false" />
      <div v-else class="size-[20px] relative bg-stone-300 rounded-full" @mouseleave="showLogo = true">
        <div class="absolute size-[50px] left-[-15px] top-[-15px] bg-[url('/avatar.png')] bg-cover rounded-full cursor-none"></div>
      </div>
      <!-- <img src="/avatar.jpg" class="rounded-full w-[40px]" /> -->
      <h1 class="text-xl font-medium leading-none">Iqbal Perkasa</h1>
      <!-- <nav class="flex content-center">
        <nuxt-link class="p-4 leading-none cursor-pointer transition-colors rounded-md text-md text-stone-400 hover:text-black active:bg-stone-100">Contact</nuxt-link>
      </nav> -->
    </header>
    <section class="relative">
      <!-- <div class="size-48 opacity-40 rounded-full rotate-12 bg-red-100 absolute -right-10 -top-28 z-0 bg-[url('/avatar.jpg')] bg-cover"></div> -->
      <p class="max-w-[60rem] md:max-w-[40rem] text-2xl leading-relaxed lg:text-4xl lg:leading-[1.8] relative font-medium z-10">I'm a full-stack web engineer focusing on frontend JavaScript ecosystem. I help companies and startups to build, design the system, plan, and architect the features to reach the goal which provide value<br class="hidden md:block" /> to the customers.</p>
    </section>
    <section class="flex items-center gap-4">
      <a href="/resume.pdf" class="px-4 py-3 font-medium border-2 border-transparent rounded-lg transition-colors bg-stone-200 hover:bg-stone-300 active:bg-stone-400">View my resume</a>
      <a href="https://iqbalperkasa.super.site" target="_blank" class="px-4 py-3 font-medium border-2 border-transparent rounded-lg transition-colors hover:border-stone-300 active:border-stone-400">Portfolio <Icon name="gravity-ui:arrow-up-right-from-square" class="mb-1 ml-1 align-middle" size="18" /></a>
    </section>
    <section>
      <p class="leading-relaxed lg:text-xl text-stone-600 lg:leading-loose">
        Reach me on <br class="md:hidden" />
        <anchor href="https://www.linkedin.com/in/iqbalperkasa">LinkedIn</anchor>,
        <anchor href="https://twitter.com/iqbalperkasa">Twitter</anchor>,
        <anchor href="https://github.com/iqbalperkasa">GitHub</anchor>,
        <anchor href="https://t.me/iqbalperkasa">Telegram</anchor>, or<br />
        email at <anchor href="mailto:iqbal@iqbalperkasa.com" @click="copyToClipboard($event)">{{ email }}</anchor>
        <span class="ml-1 cursor-pointer" @click="copyToClipboard($event)">
          <Icon v-show="!copied" size="18" name="gravity-ui:copy" class="align-middle" />
          <Icon v-show="copied" size="18" name="gravity-ui:circle-check-fill" class="text-green-500 align-middle" />
        </span>
      </p>
    </section>

    <!-- <blockquote class="twitter-tweet">
      <a href="https://twitter.com/anonjawa/status/1824652219935007049"></a>
    </blockquote> -->
  </main>
</template>

<script setup lang="ts">
import { useClipboard } from '@vueuse/core';

const showLogo = ref(true);

const email = 'iqbal@iqbalperkasa.com';

const { copy, copied } = useClipboard({ source: email });

function copyToClipboard(event: MouseEvent): void {
  event.preventDefault();
  copy();
}
</script>
