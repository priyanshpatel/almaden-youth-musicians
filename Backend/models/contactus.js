const mongoose = require('mongoose')
let Schema = mongoose.Schema;

let contactSchema = new Schema({
    firstName: String,
    lastName: String,
    email: String,
    instrument: String,
    momsNameTelEmail: String,
    schoolGrade: String,
    teachersNameEmail: String
}
, {
    collection: 'contact',
    versionKey: false
}
)


module.exports = mongoose.model('contactSchema', contactSchema)