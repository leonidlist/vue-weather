<template>
  <!-- <v-parallax src="https://d2v9y0dukr6mq2.cloudfront.net/video/thumbnail/Esxjvv7/heavy-snow-background-falling_vjrq8gxbg__F0000.png">
    <v-layout column align-center justify-center height="400">
      <h1>{{city}}, {{weather.main}}</h1>
      <h2>{{weather.description}}</h2>
      <p>The temperature now is: {{temp}}</p>
      <p>The humidity now is: {{hum}} %</p>
      <p>The pressure now is: {{pressure}} hPa</p>
    </v-layout>
  </v-parallax> -->
  <v-layout>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-card-media class="white--text" height="300px" :src="weatherImg">
          <v-container fill-height fluid>
            <v-layout fill-height>
              <v-flex xs12 align-end flexbox>
                <span class="headline">{{city}}, {{temp}}ºC</span><br>
                <span class="headline">{{weather.main}}</span>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card-media>
        <v-card-title>
          <div>
            <span class="grey--text">{{weather.description}}</span><br>
            <span>Humidity: {{hum}}%</span><br>
            <span>Pressure: {{pressure}}hPa</span>
          </div>
        </v-card-title>
        <v-card-actions>
          <v-btn flat color="blue-grey darken-4">Share</v-btn>
          <v-btn flat color="blue-grey darken-4">Explore</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data() {
    return{
      city: this.$store.getters.returnCity,
    }
  },
  computed: {
    temp() {
      return Math.round(this.$store.getters.returnTemperature - 273.15) 
    },
    hum() {
      return this.$store.getters.returnHumidity
    },
    pressure() {
      return this.$store.getters.returnPressure
    },
    weather() {
      return this.$store.getters.returnWeather
    },
    weatherImg() {
      return this.$store.getters.returnWeatherImg
    }
  },
  methods: {
    liveUpdate() {
      this.$http.get('http://api.openweathermap.org/data/2.5/weather?q='+this.$store.state.activeCity+'&appid='+this.$store.state.apiKey)
        .then((Response) => {
          console.log(Response.body)
          this.$store.commit('temperatureSet', Response.body.main.temp)
          this.$store.commit('humiditySet', Response.body.main.humidity)
          this.$store.commit('pressureSet', Response.body.main.pressure)
          this.$store.commit('weatherSet', Response.body.weather[0])
      })
    }
  }
}
</script>
  
<style>

</style>


