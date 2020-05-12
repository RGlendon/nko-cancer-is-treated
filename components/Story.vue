<template>
  <div class="story">
    <a :href="id" class="story__link">
      <div class="story__wrap">
        <img :src="img" class="story__background" />
        <h3 class="story__title">{{ author }}</h3>
        <p class="story__subtitle">{{ text }}</p>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  props: ['img', 'author', 'text', 'src', 'id'],
};
</script>

<style scoped>
.story__link {
  text-decoration: none;
  color: black;
}

.story {
  margin-top: 70px;
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
</style>
