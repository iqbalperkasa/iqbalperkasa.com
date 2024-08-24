<template>
  <main class="container flex flex-col gap-16">
    <header class="mt-24 flex gap-6 items-center">
      <logo v-if="showLogo" :size="20" @mouseover="showLogo = false" />
      <div v-else class="size-[20px] relative bg-red-200" @mouseleave="showLogo = true">
        <div class="absolute size-[50px] left-[-15px] top-[-15px] bg-[url('/avatar.png')] bg-cover rounded-full cursor-none"></div>
      </div>
      <!-- <img src="/avatar.jpg" class="rounded-full w-[40px]" /> -->
      <h1 class="text-xl font-medium leading-none">Iqbal Perkasa</h1>
      <!-- <nav class="flex content-center">
        <nuxt-link class="text-md text-stone-400 hover:text-black active:bg-stone-100 transition-colors rounded-md p-4 cursor-pointer leading-none">Contact</nuxt-link>
      </nav> -->
    </header>
    <section class="relative">
      <!-- <div class="size-48 opacity-40 rounded-full rotate-12 bg-red-100 absolute -right-10 -top-28 z-0 bg-[url('/avatar.jpg')] bg-cover"></div> -->
      <p class="text-2xl leading-relaxed lg:text-4xl lg:leading-[1.8] relative font-medium z-10">I'm a full-stack web engineer focusing on frontend JavaScript ecosystem. I help companies and startups to build, design the system, plan, and architect the features to reach the goal which provide value to the customers.</p>
    </section>
    <section>
      <a href="/resume.pdf" class="bg-stone-200 hover:bg-stone-300 active:bg-stone-400 transition-colors p-4 rounded-md font-medium">View my resume</a>
    </section>
    <section>
      <p class="lg:text-xl text-stone-600 lg:leading-loose leading-relaxed">
        Reach me on
        <anchor href="https://www.linkedin.com/in/iqbalperkasa">LinkedIn</anchor>,
        <anchor href="https://twitter.com/iqbalperkasa">Twitter</anchor>,
        <anchor href="https://github.com/iqbalperkasa">GitHub</anchor>,
        <anchor href="https://t.me/iqbalperkasa">Telegram</anchor>, or<br />
        email at <anchor href="mailto:iqbal@iqbalperkasa.com" @click="copyToClipboard($event)">{{ email }}</anchor>
        <span class="ml-1 cursor-pointer" @click="copyToClipboard($event)">
          <Icon v-show="!copied" size="18" name="gravity-ui:copy" class="align-middle" />
          <Icon v-show="copied" size="18" name="gravity-ui:circle-check-fill" class="align-middle text-green-500" />
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
