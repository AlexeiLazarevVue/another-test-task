<script setup lang="ts">
  import { defineEmits, defineProps } from 'vue'

  export type LoadingTextProps = {
    borderRadius?: number
    width?: number | 'random'
    height?: number
    textAlign?: string
    rows?: number
  }

  const props = withDefaults(defineProps<LoadingTextProps>(), {
    borderRadius: 4,
    width: 100,
    height: 18,
    textAlign: 'center',
    rows: 1,
  })
</script>

<template>
  <div
    :style="`
  align-items: ${props.textAlign}`"
    :class="$style['loading-text']"
  >
    <span
      v-for="index in rows"
      :key="index"
      :style="`height: ${props.height}px; border-radius: ${props.borderRadius}px; 
  width: ${props.width === 'random' ? Math.floor(Math.random() * 5) * 10 + 50 : props.width}%;`"
      :class="$style['loading-text__row']"
    ></span>
  </div>
</template>

<style lang="scss" module>
  .loading-text {
    display: flex;
    flex-direction: column;
    gap: 16px;
    width: 100%;
    &__row {
      position: relative;
      display: flex;
      border-radius: 4px;
      background: #333333 100%;
      transition: 1s;
      overflow: hidden;
      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        height: 100%;
        width: 100%;
        background: linear-gradient(90deg, #3c3c3c00 0%, #444444 41.04%, #444444 60.04%, #33333300 100%);
        animation: loading 3s infinite;
        animation-delay: 0ms;
        z-index: 100;
      }
    }
  }
  @keyframes loading {
    to {
      left: 100%;
    }
  }
</style>
