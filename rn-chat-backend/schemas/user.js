const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    // username: { type: String, unique: true },
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
}, {
    collection: 'users',
})

mongoose.model('users', UserSchema)