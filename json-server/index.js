const fs = require('fs')
const jsonServer = require('json-server')
const path = require('path')
const https = require('https')
const http = require('http')

const options = {
    key: fs.readFileSync(path.resolve(__dirname, '/etc/letsencrypt/live/yocommon.com/privkey.pem')),
    cert: fs.readFileSync(
        path.resolve(__dirname, '/etc/letsencrypt/live/yocommon.com/fullchain.pem'),
    ),
}

const server = jsonServer.create()

const router = jsonServer.router(path.resolve(__dirname, 'db.json'))

server.use(jsonServer.defaults({}))
server.use(jsonServer.bodyParser)

server.post('/login', (req, res) => {
    try {
        const { username, password } = req.body
        const db = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'db.json'), 'UTF-8'))
        const { users = [] } = db

        const userFromBd = users.find(
            (user) => user.username === username && user.password === password,
        )

        if (userFromBd) {
            delete userFromBd.password
            return res.json(userFromBd)
        }

        return res.status(403).json({ message: 'User not found' })
    } catch (e) {
        console.log(e)
        return res.status(500).json({ message: e.message })
    }
})

server.get('/technologies', (req, res) => {
    try {
        const db = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'db.json'), 'UTF-8'))
        const { technologies = [] } = db

        if (technologies.length) {
            return res.json(technologies)
        }
    } catch (e) {
        console.log(e)
        return res.status(500).json({ message: e.message })
    }
})

server.get('/about', (req, res) => {
    try {
        const db = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'db.json'), 'UTF-8'))
        const { about = [] } = db

        if (about.length) {
            return res.json(about)
        }
    } catch (e) {
        console.log(e)
        return res.status(500).json({ message: e.message })
    }
})

server.use((req, res, next) => {
    console.log('req:', req)
    if (!req.headers.authorization) {
        return res.status(403).json({ message: 'AUTH ERROR' })
    }

    next()
})

server.use(router)

const PORT = 8443
const HTTP_PORT = 8000

// const httpServer = http.createServer(server)
const httpsServer = https.createServer(options, server)

// httpServer.listen(HTTP_PORT, () => {
//     console.log(`server is running on ${HTTP_PORT} port`)
// })

httpsServer.listen(PORT, () => {
    console.log(`server is running on ${PORT} port`)
})
