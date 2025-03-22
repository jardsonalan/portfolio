<script setup lang="ts">
import SmallHeaderBar from './components/Header/SmallHeaderBar.vue';
import LargeHeaderBar from './components/Header/LargeHeaderBar.vue';

import { provide, ref } from 'vue';

const isDrawer = ref(false)

provide('isDrawer', isDrawer)
</script>

<template>
  <VApp>
    <VCard flat>
      <VLayout>
        <LargeHeaderBar class="d-none d-lg-inline"/>
        <SmallHeaderBar class="d-inline d-lg-none" v-model="isDrawer"/>
        <VMain>
          <RouterView />
        </VMain>
      </VLayout>
    </VCard>
    <VBtn class="d-inline d-lg-none position-fixed right-0 ma-2" style="width: 35px; height: 35px;" @click.stop="isDrawer = !isDrawer" :icon="isDrawer ? 'mdi-close' : 'mdi-menu'"></VBtn>
  </VApp>
</template>

<style lang="scss" module>
</style>
