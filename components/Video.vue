<template>
  <div class="video">
    <div class="video__panel">
      <div class="video__story">
        <h1 class="video__title">
          Истории людей, победивших рак, но не свои привычки
        </h1>
        <p class="video__text">
          Есть вещи, которые не лечатся. Вещи ставшие частью нашего «я», фобии,
          страхи. Но это точно не рак. Рак лечится. Лучшее доказательство — люди
          с их историями.
        </p>
        <div class="arrow-left"></div>
        <div class="arrow-right"></div>
      </div>
      <div class="video__container">
        <div class="video__block">
          <div class="video__circle"></div>
          <div class="video__triangle"></div>
        </div>
        <div class="video__memo">
          Все видео вы можете найте на
          <span class="line">нашем YouTube канале</span>.
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.video {
  max-width: 1440px;
  min-height: 650px;
  background-color: #ffffff;
}
.video__panel {
  max-width: 1320px;
  min-height: 476px;
  margin: 100px auto;
  display: flex;
  flex-direction: row;
}
.video__title {
  max-width: 413px;
  min-height: 108px;
  margin-top: 10px;
  margin-bottom: 32px;
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 36px;
}

.video__text {
  max-width: 350px;
  min-height: 110px;
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 22px;
  color: #666666;
}
.video__container {
  margin-left: 40px;
}
.video__block {
  width: 867px;
  height: 450px;
  display: flex;
  background: #ededed;
}
.video__circle {
  width: 90px;
  height: 90px;
  margin: 180px 0 0 388px;
  background-color: #c4c4c4;
  border-radius: 50%;
}
.video__triangle {
  position: absolute;
  margin-left: 420px;
  margin-top: 205px;
  border-top: 20px solid transparent;
  border-left: 35px solid #ffffff;
  border-bottom: 20px solid transparent;
}
.video__memo {
  max-width: 867px;
  min-height: 16px;
  margin-top: 10px;
  font-family: Inter;
  font-style: normal;
  font-size: 12px;
  line-height: 16px;
  color: #666666;
}
.line {
  text-decoration: underline;
}
.arrow-left {
  position: absolute;
  margin-top: 162px;
  margin-left: 49px;
  width: 16px;
  height: 16px;
  border-top: 1px solid black;
  border-right: 1px solid black;
  transform: rotate(45deg);
}
.arrow-right {
  position: absolute;
  margin-top: 162px;
  margin-left: 15px;
  width: 16px;
  height: 16px;
  border-top: 1px solid #bfbfbf;
  border-right: 1px solid #bfbfbf;
  transform: rotate(225deg);
}
</style>
