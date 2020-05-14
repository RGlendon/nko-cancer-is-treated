<template>
  <div class="inst">
    <div>
      <h1 class="inst__title">
        <span class="inst__underline">Инстаграм</span>
      </h1>

      <p class="inst__text">
        Два раза в неделю мы просматриваем все посты по хештегу #этонелечится.
        Все истории, где нет нецензурных выражений и запрещенного контента
        попадают сюда. Следите за правильным написанием хештега, чтобы мы не
        пропустили вашу историю.
      </p>
    </div>
    <ul class="inst__grid">
      <li v-for="item in items" :key="item.id">
        <img class="inst__item" :src="item.img" />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          id: '1',
          img:
            'https://i.pinimg.com/474x/8e/8d/d0/8e8dd0868c61806e1c24bc8dd3ec0d91.jpg',
        },
        {
          id: '2',
          img: 'https://avatarko.ru/img/kartinka/17/anonim_16595.jpg',
        },
        {
          id: '3',
          img: 'https://avatarko.ru/img/kartinka/22/film_elf_Tauriel_21381.jpg',
        },
        {
          id: '4',
          img: 'https://avatarko.ru/img/kartinka/1/Spiderman.jpg',
        },
        {
          id: '5',
          img:
            'https://i.pinimg.com/474x/8e/8d/d0/8e8dd0868c61806e1c24bc8dd3ec0d91.jpg',
        },
        {
          id: '6',
          img: 'https://avatarko.ru/img/kartinka/17/anonim_16595.jpg',
        },
        {
          id: '7',
          img: 'https://avatarko.ru/img/kartinka/22/film_elf_Tauriel_21381.jpg',
        },
        {
          id: '8',
          img: 'https://avatarko.ru/img/kartinka/1/Spiderman.jpg',
        },
      ],
    };
  },
};
</script>

<style scoped>
.inst {
  max-width: 1320px;
  min-height: 420px;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
}

.inst__title {
  width: 413px;
  min-height: 36px;
  margin: 0 0 32px 0;
  font-weight: 600;
  font-size: 32px;
  line-height: 36px;
}

.inst__underline {
  width: 174px;
  border-bottom: 3px solid currentColor;
}

.inst__text {
  width: 345px;
  min-height: 176px;
  margin: 0;
  font-weight: normal;
  font-size: 18px;
  line-height: 22px;
  color: #666666;
}

.inst__grid {
  width: 870px;
  height: 420px;
  display: grid;
  grid-template-columns: repeat(auto-fill, 195px);
  grid-column-gap: 30px;
  grid-row-gap: 30px;
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.inst__item {
  width: 195px;
  height: 195px;
  background: #ededed;
}
</style>
