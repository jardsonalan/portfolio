<script setup lang="ts">
import { routesPage } from '@/router/routesPage';
</script>

<template>
  <VNavigationDrawer
    expand-on-hover
    rail
  >
    <VList>
      <VListItem
        prepend-avatar="perfil.jpeg"
        title="Jardson Alan"
      ></VListItem>
    </VList>

    <VDivider></VDivider>

    <VList v-for="route in routesPage" :key="route.id" density="compact" nav>
      <VListItem :to="route.path" :prepend-icon="route.icon" :title="route.nome" :value="route.value"></VListItem>
    </VList>
  </VNavigationDrawer>
</template>

<style lang="scss" module>

</style>
