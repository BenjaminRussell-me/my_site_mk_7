<template>
  <div id="contentHolder">
    <div id="contentWraper">
      <slot></slot>
    </div>
  </div>
</template>

<style lang="scss" scoped>
#contentHolder {
  display: grid;
  width: 100%;
}
#contentWraper {
  width: clamp(300px, 100%, 1000px);
  justify-self: center;
  padding: 1rem 3rem 1rem 3rem;
  background: hsla(0, 0%, 0%, 0.4);
}
</style>