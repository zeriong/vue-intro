<template>
  <v-app>
    <AppHeader/>
    <AppAsideBar/>
    <router-view/>
  </v-app>
</template>

<script>
import AppHeader from "@/modules/common/components/AppHeader.vue";
import AppAsideBar from "@/modules/common/components/AppAsideBar.vue";

export default {
  name: 'App',

  components: {
    AppHeader,
    AppAsideBar,
  },

  data: () => ({
    //
  }),
}
</script>
