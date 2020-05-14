<template>
  <div class="general">
    <!--    TODO: greeting - Responsible - Alexander-->
    <Greeting class="Greeting" />
    <!--    TODO: block with video - Responsible - Pavel-->
    <Video class="video" />
    <!--    TODO: horizontal inscription - Responsible - Alexander-->
    <InscriptionUpper class="InscriptionUpper" />
    <!--    TODO: block Stories with ShowMoreButton - Responsible - Oleg-->
    <Stories />
    <!--    TODO: horizontal inscription - Responsible - Alexander-->
    <InscriptionBottom class="InscriptionBottom" />
    <!--    TODO: block Instagram - Responsible - Dmitry-->
    <div class="inst">
      <Inst />
    </div>
    <!--    TODO: block TellUsStory with Button - Responsible - Pavel-->
    <div class="tellStory">
      <TellUsStory />
    </div>
    <!--    TODO: block Statistics - Responsible - Mikhail-->
    <!--    TODO: block #РакЛечится - Responsible - Oleg-->
    <Raklechitsa />
  </div>
</template>

<script>
import Greeting from '@/components/Greeting.vue';
import Video from '@/components/Video.vue';
import Stories from '@/components/Stories.vue';
import InscriptionUpper from '@/components/InscriptionUpper.vue';
import InscriptionBottom from '@/components/InscriptionBottom.vue';
import TellUsStory from '@/components/TellUsStory.vue';
import Raklechitsa from '@/components/Raklechitsa.vue';
import Inst from '@/components/Inst.vue';

export default {
  components: {
    Greeting,
    Stories,
    Video,
    TellUsStory,
    InscriptionUpper,
    InscriptionBottom,
    Raklechitsa,
    Inst,
  },
};
</script>

<style>
.general {
  margin: 0 auto;
}

.Greeting {
  margin: 0;
}

.inst {
  margin: 100px auto;
}

.video {
  margin: 100px auto;
}

.tellStory {
  margin: 0 auto;
}

.InscriptionUpper {
  margin: 74px auto 0;
}

.InscriptionBottom {
  margin: 100px auto 0;
}
</style>
