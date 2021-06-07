<template>
  <q-layout view="hHh Lpr lFf">
    <q-header elevated >
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />
        <q-toolbar-title>
          Cloud Admin
        </q-toolbar-title>


        <div>
          <q-btn size="11px" round>
            <q-avatar size="28px">
              <img src="https://i.pravatar.cc/150?img=65">
            </q-avatar>
            <q-menu anchor="bottom middle" self="top right">
              <q-item clickable>
                <q-item-section @click="menuLogout">Logout</q-item-section>
              </q-item>

            </q-menu>
          </q-btn>
        </div>



      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      :mini="!leftDrawerOpen || leftDrawerMiniState"
      :width="200"
      :breakpoint="500"
      bordered
      class="bg-grey-3"
    >
      <q-scroll-area class="fit">
        <q-list padding>
          <EssentialLink
            v-for="link in essentialLinks"
            :key="link.title"
            v-bind="link" />
        </q-list>
      </q-scroll-area>
    </q-drawer>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import EssentialLink from 'components/EssentialLink.vue'

const linksList = [
  {
    title: 'Reports',
    icon: 'school',
    link: 'reports'
  },
  {
    title: 'Licences',
    icon: 'code',
    link: 'licences'
  },
  {
    title: 'Customers',
    icon: 'chat',
    link: 'customers'
  },
  {
    title: 'Pets',
    icon: 'android',
    link: 'pets'
  }
];

import { Vue, Options } from 'vue-class-component'
import { logout } from 'src/boot/msal'
@Options({
  components: { EssentialLink }
})
export default class MainLayout extends Vue {
  leftDrawerOpen = true;
  leftDrawerMiniState = false
  essentialLinks = linksList;
  toggleLeftDrawer () {
    this.leftDrawerMiniState = !this.leftDrawerMiniState
  }

  menuLogout () {
    logout()
  }

}
</script>
