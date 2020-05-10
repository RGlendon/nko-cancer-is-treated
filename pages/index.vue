<template>
  <div class="general">
    <Greeting />
    <!--    TODO: greeting - Responsible - Alexander-->
    <!--    TODO: block with video - Responsible - Pavel-->
    <!--    TODO: horizontal inscription - Responsible - Alexander-->
    <Stories /><!--    TODO: block Stories with ShowMoreButton - Responsible - Oleg-->
    <!--    TODO: horizontal inscription - Responsible - Alexander-->
    <!--    TODO: block Instagram - Responsible - Dmitry-->
    <!--    TODO: block TellUsStory with Button - Responsible - Pavel-->
    <!--    TODO: block Statistics - Responsible - Mikhail-->
    <!--    TODO: block #РакЛечится - Responsible - Oleg-->
  </div>
</template>

<script>
import Greeting from '@/components/Greeting.vue';
import Stories from '@/components/Stories.vue';
export default {
  components: {
    Greeting,
    Stories,
  },
};
</script>

<style>
.general {
  margin: 0 auto;
}
</style>
