<template>
  <input
    :class="['input', className, { 'input_bottom-bordered': bottomBordered }]"
    :type="type"
    :placeholder="placeholder"
    :name="name"
    :required="required"
    @input="$emit('input', $event.target.value)"
  />
</template>

<script>
export default {
  props: {
    name: String,
    required: Boolean,
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
  padding: 0 0 9px 0;
  font-size: 18px;
  line-height: 24px;
  border-bottom: 1px solid var(--color-border);
  color: #666;
}
@media screen and (max-width: 1280px) {
  .input_bottom-bordered {
    font-size: 16px;
    line-height: 22px;
  }
}
@media screen and (max-width: 1024px) {
  .input_bottom-bordered {
    font-size: 15px;
    line-height: 22px;
  }
}
@media screen and (max-width: 768px) {
  .input_bottom-bordered {
    font-size: 15px;
    line-height: 19px;
  }
}
@media screen and (max-width: 320px) {
  .input_bottom-bordered {
    padding: 2px 0;
    font-size: 13px;
    line-height: 16px;
  }
}
</style>
