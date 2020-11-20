const members = [
    {
        "username": {type: String, required: true, unique: true },
        "nickname": String,
        "email": {type: String, required: true, unique: true },
        "password": {type: String, required: true, unique: true },
        "greeting": String, 
        "points": {type: Number, min: 0, default: 0 },
        "status": { type: String, enum: ['silver', 'gold', 'diamond' ] },
        "posts": [  { type: mongoose.SchemaTypes.ObjectId, ref: 'Post' }  ],
        "image": String
    },
    {
        "username": {type: String, required: true, unique: true },
        "nickname": String,
        "email": {type: String, required: true, unique: true },
        "password": {type: String, required: true, unique: true },
        "greeting": String, 
        "points": {type: Number, min: 0, default: 0 },
        "status": { type: String, enum: ['silver', 'gold', 'diamond' ] },
        "posts": [  { type: mongoose.SchemaTypes.ObjectId, ref: 'Post' }  ],
        "image": String
    },
    {
        "username": {type: String, required: true, unique: true },
        "nickname": String,
        "email": {type: String, required: true, unique: true },
        "password": {type: String, required: true, unique: true },
        "greeting": String, 
        "points": {type: Number, min: 0, default: 0 },
        "status": { type: String, enum: ['silver', 'gold', 'diamond' ] },
        "posts": [  { type: mongoose.SchemaTypes.ObjectId, ref: 'Post' }  ],
        "image": String
    },
    {
        "username": {type: String, required: true, unique: true },
        "nickname": String,
        "email": {type: String, required: true, unique: true },
        "password": {type: String, required: true, unique: true },
        "greeting": String, 
        "points": {type: Number, min: 0, default: 0 },
        "status": { type: String, enum: ['silver', 'gold', 'diamond' ] },
        "posts": [  { type: mongoose.SchemaTypes.ObjectId, ref: 'Post' }  ],
        "image": String
    },
    {
        "username": {type: String, required: true, unique: true },
        "nickname": String,
        "email": {type: String, required: true, unique: true },
        "password": {type: String, required: true, unique: true },
        "greeting": String, 
        "points": {type: Number, min: 0, default: 0 },
        "status": { type: String, enum: ['silver', 'gold', 'diamond' ] },
        "posts": [  { type: mongoose.SchemaTypes.ObjectId, ref: 'Post' }  ],
        "image": String
    },
    {
        "username": {type: String, required: true, unique: true },
        "nickname": String,
        "email": {type: String, required: true, unique: true },
        "password": {type: String, required: true, unique: true },
        "greeting": String, 
        "points": {type: Number, min: 0, default: 0 },
        "status": { type: String, enum: ['silver', 'gold', 'diamond' ] },
        "posts": [  { type: mongoose.SchemaTypes.ObjectId, ref: 'Post' }  ],
        "image": String
    },
    {
        "username": {type: String, required: true, unique: true },
        "nickname": String,
        "email": {type: String, required: true, unique: true },
        "password": {type: String, required: true, unique: true },
        "greeting": String, 
        "points": {type: Number, min: 0, default: 0 },
        "status": { type: String, enum: ['silver', 'gold', 'diamond' ] },
        "posts": [  { type: mongoose.SchemaTypes.ObjectId, ref: 'Post' }  ],
        "image": String
    },
    {
        "username": {type: String, required: true, unique: true },
        "nickname": String,
        "email": {type: String, required: true, unique: true },
        "password": {type: String, required: true, unique: true },
        "greeting": String, 
        "points": {type: Number, min: 0, default: 0 },
        "status": { type: String, enum: ['silver', 'gold', 'diamond' ] },
        "posts": [  { type: mongoose.SchemaTypes.ObjectId, ref: 'Post' }  ],
        "image": String
    },
    {
        "username": {type: String, required: true, unique: true },
        "nickname": String,
        "email": {type: String, required: true, unique: true },
        "password": {type: String, required: true, unique: true },
        "greeting": String, 
        "points": {type: Number, min: 0, default: 0 },
        "status": { type: String, enum: ['silver', 'gold', 'diamond' ] },
        "posts": [  { type: mongoose.SchemaTypes.ObjectId, ref: 'Post' }  ],
        "image": String
    },
    {
        "username": {type: String, required: true, unique: true },
        "nickname": String,
        "email": {type: String, required: true, unique: true },
        "password": {type: String, required: true, unique: true },
        "greeting": String, 
        "points": {type: Number, min: 0, default: 0 },
        "status": { type: String, enum: ['silver', 'gold', 'diamond' ] },
        "posts": [  { type: mongoose.SchemaTypes.ObjectId, ref: 'Post' }  ],
        "image": String
    }
]