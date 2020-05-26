export const state = () => ({
  stories: [
    {
      id: '1',
      author: 'Владимир Тен',
      text:
        'Я всегда читаю книги с конца, - и это не лечится, в отличие от рака.',
      img:
        'https://i.pinimg.com/474x/8e/8d/d0/8e8dd0868c61806e1c24bc8dd3ec0d91.jpg',
    },
    {
      id: '2',
      author: 'Владимир Познер',
      text: 'Я боюсь акул — и, в отличии от рака, это не лечится.',
      img: 'https://avatarko.ru/img/kartinka/17/anonim_16595.jpg',
    },
    {
      id: '3',
      author: 'Александр Тарханов',
      text: 'Я не могу победить свою пунктуальность в отличии от рака.',
      img: 'https://avatarko.ru/img/kartinka/22/film_elf_Tauriel_21381.jpg',
    },
    {
      id: '4',
      author: 'Владимир Тен',
      text:
        'Я всегда читаю книги с конца, - и это не лечится, в отличие от рака.',
      img: 'https://avatarko.ru/img/kartinka/1/Spiderman.jpg',
    },
    {
      id: '5',
      author: 'Владимир Тен',
      text:
        'Я всегда читаю книги с конца, - и это не лечится, в отличие от рака.',
      img:
        'https://i.pinimg.com/474x/8e/8d/d0/8e8dd0868c61806e1c24bc8dd3ec0d91.jpg',
    },
    {
      id: '6',
      author: 'Владимир Познер',
      text: 'Я боюсь акул — и, в отличии от рака, это не лечится.',
      img: 'https://avatarko.ru/img/kartinka/17/anonim_16595.jpg',
    },
    {
      id: '7',
      author: 'Александр Тарханов',
      text: 'Я не могу победить свою пунктуальность в отличии от рака.',
      img: 'https://avatarko.ru/img/kartinka/22/film_elf_Tauriel_21381.jpg',
    },
    {
      id: '8',
      author: 'Владимир Тен',
      text:
        'Я всегда читаю книги с конца, - и это не лечится, в отличие от рака.',
      img: 'https://avatarko.ru/img/kartinka/1/Spiderman.jpg',
    },
    {
      id: '9',
      author: 'Владимир Тен',
      text:
        'Я всегда читаю книги с конца, - и это не лечится, в отличие от рака.',
      img:
        'https://i.pinimg.com/474x/8e/8d/d0/8e8dd0868c61806e1c24bc8dd3ec0d91.jpg',
    },
    {
      id: '10',
      author: 'Владимир Познер',
      text: 'Я боюсь акул — и, в отличии от рака, это не лечится.',
      img: 'https://avatarko.ru/img/kartinka/17/anonim_16595.jpg',
    },
    {
      id: '11',
      author: 'Александр Тарханов',
      text: 'Я не могу победить свою пунктуальность в отличии от рака.',
      img: 'https://avatarko.ru/img/kartinka/22/film_elf_Tauriel_21381.jpg',
    },
    {
      id: '12',
      author: 'Владимир Тен',
      text:
        'Я всегда читаю книги с конца, - и это не лечится, в отличие от рака.',
      img: 'https://avatarko.ru/img/kartinka/1/Spiderman.jpg',
    },
    {
      id: '13',
      author: 'Владимир Тен',
      text:
        'Я всегда читаю книги с конца, - и это не лечится, в отличие от рака.',
      img:
        'https://i.pinimg.com/474x/8e/8d/d0/8e8dd0868c61806e1c24bc8dd3ec0d91.jpg',
    },
    {
      id: '14',
      author: 'Владимир Познер',
      text: 'Я боюсь акул — и, в отличии от рака, это не лечится.',
      img: 'https://avatarko.ru/img/kartinka/17/anonim_16595.jpg',
    },
    {
      id: '15',
      author: 'Александр Тарханов',
      text: 'Я не могу победить свою пунктуальность в отличии от рака.',
      img: 'https://avatarko.ru/img/kartinka/22/film_elf_Tauriel_21381.jpg',
    },
    {
      id: '16',
      author: 'Владимир Тен',
      text:
        'Я всегда читаю книги с конца, - и это не лечится, в отличие от рака.',
      img: 'https://avatarko.ru/img/kartinka/1/Spiderman.jpg',
    },
  ],
});

export const getters = {
  getStories(state) {
    return state.stories;
  },
};
