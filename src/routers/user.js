const express = require('express')
// const multer = require('multer')
// const sharp = require('sharp')
const auth = require('../middleware/auth')
const User = require('../models/user')
const router = new express.Router()

// Create user
router.post('/users', async (req, res) => {
    const user = new User(req.body)

    try {
        await user.save()
        const token = await user.generateAuthToken()
        res.status(201).send({ user, token })

    } catch (e) {
        res.status(400).send(e)
        console.log(e)
    }
})

// Login route
router.post('/users/login', async (req, res) => {
    try {
        const user = await User.findByCredentials(req.body.email, req.body.password)
        const token = await user.generateAuthToken()

        res.send({ user: user, token })
    } catch (e) {
        console.log(e)
        res.status(400).send()
    }
})

// Log out route
router.post('/users/logout', auth, async (req, res) => {
    try {
        req.user.tokens = req.user.tokens.filter((token) => {
            return token.token !== req.token
        })
        await req.user.save()

        res.send()
    } catch (e) {
        res.status(500).send()
    }
})

module.exports = router