<!-- eslint-disable vue/multi-word-component-names -->
<script lang="ts" setup>
const links = [
  { id: 1, nome: 'Linkedin', icon: 'mdi-linkedin', href: 'https://www.linkedin.com/in/jardson-alan/', target: '_blank' },
  { id: 2, nome: 'GitHub', icon: 'mdi-github', href: 'https://github.com/jardsonalan', target: '_blank' },
  { id: 3, nome: 'YouTube', icon: 'mdi-youtube', href: 'https://www.youtube.com/@JardsonAlan', target: '_blank' },
  { id: 4, nome: 'Instagram', icon: 'mdi-instagram', href: 'https://www.instagram.com/jardson.alan/', target: '_blank' },
]
</script>

<template>
  <VContainer class="d-flex d-md-none d-lg-none align-center h-screen">
    <VCard class="mx-auto pa-3" width="300">
      <VCardTitle class="mb-2 text-center text-h4 font-weight-bold">About <span class="span-color">me</span></VCardTitle>
      <VImg
        class="rounded-circle mx-auto"
        src="/perfil.jpeg"
        width="120"
      ></VImg>
      <VCardText>
        <ul class="mt-4 text-center">
          <li class="mb-2">Graduated in IT Technician</li>
          <li class="mb-2">Studying Internet Systems</li>
          <li class="mb-2">Basic to Intermediate English</li>
        </ul>
      </VCardText>
      <VRow class="d-flex mt-2">
        <VCol
          v-for="link in links"
          :key="link.id"
        >
          <VBtn
            :icon="link.icon"
            :href="link.href"
            :target="link.target"
          ></VBtn>
        </VCol>
      </VRow>
    </VCard>
  </VContainer>

  <VContainer class="d-none d-md-flex d-lg-flex align-center h-screen">
    <VCard class="d-flex mx-auto pa-3" width="800">
      <div>
        <VCardTitle class="mb-2 text-center text-h4 font-weight-bold">About <span class="span-color">me</span></VCardTitle>
        <VImg
          class="rounded-circle mx-auto"
          src="/perfil.jpeg"
          width="150"
        ></VImg>
        <VCardText>
          <ul class="mt-4 text-center">
            <li class="mb-2">Graduated in IT Technician</li>
            <li class="mb-2">Studying Internet Systems</li>
            <li class="mb-2">Basic to Intermediate English</li>
          </ul>
        </VCardText>
      </div>
      <VDivider vertical></VDivider>
      <VRow class="d-flex flex-column">
        <VCol
          class="d-flex flex-column justify-center align-center"
          v-for="link in links"
          :key="link.id"
        >
          <VBtn
            width="500"
            :prepend-icon="link.icon"
            :href="link.href"
            :target="link.target"
          >
            {{ link.nome }}
          </VBtn>
        </VCol>
      </VRow>
    </VCard>
  </VContainer>
</template>

<style lang="scss" module="about">
</style>
