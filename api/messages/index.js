const express = require('express');
const router = express.Router();
let db = require('../../models');
let Users = db.users;
let Topics = db.topics;
let Messages = db.messages;

router.get('/', (req,res) => {
  Messages.findAll({
    include: [
      {
        model: Users,
        attributes: ['name']
      },
      {
        model: Topics,
        attributes: ['id', 'name']
      }
    ]
  })
  .then(msgData => {
    let allMessages = msgData.map(msg => {
      return {
        id: msg.id,
        user: msg.user,
        topic: msg.topic,
        createdAt: msg.createdAt,
        body: msg.body,
        author: msg.author_id
      };
    });
    res.json(allMessages);
  });
});

router.get('/:id', (req,res) => {
  let topicId = parseInt(req.params.id);
  Messages.findById(topicId,
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
    let eachPost = {
      name: topic.name,
      users: topic.users,
      messages: topic.messages
    };
    res.json(eachPost);
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
    Messages.create({
      body: submitted.body,
      topic_id: submitted.topic_id,
      author_id: user.id
    })
    .then(newUser => {
      res.json(newUser)
    })
    .catch(err => {
      console.log(err);
    })
  });
});

module.exports = router;