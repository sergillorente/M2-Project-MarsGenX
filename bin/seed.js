const mongoose = require('mongoose');
const Member = require('./../models/Member.model');
const Post = require('./../models/Post.model');

const memberMock = require('./member-mock-data');
const postMock = require('./posts-mock-data');

const DB_NAME = 'mars-database';

// SEED SEQUENCE

// CONNECT to mongo db (mongoose)

mongoose
  .connect(`mongodb://localhost:27017/${DB_NAME}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then( (x) => {
    // AFTER CONNECTION , DROP THE EXISTING DATABASE
    console.log("Connected to DB" + DB_NAME);

    const promise = x.connection.dropDatabase();

    return promise;
  })
  .then( () => {
      // create members

      const promise = Member.create( memberMock )
      return promise;
  })
  .then( ( createdMembers ) => {
      console.log(`Created ${createdMembers.length} members`);
      
      
      
      mongoose.connection.close();
    })

  // update the posts

 // const updatedPost = 

 
