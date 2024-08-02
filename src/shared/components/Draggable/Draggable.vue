<script setup lang="ts">
import { defineEmits, defineProps } from "vue";
export type DraggableProps = {
  groupName: string;
};

const props = defineProps<DraggableProps>();
const emit = defineEmits(["onDragEnd"]);

const getNewSort = (event) => {
  return document
    .elementFromPoint(event.clientX, event.clientY)
    .getAttribute("data-id");
};

const checkGroup = (event) => {
  return (
    document
      .elementFromPoint(event.clientX, event.clientY)
      .getAttribute("data-group") === props.groupName
  );
};

const onDragEnd = (event) => {
  if (checkGroup(event)) {
    const newSort = Number(getNewSort(event));
    emit("onDragEnd", newSort);
  }
};
</script>

<template>
  <div
    draggable
    @dragend="(event) => onDragEnd(event)"
    :class="$style['draggable-wrapper']"
  >
    <slot></slot>
  </div>
</template>

<style lang="scss" module>
.draggable-wrapper {
  position: relative;
  height: 100%;
  width: 100%;
  z-index: 100;
  &:hover {
    background: #3d3d3d;
  }
}
</style>
