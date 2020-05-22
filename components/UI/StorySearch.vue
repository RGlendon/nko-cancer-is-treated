<template>
  <div class="search__block">
    <form
      class="form"
      name="search"
      action="http://httpbin.org/post"
      method="POST"
    >
      <div class="form__field">
        <input
          class="form__input"
          type="text"
          minlength="2"
          maxlength="20"
          name="name"
          pattern="[А-ЯЁ][а-яё]+(-[А-ЯЁ][а-яё]+)?"
          placeholder="Поиск"
          required=""
        />
      </div>

      <button class="form__button" type="text">Поиск</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'StorySearch',
};
</script>

<style scoped>
.form {
  margin: auto;
  display: flex;
  justify-content: space-between;
}

.form__fieldset {
  border: none;
  margin: 0;
  padding: 0;
}

.form__field {
  display: block;
  width: calc((1074 / 1320) * 100%);
}

.form__input {
  width: 100%;
  height: 52px;
  border: none;
  border: 1px solid #e8e8e8;
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  box-sizing: border-box;
}

.form__button {
  width: 226px;
  height: 52px;
  background: #613a93;
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  color: #ffffff;
  padding: 0;
}

@media screen and (max-width: 1280px) {
  .form__field {
    width: 934px;
  }
  .form__input {
    height: 48px;
  }
  .form__button {
    height: 48px;
  }
}

@media screen and (max-width: 1024px) {
  .form__field {
    width: 696px;
  }
  .form__input {
    height: 46px;
  }
  .form__button {
    height: 46px;
    width: 208px;
  }
}

@media screen and (max-width: 768px) {
  .form__field {
    width: 460px;
  }
  .form__input {
    height: 46px;
  }
  .form__button {
    height: 46px;
    width: 208px;
  }
}
@media screen and (max-width: 320px) {
  .form__field {
    width: 238px;
  }
  .form__input {
    height: 46px;
  }
  .form__button {
    height: 46px;
    width: 46px;
    color: transparent;
    /* background: center contain no-repeat 35% url('/images/search.svg'); */
    background: #613a93 url('/images/search.svg') no-repeat center;
  }
}
</style>
