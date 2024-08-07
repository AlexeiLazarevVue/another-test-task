<script setup lang="ts">
  import { defineEmits, defineProps } from 'vue'

  export type LoadingTextProps = {
    borderRadius?: number
    width?: number | 'random'
    height?: number
    textAlign?: string
    rows?: number
    stratch?: boolean
    view?: 'primary' | 'secondary'
  }

  const props = withDefaults(defineProps<LoadingTextProps>(), {
    borderRadius: 4,
    width: 100,
    height: 18,
    textAlign: 'center',
    rows: 1,
    stratch: false,
    view: 'primary',
  })
</script>

<template>
  <button
    :style="props.stratch ? 'width: 100%' : ''"
    :class="[$style['custom-button'], $style[`button-view-${props.view}`]]"
  >
    <slot></slot>
  </button>
</template>

<style lang="scss" module>
  .custom-button {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8px 20px;
    color: #fff;
    border: none;
    border-radius: 8px;
    background: #fa7272;
    cursor: pointer;

    //styleName: Tg-Btn;
    font-family: 'SF Pro Display';
    font-size: 14px;
    font-weight: 400;
    line-height: 16.71px;
    z-index: 1000;
    transition: 0.2s;

    &:hover {
      background: #313131;
      color: #fff;
    }
  }

  .button-view-secondary {
    background: #ffffff;
    color: #000;
  }
</style>
