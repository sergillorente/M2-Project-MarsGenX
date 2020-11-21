const posts = [
    {
        "title": String,
        "text": String,
        "likes": [ { type: mongoose.SchemaTypes.ObjectId, ref: "Member" }  ],
        "image": String,
        "comments": [
            {
                member: { type: mongoose.SchemaTypes.ObjectId, ref: "Member" },
                comment: String
            }
        ],
        "creator": { type: mongoose.SchemaTypes.ObjectId, ref: "Member" },
        "donations":  [ { type: mongoose.SchemaTypes.ObjectId, ref: "Member" } ]
    },
    {
        "title": String,
        "text": String,
        "likes": [ { type: mongoose.SchemaTypes.ObjectId, ref: "Member" }  ],
        "image": String,
        "shares": [ { type: mongoose.SchemaTypes.ObjectId, ref: "Member" }  ],
        "comments": [
            {
                member: { type: mongoose.SchemaTypes.ObjectId, ref: "Member" },
                comment: String
            }
        ],
        "creator": { type: mongoose.SchemaTypes.ObjectId, ref: "Member" },
        "donations":  [ { type: mongoose.SchemaTypes.ObjectId, ref: "Member" } ]
    },
    {
        "title": String,
        "text": String,
        "likes": [ { type: mongoose.SchemaTypes.ObjectId, ref: "Member" }  ],
        "image": String,
        "shares": [ { type: mongoose.SchemaTypes.ObjectId, ref: "Member" }  ],
        "comments": [
            {
                member: { type: mongoose.SchemaTypes.ObjectId, ref: "Member" },
                comment: String
            }
        ],
        "creator": { type: mongoose.SchemaTypes.ObjectId, ref: "Member" },
        "donations":  [ { type: mongoose.SchemaTypes.ObjectId, ref: "Member" } ]
    },
    {
        "title": String,
        "text": String,
        "likes": [ { type: mongoose.SchemaTypes.ObjectId, ref: "Member" }  ],
        "image": String,
        "shares": [ { type: mongoose.SchemaTypes.ObjectId, ref: "Member" }  ],
        "comments": [
            {
                member: { type: mongoose.SchemaTypes.ObjectId, ref: "Member" },
                comment: String
            }
        ],
        "creator": { type: mongoose.SchemaTypes.ObjectId, ref: "Member" },
        "donations":  [ { type: mongoose.SchemaTypes.ObjectId, ref: "Member" } ]
    },
    {
        "title": String,
        "text": String,
        "likes": [ { type: mongoose.SchemaTypes.ObjectId, ref: "Member" }  ],
        "image": String,
        "shares": [ { type: mongoose.SchemaTypes.ObjectId, ref: "Member" }  ],
        "comments": [
            {
                member: { type: mongoose.SchemaTypes.ObjectId, ref: "Member" },
                comment: String
            }
        ],
        "creator": { type: mongoose.SchemaTypes.ObjectId, ref: "Member" },
        "donations":  [ { type: mongoose.SchemaTypes.ObjectId, ref: "Member" } ]
    },
    {
        "title": String,
        "text": String,
        "likes": [ { type: mongoose.SchemaTypes.ObjectId, ref: "Member" }  ],
        "image": String,
        "shares": [ { type: mongoose.SchemaTypes.ObjectId, ref: "Member" }  ],
        "comments": [
            {
                member: { type: mongoose.SchemaTypes.ObjectId, ref: "Member" },
                comment: String
            }
        ],
        "creator": { type: mongoose.SchemaTypes.ObjectId, ref: "Member" },
        "donations":  [ { type: mongoose.SchemaTypes.ObjectId, ref: "Member" } ]
    },
    {
        "title": String,
        "text": String,
        "likes": [ { type: mongoose.SchemaTypes.ObjectId, ref: "Member" }  ],
        "image": String,
        "shares": [ { type: mongoose.SchemaTypes.ObjectId, ref: "Member" }  ],
        "comments": [
            {
                member: { type: mongoose.SchemaTypes.ObjectId, ref: "Member" },
                comment: String
            }
        ],
        "creator": { type: mongoose.SchemaTypes.ObjectId, ref: "Member" },
        "donations":  [ { type: mongoose.SchemaTypes.ObjectId, ref: "Member" } ]
    },
    {
        "title": String,
        "text": String,
        "likes": [ { type: mongoose.SchemaTypes.ObjectId, ref: "Member" }  ],
        "image": String,
        "shares": [ { type: mongoose.SchemaTypes.ObjectId, ref: "Member" }  ],
        "comments": [
            {
                member: { type: mongoose.SchemaTypes.ObjectId, ref: "Member" },
                comment: String
            }
        ],
        "creator": { type: mongoose.SchemaTypes.ObjectId, ref: "Member" },
        "donations":  [ { type: mongoose.SchemaTypes.ObjectId, ref: "Member" } ]
    },
    {
        "title": String,
        "text": String,
        "likes": [ { type: mongoose.SchemaTypes.ObjectId, ref: "Member" }  ],
        "image": String,
        "shares": [ { type: mongoose.SchemaTypes.ObjectId, ref: "Member" }  ],
        "comments": [
            {
                member: { type: mongoose.SchemaTypes.ObjectId, ref: "Member" },
                comment: String
            }
        ],
        "creator": { type: mongoose.SchemaTypes.ObjectId, ref: "Member" },
        "donations":  [ { type: mongoose.SchemaTypes.ObjectId, ref: "Member" } ]
    },
    {
        "title": String,
        "text": String,
        "likes": [ { type: mongoose.SchemaTypes.ObjectId, ref: "Member" }  ],
        "image": String,
        "shares": [ { type: mongoose.SchemaTypes.ObjectId, ref: "Member" }  ],
        "comments": [
            {
                member: { type: mongoose.SchemaTypes.ObjectId, ref: "Member" },
                comment: String
            }
        ],
        "creator": { type: mongoose.SchemaTypes.ObjectId, ref: "Member" },
        "donations":  [ { type: mongoose.SchemaTypes.ObjectId, ref: "Member" } ]
    }
]