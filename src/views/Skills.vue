<!-- eslint-disable vue/multi-word-component-names -->
<script lang="ts" setup>
const languages = [
  { id: 1, nome: 'HTML5', icon: 'mdi-language-html5', size: 'x-large' },
  { id: 2, nome: 'CSS3', icon: 'mdi-language-css3', size: 'x-large' },
  { id: 3, nome: 'Vue', icon: 'mdi-vuejs', size: 'x-large' },
  { id: 4, nome: 'JavaScript', icon: 'mdi-language-javascript', size: 'x-large' },
  { id: 5, nome: 'TypeScript', icon: 'mdi-language-typescript', size: 'x-large' },
  { id: 6, nome: 'Python', icon: 'mdi-language-python', size: 'x-large' },
]
</script>

<template>
  <VContainer class="h-screen overflow-y-auto">
    <h1 class="text-center">My <span class="span-color">Skills</span></h1>
    <VRow class="my-4">
      <VCol cols="6" sm="6" md="4" lg="3" v-for="skill in languages" :key="skill.id">
        <VHover v-slot="{ isHovering, props }">
          <VCard
            v-bind="props"
            class="d-flex flex-column justify-center align-center pa-4" height="120">
            <VExpandTransition>
              <div
                v-if="isHovering"
                class="d-flex transition-fast-in-fast-out v-card--reveal text-h5 font-weight-bold"
                style="height: 100%;"
              >
                {{ skill.nome }}
              </div>
            </VExpandTransition>
            <VIcon :icon="skill.icon" :size="skill.size" :class="isHovering ? 'd-none' : undefined"></VIcon>
          </VCard>
        </VHover>
      </VCol>
    </VRow>
  </VContainer>
</template>

<style lang="scss" module="skills">
</style>
