<template>
  <div class="general">
    <Greeting />
    <Video />
    <Inscription>{{ inscription[0].upper }}</Inscription>
    <Stories />
    <Inscription>{{ inscription[0].bottom }}</Inscription>
    <Inst />
    <TellUsStory />
    <Statistics />
    <Raklechitsa />
  </div>
</template>

<script>
import Greeting from '@/components/Greeting.vue';
import Video from '@/components/Video.vue';
import Stories from '@/components/Stories.vue';
import Inscription from '@/components/Inscription.vue';
import TellUsStory from '@/components/TellUsStory.vue';
import Raklechitsa from '@/components/Raklechitsa.vue';
import Inst from '@/components/Inst.vue';
import Statistics from '../components/Statistics';

export default {
  components: {
    Statistics,
    Greeting,
    Stories,
    Video,
    TellUsStory,
    Inscription,
    Raklechitsa,
    Inst,
  },
  async fetch({ store }) {
    await store.dispatch('stories/fetchStories');
  },
  data() {
    return {
      inscription: [
        {
          upper: 'И В ОТЛИЧИЕ ОТ РАКА,',
          bottom: 'РАССКАЗЫВАЙТЕ ВАШИ ИСТОРИИ В ИНСТАГРАМ',
        },
      ],
    };
  },
};
</script>

<style></style>
