<template>
  <q-layout view="hHh lpR fFf">

    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />

        <q-toolbar-title>
          <q-avatar>
            <img alt="Quasar logo" src="./img/nosotros/logo.png">
          </q-avatar>
          Barrio Fast
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" side="left" overlay behavior="mobile" elevated>
      <br>
    <q-btn to="/hamburguesas">Hamburguesas</q-btn><br><br>
    <q-btn to="/perros">perros</q-btn><br><br>
    <q-btn to="/pizzas">pizzas</q-btn><br><br>
    <q-btn to="/bebidas">bebidas</q-btn><br><br>
    <q-btn to="/postres">postres</q-btn><br><br>
    <q-btn to="/nosotros">nosotros</q-btn><br><br>
    <q-btn to="/">promociones</q-btn>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script setup>
import { ref } from 'vue'

const leftDrawerOpen = ref(false)
function toggleLeftDrawer () {
  leftDrawerOpen.value = !leftDrawerOpen.value
}
</script>