<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 88.35 83.36"
  >
    <defs>
      <filter
        id="luminosity-noclip"
        x="-2.28"
        y="-2.5"
        width="93"
        height="88"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-color="#fff" result="bg" />
        <feBlend in="SourceGraphic" in2="bg" />
      </filter>
      <mask
        id="mask"
        x="-2.28"
        y="-2.5"
        width="93"
        height="88"
        maskUnits="userSpaceOnUse"
      >
        <g class="cls-7">
          <image
            width="93"
            height="88"
            transform="translate(-2.28 -2.5)"
            xlink:href="data:image/png;base64,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"
          />
        </g>
      </mask>
    </defs>
    <g class="cls-1">
      <g id="Layer_2" data-name="Layer 2">
        <g id="hex4">
          <g class="cls-2">
            <g class="cls-3">
              <path
                class="cls-4"
                d="M53.49,14H34.87a11.54,11.54,0,0,0-10,5.78L15.55,35.9a11.54,11.54,0,0,0,0,11.56l9.31,16.13a11.56,11.56,0,0,0,10,5.77H53.49a11.55,11.55,0,0,0,10-5.77L72.8,47.46a11.54,11.54,0,0,0,0-11.56L63.49,19.78A11.54,11.54,0,0,0,53.49,14Z"
              />
            </g>
          </g>
          <path
            class="cls-5"
            d="M53.49,14H34.87a11.54,11.54,0,0,0-10,5.78L15.55,35.9a11.54,11.54,0,0,0,0,11.56l9.31,16.13a11.56,11.56,0,0,0,10,5.77H53.49a11.55,11.55,0,0,0,10-5.77L72.8,47.46a11.54,11.54,0,0,0,0-11.56L63.49,19.78A11.54,11.54,0,0,0,53.49,14Z"
          />
          <path
            class="cls-6"
            d="M53.49,14H34.87a11.54,11.54,0,0,0-10,5.78L15.55,35.9a11.54,11.54,0,0,0,0,11.56l9.31,16.13a11.56,11.56,0,0,0,10,5.77H53.49a11.55,11.55,0,0,0,10-5.77L72.8,47.46a11.54,11.54,0,0,0,0-11.56L63.49,19.78A11.54,11.54,0,0,0,53.49,14Z"
          />
        </g>
      </g>
    </g>
  </svg>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {},
});
</script>

<style lang="scss" scoped>
svg {
  grid-area: 1/1/1/1;
}
.cls-1 {
  isolation: isolate;
}

.cls-2 {
  opacity: 0.18;
  mix-blend-mode: soft-light;
}

.cls-3 {
  mask: url(#mask);
}

.cls-4,
.cls-5,
.cls-6 {
  fill: none;
  stroke-miterlimit: 10;
}

.cls-4,
.cls-5 {
  stroke: #19e691;
}

.cls-4 {
  stroke-width: 28px;
}

.cls-5 {
  stroke-width: 6px;
}

.cls-6 {
  stroke: #fff;
}

.cls-7 {
  filter: url(#luminosity-noclip);
}
</style>