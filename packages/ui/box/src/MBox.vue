<script setup lang="ts">
import { computed, toRefs } from "vue";
import { css } from "@emotion/css";

import type { Component } from "vue";
import type { CSSObject } from "@emotion/css";

const props = withDefaults(defineProps<{
  as?: string | Component
  w?: CSSObject["width"]
  h?: CSSObject["height"]
  p?: CSSObject["padding"]
  pt?: CSSObject["paddingTop"]
  pb?: CSSObject["paddingBottom"]
  ps?: CSSObject["paddingRight"]
  pe?: CSSObject["paddingLeft"]
  bgColor?: CSSObject["backgroundColor"]
  bgImg?: CSSObject["backgroundImage"]
  bgPos?: CSSObject["backgroundPosition"]
  bgClip?: CSSObject["backgroundClip"]
}>(), { as: "div" });

const { as, ...other } = toRefs(props);

const styles = computed(() => css({
  width: other.w?.value,
  height: other.h?.value,
  backgroundColor: other.bgColor?.value,
  backgroundImage: other.bgImg?.value && `url("${other.bgImg?.value}")`,
  padding: other.p?.value,
  paddingTop: other.pt?.value,
  paddingBottom: other.pb?.value,
  "html[dir=ltr] &, &[dir=ltr]": {
    paddingLeft: other.ps?.value,
    paddingRight: other.pe?.value
  },
  "html[dir=rtl] &, &[dir=rtl]": {
    paddingLeft: other.pe?.value,
    paddingRight: other.ps?.value
  },
  body: {
    background: 'red'
  }
}));

</script>

<template>
  <component :class="styles" :is="as">
    <slot></slot>
  </component>
</template>
