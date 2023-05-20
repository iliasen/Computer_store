const express = require('express')
const mongoose = require('mongoose')
const router = require('./routes/index')
const cors = require('cors')//запросы с браузера
const fileUpload = require('express-fileupload')
const path = require("path");
const errorHandler = require('./middleware/ErrorHandlingMiddleware')

const PORT = process.env.PORT || 5000

const app = express()


app.use(cors())
app.use(express.json())
app.use(express.static(path.resolve(__dirname,"static")))
app.use(fileUpload({}))
app.use("/api", router)

app.use(errorHandler)

const start = async () => {
    try {
        await mongoose.connect(`mongodb://127.0.0.1:27017/computer_store`)
        app.listen(PORT, () => console.log(`server started on port ${PORT}`))
    } catch (e) {
        console.log(e)
    }
}
console.log('refresh')

start()

