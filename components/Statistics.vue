<template>
  <Container class="container_statistics" :className="'container_type_margin'">
    <section class="statistics">
      <h2 class="statistics__title">Статистика по онкозаболеваниям</h2>
      <div class="statistics__cards">
        <div class="statistics__card" v-for="card in cards" :key="card.id">
          <h3 class="statistics__card-title">{{ card.info.title }}</h3>
          <div class="statistics__info">
            <div
              class="statistics__first"
              :class="{ statistics__second: card.ui.type === 'two' }"
            >
              <div
                class="statistics__one"
                :style="{ width: card.ui.widthOne + '%' }"
              ></div>
              <div
                class="statistics__two"
                :style="{ width: card.ui.widthTwo + '%' }"
              ></div>
            </div>
            <p class="statistics__numbers">{{ card.info.numbers }}</p>
            <p class="statistics__from">{{ card.info.from }}</p>
          </div>
        </div>
      </div>
    </section>
  </Container>
</template>

<script>
import Container from '~/components/Container';

export default {
  name: 'Statistics',
  components: { Container },
  data() {
    return {
      cards: [
        {
          id: 1,
          info: {
            title:
              'Каждый 3-й в стране уверен, что рак неизлечим. А это примерно 48 918 000 человек.',
            numbers: '1 из 3',
            from: 'Левада-Центр 2018',
          },
          ui: {
            type: 'one',
            widthOne: 33.07,
            widthTwo: 66.93,
          },
        },
        {
          id: 2,
          info: {
            title: '2,6% Россиян имеют онкозаболевания.',
            numbers: '3 700 000',
            from: 'Росстат 2018',
          },
          ui: {
            type: 'one',
            widthOne: 2.69,
            widthTwo: 97.31,
          },
        },
        {
          id: 3,
          info: {
            title:
              'На 28% выросла доля выявления заболеваний на ранней стадии за 10 лет.',
            numbers: '↑ 28%',
            from: 'МНИОИ Герцена 2018',
          },
          ui: {
            type: 'two',
            widthOne: 80,
            widthTwo: 61.53,
          },
        },
        {
          id: 4,
          info: {
            title:
              'На 25% снизилась смертность в течение первого года после постановки диагноза.',
            numbers: '↓ 25%',
            from: 'МНИОИ Герцена 2018',
          },
          ui: {
            type: 'two',
            widthOne: 54.61,
            widthTwo: 73,
          },
        },
      ],
    };
  },
};
</script>

<style scoped>
.statistics__title {
  font-weight: 600;
  font-size: 32px;
  line-height: 36px;
  width: 31.28%;
  margin: 0;
}

.statistics__cards {
  margin: 70px 0 0;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 40px;
}

.statistics__card {
  height: 300px;
  padding: 18px;
  background: #ffffff;
  border: 1px solid #efefef;
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.statistics__card-title {
  font-weight: normal;
  font-size: 12px;
  line-height: 16px;
  margin: 0;
  color: #000;
}

.statistics__first {
  display: flex;
  height: 40px;
}

.statistics__second {
  flex-direction: column-reverse;
}

.statistics__second div {
  height: 20px;
}

.statistics__one {
  background-color: var(--color-purple);
}

.statistics__two {
  background-color: #f4f4f4;
}

.statistics__numbers {
  font-weight: 600;
  font-size: 38px;
  line-height: 40px;
  text-align: right;
  margin: 20px 0 0;
}

.statistics__from {
  font-size: 12px;
  line-height: 16px;
  text-align: right;
  color: #666666;
  margin: 20px 0 0;
}

@media screen and (max-width: 1280px) {
  .statistics__title {
    font-size: 28px;
    line-height: 32px;
  }

  .statistics__cards {
    margin: 60px 0 0;
  }

  .statistics__card {
    height: 265px;
  }
}
@media screen and (max-width: 1024px) {
  .statistics__title {
    font-size: 24px;
    line-height: 28px;
  }

  .statistics__cards {
    margin: 46px 0 0;
    grid-column-gap: 30px;
  }

  .statistics__card {
    height: 208px;
    padding: 10px;
  }

  .statistics__card-title {
    font-size: 10px;
    line-height: 14px;
  }

  .statistics__first {
    height: 28px;
  }

  .statistics__numbers {
    font-size: 26px;
    line-height: 30px;
    margin: 10px 0 0;
  }

  .statistics__from {
    font-size: 10px;
    line-height: 14px;
  }
}
@media screen and (max-width: 768px) {
  .container_statistics {
    padding: 0;
  }
  .statistics {
    margin-left: 40px;
  }
  .statistics__title {
    font-size: 24px;
    line-height: 28px;
    text-align: center;
    margin: 0 auto 0;
  }

  .statistics__cards {
    overflow: scroll;
    margin: 60px 0 0;
    grid-column-gap: 20px;
  }

  .statistics__card {
    width: 216px;
    height: 216px;
  }
}
@media screen and (max-width: 320px) {
  .statistics {
    margin-left: 15px;
  }
  .statistics__title {
    width: 290px;
    text-align: left;
    font-size: 18px;
    line-height: 21px;
    margin: 0;
  }

  .statistics__cards {
    overflow: scroll;
    overflow-y: hidden;
    margin: 40px 0 0;
    grid-column-gap: 10px;
  }
}
</style>
