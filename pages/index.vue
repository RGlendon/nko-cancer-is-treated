<template>
  <div class="general">
    <!--    TODO: greeting - Responsible - Alexander-->
    <Greeting />
    <!--    TODO: block with video - Responsible - Pavel-->
    <Video />
    <!--    TODO: horizontal inscription - Responsible - Alexander-->
    <Inscription>{{ inscription[0].upper }}</Inscription>
    <!--    TODO: block Stories with ShowMoreButton - Responsible - Oleg-->
    <Stories />
    <!--    TODO: horizontal inscription - Responsible - Alexander-->
    <Inscription>{{ inscription[0].bottom }}</Inscription>
    <!--    TODO: block Instagram - Responsible - Dmitry-->
    <Inst />
    <!--    TODO: block TellUsStory with Button - Responsible - Pavel-->
    <TellUsStory />
    <!--    TODO: block Statistics - Responsible - Mikhail-->
    <Statistics />
    <!--    TODO: block #РакЛечится - Responsible - Oleg-->
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
