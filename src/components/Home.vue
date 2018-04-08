<template>
    <v-container fluid>
        <v-layout>
            <v-flex xs4 class="pa-1">
                <v-card>
                    <v-card-media src="https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX6447526.jpg" height="300px"></v-card-media>
                    <v-card-title primary-title>
                        <div>
                            <h1>Configure your app</h1>
                            <p>I see, that your city is not configured, so let's fix it!</p>
                        </div>
                    </v-card-title>
                    <v-card-actions>
                        <v-btn flat :color="theme" to="/configure">Configure</v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex>
            <v-flex xs4 class="pa-1">
                <v-card>
                    <v-card-media src="https://s-media-cache-ak0.pinimg.com/originals/f2/0f/e1/f20fe163ecff3c10d4001812baa3bd5a.jpg" height="300px"></v-card-media>
                    <v-card-title primary-title>
                        <div>
                            <h1>We are launched!</h1>
                            <div>If u see some errors/troubles etc. please contact us</div>
                        </div>
                    </v-card-title>
                    <v-card-actions>
                        <v-btn flat :color="theme">Share</v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
  data() {
      return{
          
      }
  },
  computed: {
    theme() {
        return this.$store.getters.returnTheme
    }
  }
}
</script>

<style scoped>

</style>


