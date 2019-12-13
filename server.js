const express = require('express')
const connectDB = require('./config/db')
const path = require('cors')


const app = express()
// connectDB()
app.use(express.json({extended: false}))

app.get('/', (req,res)=> {
    res.send("API Running...")
})



// //SERVE STATIC ASSET
// if(process.env.NODE_ENV === 'production') {
//     //set static
//     app.use(express.static('client/build'))
//     //serve
//     app.get('*', (req, res) => {
//         res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
//     })
// }

const PORT = process.env.PORT || 3001
app.listen(PORT, ()=> console.log(`Listening on port: ${PORT}`))

