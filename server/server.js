const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')
const path = require('path')
const flash = require('connect-flash')
const session = require('express-session')

const app = express()

app.use(express.json({ limit: "30mb", extended: true }))
app.use(express.urlencoded({ limit: "30mb", extended: true }))

mongoose.set('strictQuery', true)

app.use(session({
    secret: 'secret',
    cookie: { maxAge: 600000 },
    resave: false,
    saveUninitialized: false
}))
app.use(flash())

app.set('view engine', 'ejs')
app.set('views', 'views/admin')

app.use(express.static(path.join(__dirname, 'public/admin')))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(cors())

// -------------------- Routes --------------------

const adminServiceRoute = require('./Router/adminRouter/adminServiceRoute')             // For Admin
app.use('/admin', adminServiceRoute)

const serviceRoute = require('./Router/serviceRoute')                                   // For ReactJS API
app.use('/api', serviceRoute)

const userRoute = require('./Router/UserRouter/userRoute')
app.use('/api', userRoute)



// -------------------- Routes --------------------

const dbcon = "mongodb+srv://dionjamessmith:W2nXCB1pFcf9YpNx@cluster0.apg8y7z.mongodb.net/cure-and-care"
const port = process.env.PORT || 3002

mongoose.connect(dbcon, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        app.listen(port, () => {
            console.log(`Database & Server connected. Running port at http://localhost:${port}/admin`)
        })
    }).catch(error => {
        console.log(error)
    })