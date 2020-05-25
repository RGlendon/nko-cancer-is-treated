<template>
  <div class="general">
    <!--    TODO: greeting - Responsible - Alexander-->
    <Greeting class="greeting" />
    <!--    TODO: block with video - Responsible - Pavel-->
    <Video class="video" />
    <!--    TODO: horizontal inscription - Responsible - Alexander-->
    <Inscription class="inscription">{{ inscription[0].upper }}</Inscription>
    <!--    TODO: block Stories with ShowMoreButton - Responsible - Oleg-->
    <Stories />
    <!--    TODO: horizontal inscription - Responsible - Alexander-->
    <Inscription class="inscription">{{ inscription[0].bottom }}</Inscription>
    <!--    TODO: block Instagram - Responsible - Dmitry-->
    <div class="inst">
      <Inst />
    </div>
    <!--    TODO: block TellUsStory with Button - Responsible - Pavel-->
    <div class="tellStory">
      <TellUsStory />
    </div>
    <!--    TODO: block Statistics - Responsible - Mikhail-->
    <div class="statistics-wrapper">
      <Statistics />
    </div>
    <!--    TODO: block #РакЛечится - Responsible - Oleg-->
    <Raklechitsa class="raklechitsa" />
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

<style>
.general {
  margin: 0 auto;
}

.greeting {
  margin: 0;
}

.raklechitsa {
  margin: 0 auto;
}

.inst {
  margin: 100px auto;
}

.video {
  margin: 100px auto;
}

.tellStory {
  margin: 100px auto;
}

.inscription {
  margin: 74px auto 0;
}

.statistics-wrapper {
  margin: 100px auto;
}

@media screen and (max-width: 1280px) {
  .video {
    margin: 80px auto;
  }

  .inst {
    margin: 90px auto;
  }

  .tellStory {
    margin: 90px auto;
  }
}
@media screen and (max-width: 1024px) {
  .inst {
    margin: 80px auto;
  }

  .tellStory {
    margin: 80px auto;
  }
}
@media screen and (max-width: 768px) {
}
@media screen and (max-width: 320px) {
  .inst {
    margin: 50px auto;
  }

  .tellStory {
    margin: 50px auto;
  }
}
</style>
