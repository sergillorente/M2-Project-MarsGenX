const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema (
    {
        "title": String,
        "text": String,
        "image": String,
        "comments": [
            {
                member: { type: mongoose.SchemaTypes.ObjectId, ref: "Member" },
                comment: String,
            }
        ],
        "creator": { type: mongoose.SchemaTypes.ObjectId, ref: "Member" },
        "donations":  [ { type: mongoose.SchemaTypes.ObjectId, ref: "Member" } ]
    }
)
    
    
    
const Post = mongoose.model('Post', postSchema)
    
module.exports = Post;