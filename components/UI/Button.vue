<template>
  <button
    :class="['button', `button_${size}`, { button_disabled: disabled }]"
    :disabled="disabled"
    v-on:click="handleClick"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    disabled: Boolean,
    size: String,
  },
  methods: {
    handleClick(e) {
      e.preventDefault();
      if (this.disabled) return;
      this.$emit('btnClick');
    },
  },
};
</script>

<style scoped>
.button {
  width: fit-content;
  white-space: nowrap;
  padding: 16px 80px;
  border: 0;

  color: var(--color-lightgray2);
  font-family: Inter, sans-serif;
  font-weight: 500;
  font-size: 16px;

  background-color: var(--color-purple);
  transition: all 0.3s linear;
}

.button_small {
  padding: 16px 70px;
}

.button:hover {
  opacity: 0.9;
}

@media screen and (max-width: 1280px) {
  .button_small {
    padding: 15px 45px;
  }
}

@media screen and (max-width: 1024px) {
  .button {
    font-size: 15px;
  }

  .button_small {
    padding: 14px 49px;
  }
}

@media screen and (max-width: 768px) {
}

@media screen and (max-width: 320px) {
  .button {
    width: 290px;
    font-size: 13px;
  }

  .button_small {
    padding: 11px 50px;
  }
}
</style>
