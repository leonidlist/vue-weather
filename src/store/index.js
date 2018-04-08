import Vue from 'vue'
import Vuex from 'vuex'
// import * as firebase from 'firebase'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        activeCity: '',
        apiKey: '020b5dd17c97825eece344375408bc6d',
        temperature: '',
        humidity: '',
        pressure: '',
        weather: [],
        theme: 'pink darken-4',
        weatherImg: 'https://media.istockphoto.com/vectors/weather-background-sky-seamless-pattern-hand-drawn-doodle-sun-clouds-vector-id519490522'
    },
    mutations: {
        setCity(state, city) {
            state.activeCity = city;
        },
        temperatureSet(state,temp) {
            state.temperature = temp
        },
        humiditySet(state, hum) {
            state.humidity = hum
        },
        pressureSet(state, pre) {
            state.pressure = pre
        },
        weatherSet(state, weather) {
            console.log('Weather setted')
            state.weather = weather
        },
        themeSet(state, weather) {
            if(weather == 'Clouds'){
                state.theme = 'grey darken-3'
                state.weatherImg = 'https://cdn.pixabay.com/photo/2016/01/09/08/52/clouds-1129963_1280.jpg'
            }
            else if(weather == 'Clear'){
                state.theme = 'light-blue darken-1'
                state.weatherImg = 'https://wallpapersite.com/images/wallpapers/sunset-1600x900-clear-sky-hd-5168.jpg'
            }
            else if(weather == 'Snow'){
                state.theme = 'indigo darken-4'
                state.weatherImg = 'http://fbrushes.com/media/vectors/snowfall.jpg'
            }
            else if(weather == 'Rain') {
                state.theme = 'blue-grey darken-4',
                state.weatherImg = 'http://www.wallpaperawesome.com/wallpapers-awesome/wallpapers-weather-clouds-tornado-rain-cyclone-flashlights-awesome/wallpaper-drops-of-rain-from-sky-weather.jpg'
            }
            else if(weather == 'Haze') {
                state.theme = 'grey darken-1'
                state.weatherImg = 'https://c.pxhere.com/photos/8c/ee/photo-48243.jpg!d'
            }
        }
    },
    getters: {
        returnCity(state){
            return state.activeCity
        },
        returnTemperature(state) {
            return state.temperature
        },
        returnHumidity(state) {
            return state.humidity
        },
        returnPressure(state) {
            return state.pressure
        },
        returnWeather(state) {
            return state.weather
        },
        returnTheme(state) {
            return state.theme
            console.log('Theme returned!!!!!')
        },
        returnWeatherImg(state) {
            return state.weatherImg
        }
        
    }
})