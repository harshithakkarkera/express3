const express=require('express')
const weatherRouter = require('./routes/weatherRoutes');
const app = express();

app.use(express.json())
app.use("/api/v1/weather",weatherRouter)

module.exports= app