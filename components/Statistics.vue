<template>
  <Container :className="'container_type_margin'">
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
import Container from './Container';

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
            widthOne: 33,
            widthTwo: 77,
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
            widthOne: 2.7,
            widthTwo: 97.3,
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
            widthOne: 54.16,
            widthTwo: 73,
          },
        },
      ],
    };
  },
};
</script>

<style scoped>
.statistics {
  max-width: 1320px;
  margin: 0 auto;
}

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
  /*grid-template-rows: fit-content();*/
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
</style>
