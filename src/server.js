const mongoose = require('mongoose')
const dotenv = require('dotenv')
const { Server } = require('socket.io')
const User = require('./models/user')
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

	const userId = socket.handshake.query.user_id

	if (userId != null && Boolean(userId)) {
		try {
			User.findByIdAndUpdate(userId, {
				socket_id: socket.id,
				status: 'Online',
			})
		} catch (e) {
			console.log(e)
		}
	}


  socket.on("friend_request", async (data) => {
    console.log(data.from)
    console.log(data.to)
    // const to = await User.findById(data.to).select("socket_id");
    // const from = await User.findById(data.from).select("socket_id");

    // emit event request received to recipient
    // io.to(to?.socket_id).emit("new_friend_request", {
    //   message: "New friend request received",
    // });
    // io.to(from?.socket_id).emit("request_sent", {
    //   message: "Request Sent successfully!",
    // });
  });

})


