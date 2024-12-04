const fs =require('fs')
const weather= require('./weatherModel')

exports.getAllCity = (req, res)=>{
    console.log("Request received:", req.body); 
    res.status(200)
    .json(
        {
            status :"Success",
            results: weather.length,
            requestTime :req.requestTime,
            data :{
                weatherinfo :weather
            }
        }
    )
}

exports.getCityWeather = (req, res)=>{
    const cityname = req.params.name
    const weatherDetails = weather.find(wet=>wet.city.name ===cityname)
    if(!weatherDetails)
    {
        return res.status(404)
        .json({
            status :"City not found",
            desc: "City name is invalid please check again"
        })
    }
    res.status(202).json({
        status :"City found",
        data :{
            weatherDetails
        }
})
}
exports.addCity = (req,res)=>{
    
    const newCity =Object.assign(
        req.body
)


weather.push(newCity)
fs.writeFile(`${__dirname}/data/weather.json`,JSON.stringify(weather),(err)=>{
    res.status(201)
    .json(
        {
            status :"Successfully added",
            city: newCity
            
        }
    )   
})
}

exports.deleteCity = (req,res)=>{
    const cityname = req.params.name
    const index = weather.findIndex(wet=>wet.city.name ===cityname)
    if(index==-1)
        {
            return res.status(404)
            .json({
                status :"City not found",
                desc: "City name is invalid please check again"
            })
        }
        weather.splice(index,1)
        fs.writeFile(`${__dirname}/data/weather.json`,JSON.stringify(weather),(err)=>{
        res.status(200).json({
            status :"success",
            data :null
        }
    )
})
}
exports.getRaindetails = (req, res)=>{
    
    const weatherDetails = weather.filter(wet=>wet.weather[0].main ==="Rain")
    if(weatherDetails.length=== 0)
    {
        return res.status(404)
        .json({
            status :"City not found"
            
        })
    }
    
    const rainDetails = weatherDetails.map(wet =>wet.weather)
    res.status(202).json({
        status :"City found",
        RainDetails : rainDetails
        
})
}

exports.updateRainDetails = (req,res)=>{
    const cityname = req.params.name
    const index = weather.findIndex(wet =>wet.city.name === cityname)
    if(index=== -1)
        {
            return res.status(404)
            .json({
                status :"City not found"
                
            })
        }
    weather[index].weather[0].main ="No Rain";
    
    fs.writeFile(`${__dirname}/data/weather.json`,JSON.stringify(weather),(err)=>{
        res.status(203)
        .json(
            {
                status :"Successfully added",
                city: weather[index]
                
            }
        )   
    })
}