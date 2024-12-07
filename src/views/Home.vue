<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
const links = [
  { id: 1, nome: 'Linkedin', icon: 'mdi-linkedin', href: 'https://www.linkedin.com/in/jardson-alan/', target: '_blank' },
  { id: 2, nome: 'GitHub', icon: 'mdi-github', href: 'https://github.com/jardsonalan', target: '_blank' },
  { id: 3, nome: 'YouTube', icon: 'mdi-youtube', href: 'https://www.youtube.com/@JardsonAlan', target: '_blank' },
  { id: 4, nome: 'Instagram', icon: 'mdi-instagram', href: 'https://www.instagram.com/jardson.alan/', target: '_blank' },
]
</script>

<template>
  <VParallax src="background-light.jpg">
    <div class="d-flex flex-column justify-center align-center h-screen">
      <div class="mb-4">
        <span class="text-subtitle-2 text-md-subtitle-1 text-lg-subtitle-1 font-weight-bold mr-4 px-4 py-1 rounded-lg bg-blue">Hello</span>
        <span class="text-subtitle-2 text-md-subtitle-1 text-lg-subtitle-1 font-weight-medium">I am</span>
      </div>
      <h1 class="text-h4 text-md-h1 text-lg-h1 mb-4 font-weight-bold">Jardson Alan</h1>
      <h4 class="text-center text-subtitle-2 text-md-subtitle-1 text-lg-subtitle-1 font-weight-bold"><span class="span-color">Front-end</span> Developer</h4>
      <div>
        <VRow class="d-flex mt-1">
          <VCol
            v-for="link in links"
            :key="link.id"
            class="ma-n2"
          >
            <VBtn
              variant="text"
              :icon="link.icon"
              :href="link.href"
              :target="link.target"
            ></VBtn>
          </VCol>
        </VRow>
      </div>
      <VBtn
        prepend-icon="mdi-download"
        variant="outlined"
        rounded="xl"
        class="mt-4 text-subtitle-2 text-lg-subtitle-1"
        color="grey-darken-4"
        href="curriculo.pdf"
        download
      >
        Download CV
      </VBtn>
    </div>
  </VParallax>
</template>

<style lang="scss" module="home">
</style>
