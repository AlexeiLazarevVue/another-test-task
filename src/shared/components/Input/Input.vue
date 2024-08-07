<script setup lang="ts">
  import { defineEmits, defineProps } from 'vue'

  export type LoadingTextProps = {
    modelValue: number
    placeholder?: string
    type?: 'text' | 'number'
  }

  const props = withDefaults(defineProps<LoadingTextProps>(), {
    placeholder: 'Введите текст',
  })
  const emit = defineEmits(['update:modelValue'])
</script>

<template>
  <input
    v-model="props.modelValue"
    :type="props.type"
    @input="(event) => emit('update:modelValue', event.target.value)"
    :placeholder="props.placeholder"
    :class="$style['custom-input']"
  />
</template>

<style lang="scss" module>
  .custom-input {
    padding: 10px;
    color: #fff;
    border: 1px solid #4d4d4d;
    border-radius: 4px;
    background: #262626;

    font-family: Inter;
    font-size: 14px;
    font-weight: 500;
    line-height: 16.94px;

    /* Chrome, Safari, Edge, Opera */
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    /* Firefox */
    &[type='number'] {
      -moz-appearance: textfield;
    }
  }
</style>
