<template>
  <div class="story" @click="$emit('cardClick')">
    <!--    <a :href="id" class="story__link">-->
    <div class="story__wrap">
      <img :src="img" class="story__background" />
      <h3 class="story__title">{{ author }}</h3>
      <p class="story__subtitle">{{ text }}</p>
    </div>
    <!--    </a>-->
  </div>
</template>

<script>
export default {
  props: ['img', 'author', 'text', 'src', 'id'],
};
</script>

<style scoped>
.story {
  margin-top: 70px;
  cursor: pointer;
}

.story__background {
  background: #ededed;
  width: 300px;
  height: 300px;
}

.story__title {
  margin-top: 20px;
  width: 300px;
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  font-size: 22px;
  line-height: 22px;
}

.story__subtitle {
  margin-top: 14px;
  width: 250px;
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 18px;
}

@media screen and (max-width: 1280px) {
  .story {
    margin-top: 60px;
  }

  .story__background {
    background: #ededed;
    width: 265px;
    height: 265px;
  }

  .story__title {
    margin-top: 20px;
    width: 265px;
    font-family: Inter;
    font-style: normal;
    font-weight: 600;
    font-size: 22px;
    line-height: 22px;
  }

  .story__subtitle {
    margin-top: 14px;
    width: 250px;
    font-family: Inter;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 18px;
  }
}

@media screen and (max-width: 1024px) {
  .story {
    margin-top: 46px;
  }

  .story__background {
    background: #ededed;
    width: 208px;
    height: 208px;
  }

  .story__title {
    margin-top: 20px;
    width: 208px;
    font-family: Inter;
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 22px;
  }

  .story__subtitle {
    margin-top: 14px;
    width: 208px;
    font-family: Inter;
    font-style: normal;
    font-weight: normal;
    font-size: 13px;
    line-height: 16px;
  }
}

@media screen and (max-width: 768px) {
  .story {
    margin-top: 46px;
  }

  .story__background {
    background: #ededed;
    width: 216px;
    height: 216px;
  }

  .story__title {
    margin-top: 20px;
    width: 216px;
    font-family: Inter;
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 22px;
  }

  .story__subtitle {
    margin-top: 14px;
    width: 216px;
    font-family: Inter;
    font-style: normal;
    font-weight: normal;
    font-size: 13px;
    line-height: 16px;
  }
}

@media screen and (max-width: 320px) {
  .story {
    margin-top: 30px;
  }

  .story__background {
    background: #ededed;
    width: 290px;
    height: 290px;
  }

  .story__title {
    margin-top: 16px;
    width: 290px;
    font-family: Inter;
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 22px;
  }

  .story__subtitle {
    margin-top: 14px;
    width: 290px;
    font-family: Inter;
    font-style: normal;
    font-weight: normal;
    font-size: 13px;
    line-height: 16px;
  }
}
</style>
