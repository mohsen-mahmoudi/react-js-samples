const express = require('express')
const cors = require('cors')
const bodyParse = require('body-parser')

const app = express()

app.use(cors())
app.use(bodyParse.json())
app.use(bodyParse.urlencoded({ extended: false }))

app.get('/', (req, res) => {
    //res.send('salam')
    res.json({
        title: 'This is a test application with node',
    })
})

const user = {
    name: 'Mohsen',
    family: 'Mahmoudi',
    username: 'mohsen',
    password: '123'
}

const token = '23wfwkjt342r3249r823u3fehwjrf823ur8923u2'

app.post('/api/login', (req, res) => {
    const { username, password } = req.body
    if (username === user.username && password === user.password) {
        res.json({ token: token })
    } else {
        res.status(401)
        res.send('username or password is incorrect !')
    }
})

app.get('/api/user', (req, res) => {
    const reqToken = req.header('token')
    if (reqToken === token) {
        res.json({ ...user, token })
    } else {
        res.status(403)
        res.send('token is not valid !')
    }
})

app.listen(3001, () => {
    console.log('app is running')
})