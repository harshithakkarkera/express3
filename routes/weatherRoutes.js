const express=require('express')
const weatherCont =require('./../weatherController')

const router =express.Router()
router.route("/").get(weatherCont.getAllCity).post(weatherCont.addCity)
router.route("/raindetails").get(weatherCont.getRaindetails)
router.route("/city/:name").get(weatherCont.getCityWeather).delete(weatherCont.deleteCity).put(weatherCont.updateRainDetails);
module.exports= router