<template>
  <Container>
    <div class="inst">
      <div class="inst__container">
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
          <img class="inst__item" :src="item.img" alt="картинка" />
        </li>
      </ul>
    </div>
  </Container>
</template>

<script>
import Container from '@/components/Container.vue';

export default {
  components: {
    Container,
  },
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
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
}

.inst__container {
  width: 340px;
}

.inst__title {
  min-height: 36px;
  margin: 0 0 32px 0;
  font-weight: 600;
  font-size: 32px;
  line-height: 36px;
}

.inst__underline {
  /*width: 174px;*/
  border-bottom: 3px solid currentColor;
}

.inst__text {
  margin: 0;
  font-size: 18px;
  line-height: 22px;
  color: var(--color-gray3);
}

.inst__grid {
  width: 870px;
  display: grid;
  grid-template-columns: repeat(auto-fill, 195px);
  grid-auto-rows: 195px;
  grid-column-gap: 30px;
  grid-row-gap: 30px;
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.inst__item {
  width: 100%;
  height: 100%;
  background: #ededed;
}

@media screen and (max-width: 1280px) {
  .inst__container {
    width: 305px;
  }

  .inst__title {
    min-height: 32px;
    margin: 0 0 30px 0;
    font-size: 28px;
    line-height: 32px;
  }

  .inst__text {
    font-size: 16px;
    line-height: 20px;
  }

  .inst__grid {
    width: 765px;
    grid-template-columns: repeat(auto-fill, 171px);
    grid-auto-rows: 171px;
    grid-column-gap: 27px;
    grid-row-gap: 27px;
  }
}

@media screen and (max-width: 1024px) {
  .inst__container {
    width: 260px;
  }

  .inst__title {
    min-height: 28px;
    margin: 0 0 20px 0;
    font-size: 24px;
    line-height: 28px;
  }

  .inst__text {
    font-size: 13px;
    line-height: 16px;
  }

  .inst__grid {
    width: 604px;
    height: 292px;
    grid-template-columns: repeat(auto-fill, 136px);
    grid-auto-rows: 136px;
    grid-column-gap: 20px;
    grid-row-gap: 20px;
  }
}

@media screen and (max-width: 768px) {
  .inst {
    flex-direction: column;
  }

  .inst__container {
    width: 390px;
    margin: 0 auto;
  }

  .inst__title {
    margin: 0 auto 26px;
    text-align: center;
  }

  .inst__grid {
    width: 100%;
    height: 334px;
    margin: 60px auto 0;
    grid-template-columns: repeat(auto-fill, 157px);
    grid-auto-rows: 157px;
    grid-column-gap: 20px;
    grid-row-gap: 20px;
  }
}

@media screen and (max-width: 320px) {
  .inst__container {
    width: 100%;
  }

  .inst__title {
    min-height: 21px;
    text-align: left;
    font-size: 18px;
    line-height: 21px;
  }

  .inst__grid {
    width: 290px;
    height: 590px;
    margin: 40px auto 0;
    grid-template-columns: repeat(auto-fill, 140px);
    grid-auto-rows: 140px;
    grid-column-gap: 10px;
    grid-row-gap: 10px;
  }
}
</style>
