<template>
  <input
    :class="['input', className, { 'input_bottom-bordered': bottomBordered }]"
    :type="type"
    v-model="content"
    @input="handleInput"
    ref="input"
    :placeholder="placeholder"
  />
</template>

<script>
export default {
  props: {
    value: String,
    autofocus: Boolean,
    bottomBordered: Boolean,
    placeholder: String,
    className: String,
    type: {
      type: String,
      default: 'text',
      validator: value =>
        'text|number|email|password|search|url|tel'.split('|').indexOf(value) >
        -1,
    },
  },
  data() {
    return {
      content: this.value,
    };
  },
  watch: {
    value(newVal, oldVal) {
      if (newVal !== this.content) {
        this.content = newVal;
      }
      if (this.autofocus) this.$refs.input.focus();
    },
  },
  methods: {
    handleInput(e) {
      this.$emit('input', this.content);
    },
  },
  mounted() {
    if (this.autofocus) this.$refs.input.focus();
  },
};
</script>

<style scoped>
.input {
  border: 1px solid var(--color-border);
  width: 100%;
  font-size: 18px;
  line-height: 24px;
  padding: 12px 6px;
  background: transparent;
  outline: none;
}

.input::placeholder {
  color: var(--color-gray3);
}

.input_bottom-bordered {
  border: none;
  padding: 12px 0;
  border-bottom: 1px solid var(--color-border);
}
</style>
