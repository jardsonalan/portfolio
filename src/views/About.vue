<!-- eslint-disable vue/multi-word-component-names -->
<script lang="ts" setup>
const cursos = [
  { id: 1, nome: 'Certificação da Microsoft', orgao: 'Fundação Bradesco' },
  { id: 2, nome: 'JavaScript', orgao: 'IFRS - Instituto Federal do Rio Grande do Sul' },
  { id: 3, nome: 'HTML5 e CSS3: Módulo 1 ao 3', orgao: 'Curso em Vídeo' },
  { id: 4, nome: 'JavaScript', orgao: 'Curso em Vídeo' },
  { id: 2, nome: 'Python 3 - Mundo 1', orgao: 'Curso em Vídeo' },
]
</script>

<template>
  <div class="d-flex flex-column py-4 align-center h-screen overflow-y-auto">
    <h1>About <span class="span-color">me</span></h1>
    <div>
      <VImg
        class="rounded-circle mt-3"
        src="perfil.jpeg"
        width="120"
      ></VImg>
    </div>
    <h2 class="text-h6 mt-5 font-weight-bold">Formação Acadêmica</h2>
    <hr style="width: 100px;" color="#2196F3">
    <div style="width: 90%;" class="mt-4">
      <VRow class="my-3">
        <VCol cols="12" md="6" lg="6">
          <VCard flat class="border-s-lg" border="primary">
            <VIcon icon="mdi-certificate" class="ml-4"></VIcon>
            <VCardTitle class="text-h6 font-weight-bold text-wrap">Técnico em Informática</VCardTitle>
            <VCardSubtitle class="text-subtitle-2 text-wrap">IFRN - Instituto Federal do Rio Grande do Norte</VCardSubtitle>
            <VCardSubtitle class="text-subtitle-2">2020-2024</VCardSubtitle>
            <VCardText class="text-justify">Programação, Desenvolvimento de Projeto, Desenvolvimento de Banco de Dados, Manutenção de Computadores</VCardText>
          </VCard>
        </VCol>

        <VCol>
          <VCard flat class="border-s-lg" border="primary">
            <VIcon icon="mdi-account-school" class="ml-4"></VIcon>
            <VCardTitle class="text-h6 font-weight-bold text-wrap">Tecnologia de Sistemas para Internet</VCardTitle>
            <VCardSubtitle class="text-subtitle-2 text-wrap">IFRN - Instituto Federal do Rio Grande do Norte</VCardSubtitle>
            <VCardSubtitle class="text-subtitle-2">Atual</VCardSubtitle>
            <VCardText class="text-justify">Programação, Desenvolvimento de projeto, Estrutura de aplicações, Desenvolvimento de Banco de Dados</VCardText>
          </VCard>
        </VCol>
      </VRow>
    </div>
    <h2 class="text-h6 mt-5 font-weight-bold">Cursos</h2>
    <hr style="width: 50px;" color="#2196F3">
    <div style="width: 90%;" class="mt-4">
      <VRow class="my-3">
        <VCol cols="12" md="6" lg="6" v-for="curso in cursos" :key="curso.id">
          <VHover
            v-slot="{ isHovering, props }"
          >
            <VCard v-bind="props" :elevation="isHovering ? 6 : 1" class="border-s-lg py-3" border="primary">
              <VIcon icon="mdi-certificate" class="ml-4"></VIcon>
              <VCardTitle class="text-h6 font-weight-bold text-wrap">{{ curso.nome }}</VCardTitle>
              <VCardSubtitle class="text-subtitle-2 text-wrap">{{ curso.orgao }}</VCardSubtitle>
            </VCard>
          </VHover>
        </VCol>
      </VRow>
    </div>
  </div>
</template>

<style lang="scss" module="about">
</style>
