const express = require('express');
const router = express.Router();
let db = require('../../models');
let Users = db.users;
let Topics = db.topics;
let Messages = db.messages;

router.get('/', (req,res) => {
  Topics.findAll({
    include: [
      {
        model: Users,
        attributes:['name']
      }
    ],
    attributes:['id','name']
  })
  .then(topics => {
    let allTopics = topics.map(topic => {
      return {
        id: topic.id,
        name: topic.name,
        created_by: topic.user.name
      };
    });
    res.json(allTopics);
  });
});

router.get('/:id', (req,res) => {
  let topicId = parseInt(req.params.id);
  Topics.findById(topicId,
    {
      include: [
        {
          model: Messages,
          include :[
            {
              model: Users,
              attributes:['name']
            }
          ],
          attributes:['body', 'createdAt']
        }
      ]
    })
    .then(topic => {
      let postInfo = {
        id: topic.id,
        name: topic.name,
        users: topic.users,
        messages: topic.messages
      };
      res.json(postInfo);
    });
});

router.post('/', (req,res) => {
  let submitted = req.body;
  Users.findOne({
    where: {
      name: submitted.created_by
    }
  })
  .then(user => {
    Topics.create({
      name: submitted.name,
      created_by: user.id
    })
    .then(newUser => {
      res.json(newUser);
    })
    .catch(err => {
      console.log(err);
    })
  });
});

router.put('/:name', (req,res) => {
  Users.create({
    username: req.body.username,
    password: req.body.password
  })
  .then(newUser => {
    Users.findOne({
      where: {
        username: newUser.username
      }
    })
    .then(displayUser => {
      let newUser = {
        username: displayUser.username
      };
      res.json(newUser);
    });
  });
});


module.exports = router;