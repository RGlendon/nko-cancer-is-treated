<template>
  <div class="general">
     <Greeting class="Greeting" />    <!--    TODO: greeting - Responsible - Alexander-->
    <!--    TODO: block with video - Responsible - Pavel-->
     <InscriptionUpper class="InscriptionUpper"/>   <!--    TODO: horizontal inscription - Responsible - Alexander-->
    <!--    TODO: block Stories with ShowMoreButton - Responsible - Oleg-->
     <InscriptionBottom class="InscriptionBottom"/>   <!--    TODO: horizontal inscription - Responsible - Alexander-->
    <!--    TODO: block Instagram - Responsible - Dmitry-->
    <!--    TODO: block TellUsStory with Button - Responsible - Pavel-->
    <!--    TODO: block Statistics - Responsible - Mikhail-->
    <!--    TODO: block #РакЛечится - Responsible - Oleg-->
  </div>
</template>

<script>
  import Greeting from '@/components/Greeting.vue';
  import InscriptionUpper from '@/components/InscriptionUpper.vue';
  import InscriptionBottom from '@/components/InscriptionBottom.vue';
export default {
   components: {
     Greeting,
     InscriptionUpper,
     InscriptionBottom,
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

.InscriptionUpper {
  margin: 74px auto 0;
}

.InscriptionBottom {
  margin: 100px auto 0;
}
</style>
