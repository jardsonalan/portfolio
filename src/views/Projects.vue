<!-- eslint-disable vue/multi-word-component-names -->
<script lang="ts" setup>
import { ref, computed } from 'vue';

const tab = ref('all')
const show = ref<number|null>(null)

const project = [
  { id: 1, value: 'app', image: '/app_motorcycle.png', nome: 'MotoBuscApp', link: 'https://github.com/jardsonalan/App_Motorcycle' },
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
              <VCardSubtitle class="mb-2">Aplicativo Mobile</VCardSubtitle>
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
                O MotoBuscApp foi um aplicativo desenvolvido como projeto de Trabalho de Conclusão de Curso (TCC), do curso Técnico em Informática do Instituto Federal do Rio Grande do Norte (IFRN). O objetivo principal do desenvolvimento do aplicativo foi facilitar a solicitação de serviços de mototaxistas para turistas e moradores da cidade de Currais Novos, RN.
              </VCardText>
              <VCardText class="text-justify">
                Desenvolvido por: Jardson Alan e Ian Galvão
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
