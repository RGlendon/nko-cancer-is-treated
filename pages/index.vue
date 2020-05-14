<template>
  <div class="general">
    <!--    TODO: greeting - Responsible - Alexander-->
    <Greeting class="greeting" />
    <!--    TODO: block with video - Responsible - Pavel-->
    <Video class="video" />
    <!--    TODO: horizontal inscription - Responsible - Alexander-->
    <InscriptionUpper class="inscriptionUpper" />
    <!--    TODO: block Stories with ShowMoreButton - Responsible - Oleg-->
    <Stories />
    <!--    TODO: horizontal inscription - Responsible - Alexander-->
    <InscriptionBottom class="inscriptionBottom" />
    <!--    TODO: block Instagram - Responsible - Dmitry-->
    <!--    TODO: block TellUsStory with Button - Responsible - Pavel-->
    <div class="tellStory">
      <TellUsStory />
    </div>
    <!--    TODO: block Statistics - Responsible - Mikhail-->
    <!--    TODO: block #РакЛечится - Responsible - Oleg-->
  </div>
</template>

<script>
import Greeting from '@/components/Greeting.vue';
import Video from '@/components/Video.vue';
import Stories from '@/components/Stories.vue';
import InscriptionUpper from '@/components/InscriptionUpper.vue';
import InscriptionBottom from '@/components/InscriptionBottom.vue';
import TellUsStory from '@/components/TellUsStory.vue';

export default {
  components: {
    Greeting,
    Stories,
    Video,
    TellUsStory,
    InscriptionUpper,
    InscriptionBottom,
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

.video {
  margin: 100px auto;
}

.tellStory {
  margin: 0 auto;
}

.inscriptionUpper {
  margin: 74px auto 0;
}

.inscriptionBottom {
  margin: 100px auto 0;
}
</style>
