<template>
  <div class="general">
    <Greeting />
    <!--    TODO: block with video - Responsible - Pavel-->
    <div class="video">
      <Video />
    </div>
    <!--    TODO: block TellUsStory with Button - Responsible - Pavel-->
    <div class="tellStory">
      <TellUsStory />
    </div>
    <!--    TODO: greeting - Responsible - Alexander-->

    <!--    TODO: horizontal inscription - Responsible - Alexander-->
    <!--    TODO: block Stories with ShowMoreButton - Responsible - Oleg-->
    <!--    TODO: horizontal inscription - Responsible - Alexander-->
    <!--    TODO: block Instagram - Responsible - Dmitry-->

    <!--    TODO: block Statistics - Responsible - Mikhail-->
    <!--    TODO: block #РакЛечится - Responsible - Oleg-->
  </div>
</template>

<script>
import Greeting from '@/components/Greeting.vue';
import Video from '@/components/Video.vue';
import TellUsStory from '@/components/TellUsStory.vue';
export default {
  components: {
    Greeting,
    Video,
    TellUsStory,
  },
};
</script>

<style>
.general {
  margin: 0 auto;
}
.video {
  margin: 0 auto;
}
.tellStory {
  margin: 0 auto;
}
</style>
