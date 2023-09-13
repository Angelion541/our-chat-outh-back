const mongoose = require('mongoose')
const dotenv = require('dotenv')
// const { Server } = require('socket.io')
// const ws = require('ws')
// const User = require('./models/user')
dotenv.config()

const app = require('./app')
const http = require('http')
const server = http.createServer(app)

// const io = new Server(server, {
// 	cors: {
// 		origin: '*',
// 		methods: ['GET', 'POST'],
// 	},
// })

mongoose.set('strictQuery', false)
const { MONGODB_HOST_URI } = process.env
const PORT = process.env.PORT || 8080

mongoose.connect(MONGODB_HOST_URI)
console.log('Database connection successful')

server.listen(PORT, () => {
	console.log(`App running on port ${PORT} ...`)
})
// const wss = new ws.Server(
// 	{
// 		port: 8585,
// 	},
// 	() => console.log(`Server started on 8585`)
// )

// wss.on('connection', function connection(ws) {
// 	ws.on('message', function (message) {
// 		message = JSON.parse(message)
// 		console.log(message)
// 		switch (message.event) {
// 			case 'message':
// 				broadcastMessage(message)
// 				break
// 			case 'connection':
// 				broadcastMessage(message)
// 				break
// 		}
// 	})
// })

// function broadcastMessage(message, id) {
// 	wss.clients.forEach(client => {
// 		client.send(JSON.stringify(message))
// 	})
// }

// io.on('connection', async socket => {
// 	const userId = socket.handshake.query.id

// 	console.log(`User connected ${socket.id}`)

// 	if (userId != null && Boolean(userId)) {
// 		try {
// 			console.log(userId)
// 			// console.log(socket.id)
// 			// User.findByIdAndUpdate(userId, {
// 			// 	socket_id: socket.id,
// 			// 	status: 'Online',
// 			// })
// 		} catch (e) {
// 			console.log(e)
// 		}
// 	}

// 	socket.on('message', async data => {
// 		console.log(data)
// 		io.send(data)
// 	})
// })
