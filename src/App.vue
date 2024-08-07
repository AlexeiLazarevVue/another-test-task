<script setup lang="ts">
  import { computed, onMounted, watch } from 'vue'

  import { useInventoryStore } from '/@src/entities/'
  import { PlayerInventoryComponent } from '/@src/widgets/'

  const inventoryStore = useInventoryStore()

  const inventoryItems = computed(() => inventoryStore.items)

  watch(inventoryItems, inventoryStore.save, { deep: true })

  onMounted(inventoryStore.init)
</script>

<template>
  <PlayerInventoryComponent />
</template>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap');

  @font-face {
    font-family: 'SF Pro Display';
    src: url('./app/assets/SF-Pro-Display-Regular.otf');
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    display: flex;
    justify-content: center;
    align-items: center;
    background: #1d1d1d;
    color: #dedede;
    height: 100vh;
    font-family: 'Inter', sans-serif;
    font-weight: 500;
    font-size: 10px;
  }
</style>
