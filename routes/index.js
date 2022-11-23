const express = rewuire('express')
const router = express.Router()

//desc Login/Landing page
//rout GET/
router.get('/',(req, res) => {
    res.send('Login')
})


//desc dashboard
//rout GET/ dashboard
router.get('/',(req, res) => {
    res.send('Dashborad)
})

module.exports = router