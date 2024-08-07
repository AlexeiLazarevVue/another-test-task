<script lang="ts" setup>
  const emit = defineEmits(['onCloseModal'])
</script>

<template>
  <div :class="$style['edge-modal']">
    <div @click="emit('onCloseModal')" :class="$style['edge-modal__close-button']">
      <span :class="$style['edge-modal__close-button-line']"></span>
      <span :class="$style['edge-modal__close-button-line']"></span>
    </div>
    <slot></slot>
  </div>
</template>
<style lang="scss" module>
  .edge-modal {
    position: relative;
    display: flex;
    border-radius: 12px;
    width: 100%;
    border: 1px solid #4d4d4d;
    background: #262626;
    padding: 18px 14px;
    z-index: 10000;

    &__close-button {
      position: absolute;
      top: 0;
      right: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      align-self: flex-end;
      height: fit-content;
      width: fit-content;
      padding: 20px;
      cursor: pointer;

      &-line {
        &:first-child {
          position: absolute;
          height: 2px;
          width: 17px;
          background: #fff;
          transform: rotate(45deg);
          transition: 0.3s;
        }
        &:last-child {
          position: absolute;
          height: 2px;
          width: 17px;
          background: #fff;
          transform: rotate(-45deg);
          transition: 0.5s;
        }
      }

      &:hover {
        .edge-modal {
          &__close-button-line {
            &:first-child {
              transform: rotate(-45deg);
            }
            &:last-child {
              transform: rotate(45deg);
            }
          }
        }
      }
    }
  }
</style>
