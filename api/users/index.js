const express = require('express');
const router = express.Router();

let db = require('../../models');
let Users = db.users;
let Topics = db.topics;
let Messages = db.messages;

router.get('/', (req,res) => {
  Users.findAll()
  .then(users => {
    let allUsers = users.map(user => {
      return {
        username: user.name,
        id: user.id
      };
    });
    res.json(allUsers);
  })
  .catch(err => {
    throw err;
  });
});

router.get('/:id', (req,res) => {
  let userId = parseInt(req.params.id);
  Users.findById(userId,
    {
      include: [
        {
          model: Messages,
          include: [
            {
              model: Topics,
              attributes: ['name']
            }
          ],
          attributes: ['body', 'createdAt']
        }
      ]
    })
    .then(user => {
      let userObj = {
        username: user.name,
        posts: user.topics,
        messages: user.messages
      };
    res.json(userObj);
  })
  .catch(err => {
    throw err;
  });
});

router.get('/login/:id', (req,res) => {
  console.log(req.params);
  let verifyUsername = (req.params.id);
  Users.findOne(
  {
    where: {
      name: verifyUsername
    }
  })
  .then(users => {
    let getUser = {
      username: users.name
    };
    res.json(getUser);
  })
  .catch(err => {
    throw err;
  });
});

router.post('/', (req,res) => {
  Users.create({
    name: req.body.name,
  })
  .then(displayData => {
    res.json(displayData);
  })
  .catch(err => {
    throw err;
  });
});

module.exports = router;