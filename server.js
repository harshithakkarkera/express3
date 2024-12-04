const app= require('./app')
const dotenv = require('dotenv')

dotenv.config({path :"./config.env"})

const port = process.env.port || 3000

app.listen(port,()=>{
    console.log(`Express app is running in ${port}`)
})