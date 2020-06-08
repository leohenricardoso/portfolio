<template>
<q-layout view="hHh lpR fff">

    <!-- Desktop -->
    <q-header class="shadow-10"  >
    </q-header>
    <!-- Mobile Drawer  -->
    <q-drawer v-model="drawer" side="left" bordered>
      <q-scroll-area class="fit">
        <q-list padding class="menu-list">
          <q-item active clickable v-ripple to="/">
            <q-item-section class="text-uppercase">Início</q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>
    </q-drawer>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'MainLayout'
}
</script>
