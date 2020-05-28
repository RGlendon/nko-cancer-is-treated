<template>
  <div class="general">
    <Greeting />
    <Video />
    <Note>{{ note[0].upper }}</Note>
    <Stories />
    <Note>{{ note[0].bottom }}</Note>
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
import Note from '@/components/Note.vue';
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
    Note,
    Raklechitsa,
    Inst,
  },
  data() {
    return {
      note: [
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
