<script setup lang="ts">
import { useStyles } from "./MButtonStyles";

withDefaults(defineProps<{
  variant?: "solid" | "text" | "ghost" | "outlined",
  label?: string
  loading?: boolean
}>(), { variant: "solid", label: "" });

const { baseStyle, outlinedStyle, solidStyle, ghostStyle, textStyle } = useStyles();
</script>

<template>
  <button :class="[baseStyle, {
    [solidStyle]: $props.variant === 'solid',
    [outlinedStyle]: $props.variant === 'outlined',
    [ghostStyle]: $props.variant === 'ghost',
    [textStyle]: $props.variant === 'text'
  }]">
    <template v-if="!loading">
      <slot name="start"></slot>
      <span>{{ label }}</span>
      <slot name="end"></slot>
    </template>
    <template v-else>
      Loading
    </template>
  </button>
</template>
