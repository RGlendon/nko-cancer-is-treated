<template>
  <div class="inst">
    <h1 class="inst__title">
      Инстаграм
    </h1>
    <span class="inst__underline"></span>
    <p class="inst__text">
      Два раза в неделю мы просматриваем все посты по хештегу #этонелечится. Все
      истории, где нет нецензурных выражений и запрещенного контента попадают
      сюда. Следите за правильным написанием хештега, чтобы мы не пропустили
      вашу историю.
    </p>
    <div class="inst__grid">
      <img
        class="inst__item"
        src="https://i.pinimg.com/474x/8e/8d/d0/8e8dd0868c61806e1c24bc8dd3ec0d91.jpg"
      />
      <img
        class="inst__item"
        src="https://avatarko.ru/img/kartinka/17/anonim_16595.jpg"
      />
      <img
        class="inst__item"
        src="https://avatarko.ru/img/kartinka/22/film_elf_Tauriel_21381.jpg"
      />
      <img
        class="inst__item"
        src="https://avatarko.ru/img/kartinka/1/Spiderman.jpg"
      />
      <img
        class="inst__item"
        src="https://i.pinimg.com/474x/8e/8d/d0/8e8dd0868c61806e1c24bc8dd3ec0d91.jpg"
      />
      <img
        class="inst__item"
        src="https://avatarko.ru/img/kartinka/17/anonim_16595.jpg"
      />
      <img
        class="inst__item"
        src="https://avatarko.ru/img/kartinka/22/film_elf_Tauriel_21381.jpg"
      />
      <img
        class="inst__item"
        src="https://avatarko.ru/img/kartinka/1/Spiderman.jpg"
      />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.inst {
  max-width: 1440px;
  min-height: 420px;
  display: flex;
  flex-direction: column;
  font-family: Inter, sans-serif;
  font-style: normal;
  background-color: #f7f7f7;
}
.inst__title {
  width: 413px;
  min-height: 36px;
  margin: 0 0 32px 60px;
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 36px;
}
.inst__underline {
  width: 174px;
  position: absolute;
  margin: 35px 0 0 60px;
  border-bottom: 3px solid currentColor;
}
.inst__text {
  width: 345px;
  min-height: 176px;
  margin: 0 0 0 60px;
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 22px;
  color: #666666;
}
.inst__grid {
  width: 870px;
  height: 420px;
  position: absolute;
  margin-left: 510px;
  display: grid;
  grid-template-columns: repeat(auto-fill, 195px);
  grid-column-gap: 30px;
  grid-row-gap: 30px;
}
.inst__item {
  width: 195px;
  height: 195px;
  background: #ededed;
}
</style>
