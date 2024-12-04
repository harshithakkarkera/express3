const fs =require('fs')

const weatherdata =JSON.parse(fs.readFileSync(`${__dirname}/data/weather.json`))
module.exports= weatherdata