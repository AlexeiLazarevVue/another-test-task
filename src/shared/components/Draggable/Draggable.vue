<script setup lang="ts">
  import { defineEmits, defineProps, nextTick, ref } from 'vue'
  export type DraggableProps = {
    groupName: string
  }

  const props = defineProps<DraggableProps>()
  const emit = defineEmits(['onDragEnd'])

  const draggedOrigin = ref(null)
  const draggedCopy = ref(null)
  const isBeingDragged = ref(false)

  let timerId = null

  const getNewSort = (element) => {
    return element.getAttribute('data-id')
  }

  const getGroup = (event) => {
    return document
      .elementsFromPoint(event.clientX, event.clientY)
      .find((element) => element.getAttribute('data-group') === props.groupName)
  }

  const onDragEnd = (event) => {
    const groupElement = getGroup(event)
    clearTimeout(timerId)

    if (groupElement) {
      const newSort = Number(getNewSort(groupElement))

      emit('onDragEnd', newSort)

      window.removeEventListener('mousemove', onDrag)

      isBeingDragged.value = false

      draggedOrigin.value.style.opacity = '100%'
    }
  }

  const onDrag = (event) => {
    if (draggedCopy.value && event.pageX && event.pageY) {
      draggedCopy.value.style.left = event.pageX - draggedCopy.value.offsetWidth / 2 + 'px'
      draggedCopy.value.style.top = event.pageY - draggedCopy.value.offsetWidth / 2 + 'px'
    }
  }

  const onDragStart = (event) => {
    // draggedCopy.value.style.left = event.pageX - draggedCopy.value.offsetWidth / 2 + "px";
    isBeingDragged.value = true
    nextTick(() => {
      draggedOrigin.value.style.opacity = '50%'

      // isBeingDragged.value;
      // console.log(draggedCopy.value);
      window.addEventListener('mousemove', onDrag)
      if (draggedCopy.value) {
        onDrag(event)
        console.log({ draggedCopy: draggedCopy.value })

        draggedCopy.value.style.opacity = '100%'
      }
    })
  }

  const onPreDragStart = (event) => {
    timerId = setTimeout(() => onDragStart(event), 150)
  }
</script>

<template>
  <div ref="draggedOrigin" :class="$style['draggable-wrapper']" @mouseup="onDragEnd" @mousedown="onPreDragStart">
    <slot></slot>
  </div>
  <div
    v-show="isBeingDragged"
    @mouseup="onDragEnd"
    :class="$style['draggable-wrapper__dragged-copy']"
    ref="draggedCopy"
  >
    <slot name="dragged-copy"></slot>
  </div>
</template>

<style lang="scss" module>
  .draggable-wrapper {
    position: relative;
    height: 100%;
    width: 100%;
    z-index: 100;

    &__dragged-copy {
      position: fixed;
      top: 0;
      left: 0;
      opacity: 0;
      z-index: 100000000;
    }
  }
</style>
