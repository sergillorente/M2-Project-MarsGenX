# Mars GenX 

## Description

The purpose of our app is to support SpaceX missions to mars.:rocket: The app provides a loyalty program that differentiates users in three categories; :information_desk_person:  silver, gold, and diamond. Members will gain points:basketball: by sharing SpaceX launches, latest news on social media, and as well with a donation system. This way we aim to create a strong community around SpaceX and more awareness of the its main goal!!!.



### User stories

- **404**: As a user, I will see a message showing me that we are trying to access in a website which doesn't exists.:warning:

- **500**: As a user, I want to see an error page when the page doesn't load. Like that I will know that is not my fault.:no_entry_sign:

- **Homepage**:  As a user when I access in the Homepage, I will know what the purpose of the app is, and some appealing information that would impress me and most likely want to be part of the Mars Generation Community. In this page as well, I will be able to access the sign up and login process.:goal_net:

- **Sign Up**: As a user, I would like to come and join this futuristic community.:satellite: I will have also the chance to be updated of the latest news of rocket launches. This happens in the first step of the community, the sign up page.

- **Login**: As a user,  I will have access to my personal account in the login page. :family:

- **Log out**: As a user, I will exit from my account with assurance that nobody can access it.:closed_lock_with_key:

- **Donation:**  As a user, I can support the SpaceX project in the Donation page.:euro:

- **Profile Settings**:  As a user, once I have already logged in, I will be able to customize my profile with my personal data in the Profile Settings page.:dress:

  - I can also edit it my personal data.
  - And updated it whenever I want!.
  - And if, I feel like a need to remove something I will also be able to do so.

- **Member page**: As a user, it's where the community takes places and support the SpaceX project by::telescope:

  - Creating posts my own posts.

  - Give donations.

  - Appreciate the post by liking it.

  - All of these support will also be appreciated as I will have a member status with private rewards.

    

  ### Server Routes (**back-end**)

| Method   | Route                                     | Description                                                  | Request -Body                                                |
| -------- | ----------------------------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `GET`    | `/`                                       | Main page route. Renders home view.                          |                                                              |
| `GET`    | `/login`                                  | Renders `login` form.                                        |                                                              |
| `POST`   | `/login`                                  | Sends Login form data to the server. Redirects to members page. | { email, password }                                          |
| `GET`    | `/signup`                                 | Renders `signup` form view.                                  |                                                              |
| `POST`   | `/signup`                                 | Sends Sign Up info to the server and creates user in the DB. | { email, password }                                          |
| `GET`    | `/private/edit-profile`                   | Private route. Renders `edit-profile` form view.             |                                                              |
| `POST`   | `/private/edit-profile`                   | Private route. Sends edit-profile info to server and updates user in DB. | { email, password, nickname,  [imageUrl], description, race [] } |
| `GET`    | `/private/member/:idmember`               | Private route. Render the member-page view.                  |                                                              |
| `POST`   | `/private/posts/add/:idmember`            | Private route. Adds a new post for the current user.         | { title, text,  [image]  }                                   |
| `POST`   | `/private/posts/update/:idmember/:postid` | Private route. Updates the existing post from the current user. | { title, text, [image]  }                                    |
| `DELETE` | `/private/posts/delete/:idmember/:postid` | Private route. Deletes the existing post from the current user. |                                                              |
| `GET`    | `/private/donation/:idmember`             | Private route. Renders the`Donation` page                    |                                                              |
| `POST`   | `/private/donation/:idmember`             | Private route. Adds points to the member who donated.        | { amount }                                                   |



### Models

###### **Member**:

```js
{
    "username": {type: String, required: true, unique: true },
    "nickname": String,
    "email": {type: String, required: true, unique: true },
    "password": {type: String, required: true, unique: true },
    "greeting": String, 
    "points": {type: Number, min: 0, default: 0 },
    "status": { type: String, enum: ['silver', 'gold', 'diamond' ] },
    "image": String,
    "posts": [  { type: mongoose.SchemaTypes.ObjectId, ref: 'Post' }  ]
}
```



###### **Post:**

```js
{
    "title": String,
    "text": String,
    "likes": [ { type: mongoose.SchemaTypes.ObjectId, ref: "Member" }  ],
    "image": String,
    "shares": [ { type: mongoose.SchemaTypes.ObjectId, ref: "Member" }  ],
    "comments": [
        {
            member: { type: mongoose.SchemaTypes.ObjectId, ref: "Member" }
            comment: String
        }
    ],
    "creator": { type: mongoose.SchemaTypes.ObjectId, ref: "Member" },
    "donations":  [ { type: mongoose.SchemaTypes.ObjectId, ref: "Member" } ]
}
```



### **Backlog**

- Create three levels of membership (silver, gold, diamond).
- Create the routes for each tipology of members.
- Improve the profile settings page. Increase the number of customized feuters and fields. 
- Make the application responsive for different devices.
- Improve the efficiency of the routes and functionality.
- Improve the overall design of the application.

### Links

[Wireframe](https://balsamiq.cloud/s8nhyua/p3s2912/rC7A0)

[My trello board](https://trello.com/b/zTw6lDPk/project-2-mars-genx)



