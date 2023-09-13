const mongoose = require('mongoose')
const dotenv = require('dotenv')
const { Server } = require('socket.io')
// const User = require('./models/user')
dotenv.config()

const app = require('./app')
const http = require('http')
const server = http.createServer(app)

const io = new Server(server, {
	cors: {
		origin: '*',
		methods: ['GET', 'POST'],
	},
})

mongoose.set('strictQuery', false)
const { MONGODB_HOST_URI } = process.env
const PORT = process.env.PORT || 8080

mongoose.connect(MONGODB_HOST_URI)
console.log('Database connection successful')

server.listen(PORT, () => {
	console.log(`App running on port ${PORT} ...`)
})

io.on('connection', async socket => {
	const userId = socket.handshake.query.id

	console.log(`User connected ${socket.id}`)

	if (userId != null && Boolean(userId)) {
		try {
			console.log(userId)
			// console.log(socket.id)
			// User.findByIdAndUpdate(userId, {
			// 	socket_id: socket.id,
			// 	status: 'Online',
			// })
		} catch (e) {
			console.log(e)
		}
	}

	socket.on('message', async data => {
		console.log(data)
		io.send(data)
	})
})
