const express = require('express')
const Pusher = require('pusher')
const app = express()

const PORT = process.env.PORT || 3000

app.listen(PORT, ()=> console.log(`server running in ${PORT}`))


const puhser = new Pusher({
    app_id : "1052208",
    key : "cde8f3b357ee1e82b96a",
    secret: "05ca0836f128112d50a8",
    cluster : "eu"
})

Pusher.trigger('my-channel', 'my-event', {'message' : 'hello am a new channel'})