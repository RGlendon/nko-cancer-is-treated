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
}

.input_bottom-bordered {
  border: none;
  padding: 12px 0;
  border-bottom: 1px solid var(--color-border);
}
</style>
