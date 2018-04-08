<template>
  <v-container>
      <v-layout>
          <v-flex xs6>
              <v-form>
                <v-text-field required :rules="[v => !!v || 'Вы должны ввести город, чтобы продолжить!']" name="inputCity" label="Input your city" :color="theme" v-model="city" :error="isError"></v-text-field>
                <v-btn icon class="mt-3" @click="submit">
                    <v-icon>done</v-icon>
                </v-btn>
              </v-form>
          </v-flex>
      </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
      return {
          city: '',
          isError: false,
      }
  },
  methods: {
      submit() {
          if(this.city != ''){
              this.isError = false
              this.$store.commit('setCity', this.city)
              this.$http.get('http://api.openweathermap.org/data/2.5/weather?q='+this.$store.state.activeCity+'&appid='+this.$store.state.apiKey)
                .then((Response) => {
                    console.log(Response.body)
                    this.$store.commit('temperatureSet', Response.body.main.temp)
                    this.$store.commit('humiditySet', Response.body.main.humidity)
                    this.$store.commit('pressureSet', Response.body.main.pressure)
                    this.$store.commit('weatherSet', Response.body.weather[0])
                    this.$store.commit('themeSet', Response.body.weather[0].main)
                })
              this.city = ''
              this.$router.replace('/weather')
          }
          else{
              this.isError = true
          }
      }
  },
  computed: {
    theme() {
        return this.$store.getters.returnTheme
    }
  }
}
</script>