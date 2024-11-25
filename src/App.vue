<script setup lang="ts">
import SmallHeaderBar from './components/SmallHeaderBar.vue';
import LargeHeaderBar from './components/LargeHeaderBar.vue';
import Home from './views/Home.vue';

import { provide, ref } from 'vue';

const isDrawer = ref(null)

provide('isDrawer', isDrawer)
</script>

<template>
  <VApp>
    <VCard>
      <VLayout>
        <LargeHeaderBar class="d-none d-md-inline d-lg-inline"/>
        <SmallHeaderBar class="d-inline d-md-none d-lg-none" v-model="isDrawer"/>
        <VMain>
          <Home />
        </VMain>
      </VLayout>
    </VCard>
    <VBtn class="d-sx-inline d-md-none d-lg-none position-absolute right-0 ma-2" style="width: 30px; height: 30px;" @click.stop="isDrawer = !isDrawer" icon="mdi-menu"></VBtn>
    <RouterView />
  </VApp>
</template>

<style lang="scss" module>
</style>
