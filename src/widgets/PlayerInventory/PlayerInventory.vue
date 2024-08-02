<script lang="ts" setup>
import { InventoryListComponent, PlayerInfoComponent } from "/@src/widgets/";
</script>
<template>
  <div :class="$style['player-inventory']">
    <div :class="$style['player-inventory__main-info']">
      <PlayerInfoComponent />
      <InventoryListComponent />
    </div>
  </div>
</template>
<style lang="scss" module>
.player-inventory {
  // background: #262626;
  width: 775px;
  height: 586px;
  &__main-info {
    display: flex;
    gap: 25px;
    justify-content: space-between;
  }
}
</style>
