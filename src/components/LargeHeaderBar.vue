<script setup lang="ts">

</script>

<template>
  <VNavigationDrawer
    class="bg-grey-lighten-3"
    expand-on-hover
    rail
  >
    <VList>
      <VListItem
        prepend-avatar="/public/perfil.jpeg"
        title="Jardson Alan"
      ></VListItem>
    </VList>

    <VDivider></VDivider>

    <VList density="compact" nav>
      <VListItem prepend-icon="mdi-home" title="Home" value="home"></VListItem>
      <VListItem prepend-icon="mdi-account" title="About" value="about"></VListItem>
      <VListItem prepend-icon="mdi-list-box" title="Skills" value="skills"></VListItem>
      <VListItem prepend-icon="mdi-application-brackets" title="Projects" value="projects"></VListItem>
    </VList>
  </VNavigationDrawer>
</template>

<style lang="scss" module>

</style>
