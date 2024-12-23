const express=require('express')
const weatherCont =require('./../weatherController')
const authMiddleware =require("../middleware/authentication")

const router =express.Router()
router.route("/").get(weatherCont.getAllCity).post(weatherCont.addCity)
router.route("/raindetails").get(weatherCont.getRaindetails)
router.route("/add").post(weatherCont.add)
router.route("/getcitys").get(authMiddleware.authenticateToken,weatherCont.getdetails)
router.route("/city/:name").get(weatherCont.getCityWeather).delete(weatherCont.deleteCity).put(weatherCont.updateRainDetails);
module.exports= router
