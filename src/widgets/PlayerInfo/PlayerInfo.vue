<script lang="ts" setup>
</script>
<template>
  <div :class="$style['player-info']">
    <img src="../../app/assets/a.png" :class="$style['player-info__image']" />
    <div :class="$style['player-info__text-block']">
      <loading-text></loading-text>
    </div>
  </div>
</template>
<style lang="scss" module>
.player-info {
  display: flex;
  flex-direction: column;
  width: 236px;
  border: 1px solid #4d4d4d;
  border-radius: 12px;
  background: 100%;
  overflow: hidden;
  background: #262626;
  &__image {
    height: 50%;
    width: 100%;
    padding: 18px 14px;
  }
}
</style>