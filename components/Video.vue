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

        <div class="arrow__container">
          <div class="arrow__wrapper">
            <div class="arrow arrow__left arrow_active"></div>
          </div>
          <div class="arrow__wrapper">
            <div class="arrow arrow__right"></div>
          </div>
        </div>
      </div>
      <div class="video__container">
        <div class="video__block">
          <div class="video__circle"></div>
          <div class="video__triangle"></div>
        </div>
        <div class="video__memo">
          Все видео вы можете найте на
          <a href="#" class="line">нашем YouTube канале</a>.
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
  background-color: #ffffff;
}

.video__panel {
  max-width: 1320px;
  min-height: 476px;
  margin: 0 auto;
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
  width: 65.68%;
}

.video__block {
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
  color: #666666;
}

.arrow__container {
  margin-top: 162px;
  display: flex;
}

.arrow__wrapper {
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fbfbfb;
  cursor: pointer;
}

.arrow {
  width: 16px;
  height: 16px;
  border-top: 1px solid black;
  border-right: 1px solid black;
}
.arrow__left {
  transform: rotate(-135deg);
  margin-left: 10px;
}
.arrow__right {
  transform: rotate(45deg);
  margin-right: 10px;
}

.arrow_active {
  border-color: #bfbfbf;
}
</style>
