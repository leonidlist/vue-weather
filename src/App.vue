<template>
  <v-app light>
    <v-toolbar :class="theme">
      <v-toolbar-title class="white--text">Weather forecast</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon to="/">
        <v-icon class="white--text">home</v-icon>
      </v-btn>
      <v-btn icon to="/configure">
        <v-icon class="white--text">settings</v-icon>
      </v-btn>
    </v-toolbar>
    <v-content>
      <v-container fluid>
        <router-view></router-view>
      </v-container>  
    </v-content>
    <v-footer :class="theme">
    </v-footer>
  </v-app>
</template>

<script>
  export default {
    data () {
      return {
        
      }
    },
    computed: {
      theme() {
          return this.$store.getters.returnTheme
      }
    }
  }
</script>
