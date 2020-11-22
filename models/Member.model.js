const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const memberSchema = new Schema ( 
    {
        "username": {type: String},
        "nickname": String,
        "email": {type: String, required: true, unique: true },
        "password": {type: String, required: true },
        "greeting": String, 
        "points": {type: Number, min: 0, default: 0 },
        "status": { type: String, enum: ['silver', 'gold', 'diamond' ] },
        "image": String
    }
)



const Member = mongoose.model('Member', memberSchema)

module.exports = Member;