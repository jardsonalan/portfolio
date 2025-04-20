<!-- eslint-disable vue/multi-word-component-names -->
<script lang="ts" setup>
import { ref, computed } from 'vue';

const tab = ref('all')
const show = ref<number|null>(null)

const project = [
  { id: 1, value: 'app', image: 'app_motorcycle.png', tipo: 'Aplicação Mobile', nome: 'MotoBuscApp', link: 'https://github.com/jardsonalan/app-motorcycle', descricao: 'O MotoBuscApp foi um aplicativo desenvolvido como projeto de Trabalho de Conclusão de Curso (TCC), do curso Técnico em Informática do Instituto Federal do Rio Grande do Norte (IFRN). O objetivo principal do desenvolvimento do aplicativo foi facilitar a solicitação de serviços de mototaxistas para turistas e moradores da cidade de Currais Novos, RN.', desenvolvedor: 'Desenvolvido por: Jardson Alan e Ian Galvão' },
  { id: 2, value: 'web', image: 'api-universidade.png', tipo: 'API', nome: 'API Universidade', link: 'https://github.com/jardsonalan/api-universidade', descricao: 'A API Universidade é uma aplicação pública, desenvolvida durante as aulas de Programação para Internet, com o objetivo de gerenciar ações relacionadas a uma universidade fictícia. A API permite gerenciar Alunos, Cursos, Disciplinas e também conta com um sistema de autenticação via token JWT.', desenvolvedor: 'Desenvolvido por: Jardson Alan' },
  { id: 3, value: 'web', image: 'the-theft.png', tipo: 'Mini RPG', nome: 'The Theft', link: 'https://github.com/jardsonalan/the-theft', descricao: 'The Theft é um mini RPG desenvolvido para a disciplina de inglês. O objetivo é avançar pelos três níveis disponíveis, enfrentando desafios e obstáculos ao longo do caminho, para no final realizar um grande roubo no banco.', desenvolvedor: 'Desenvolvido por: Jardson Alan' },
]

const filteredProjects = computed(() => {
  if (tab.value === 'all') {
    return project
  }
  return project.filter(p => p.value === tab.value)
})

const toggleCard = (id:number) => {
  show.value = show.value === id ? null : id
}

</script>

<template>
  <div class="h-screen overflow-y-auto pa-4">
    <VTabs
      v-model="tab"
      align-tabs="center"
      color="blue"
    >
      <VTab value="all">All</VTab>
      <VTab value="app">Apps</VTab>
      <VTab value="web">Web</VTab>
    </VTabs>

    <VRow>
      <VCol
        v-for="p in filteredProjects"
        :key="p.id"
        cols=12
        md="6"
        lg="4"
      >
        <VCard
          class="mt-4"
        >
          <VImg height="200" :src="p.image" cover></VImg>
          <div class="d-flex">
            <div>
              <VCardTitle class="font-weight-bold">{{ p.nome }}</VCardTitle>
              <VCardSubtitle class="mb-2">{{ p.tipo }}</VCardSubtitle>
            </div>
            <VSpacer></VSpacer>
            <VCardActions>
              <VBtn
                :icon="show === p.id ? 'mdi-chevron-up' : 'mdi-chevron-down'"
                @click="toggleCard(p.id)"
              ></VBtn>
            </VCardActions>
          </div>
          <VExpandTransition>
            <div v-show="show === p.id">
              <VDivider></VDivider>
              <VCardText class="text-justify">
                {{ p.descricao }}
              </VCardText>
              <VCardText class="text-justify">
                {{ p.desenvolvedor }}
              </VCardText>
              <VCardActions>
                <VBtn variant="tonal" :href="p.link" target="_blank">Ver Projeto</VBtn>
              </VCardActions>
            </div>
          </VExpandTransition>
        </VCard>
      </VCol>
    </VRow>

  </div>
</template>

<style lang="scss" module="projects">

</style>
