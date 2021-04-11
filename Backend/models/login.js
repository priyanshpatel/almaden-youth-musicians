const mongoose = require('mongoose')
let Schema = mongoose.Schema;

let loginSchema = new Schema({
    firstName: String,
    lastName: String,
    email: String,
    image: String
}
, {
    collection: 'login',
    versionKey: false,
    timestamps: true
}
)


module.exports = mongoose.model('loginSchema', loginSchema)