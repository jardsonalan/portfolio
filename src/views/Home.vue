<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts"></script>

<template>
  <VParallax src="/public/background-light.jpg">
    <div class="d-flex flex-column justify-center align-center h-screen">
      <div class="mb-4">
        <span :class="home.font" class="text-subtitle-2 text-md-subtitle-1 text-lg-subtitle-1 font-weight-bold mr-4 px-4 py-1 rounded-lg bg-blue">Hello</span>
        <span :class="home.font" class="text-subtitle-2 text-md-subtitle-1 text-lg-subtitle-1 font-weight-medium">I am</span>
      </div>
      <h1 :class="home.font" class="text-h4 text-md-h1 text-lg-h1 mb-4 font-weight-bold">Jardson Alan</h1>
      <h4 :class="home.font" class="text-center text-subtitle-2 text-md-subtitle-1 text-lg-subtitle-1 font-weight-bold"><span :id="home.spanColor">Front-end</span> Developer</h4>
    </div>
  </VParallax>
</template>

<style lang="scss" module="home">
@import '../sass/settings.scss';

.font {
  font-family: $font-h1;
}

#spanColor {
  color: $span-color;
}
</style>
