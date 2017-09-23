const express = require('express');
const router = express.Router();

let db = require('../../models');
let Messages = db.messages;
let Topics = db.topics;
let Users = db.users;

router.get('/', (req,res)=>{
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
  .then(messages => {
    let msgObj = messages.map(message => {
      return {
        id: message.id,
        user: message.user,
        topic: message.topic,
        createdAt: message.createdAt,
        body: message.body,
        author: message.author_id
      };
    });
    res.json(msgObj);
  });
});

router.get('/:id', (req,res) => {
  let topicId = parseInt(req.params.id);
  Messages.findById(topicId,
    {
      include: [
      {
        model: Messages,
        include: [
        {
          model: Users,
          attributes:['name']
        }
      ],
      attributes: ['body', 'createdAt']
    }
    ]
  })
  .then(topic => {
    let topicObj = {
      name: topic.name,
      users: topic.users,
      messages: topic.messages
    };
    res.json(topicObj);
  });
});

router.post('/', (req,res) => {
  let sendInfo = req.body;
  Users.findOne(
  {
    where: {
      name: sendInfo.created_by
    }
  })
  .then(user => {
    Messages.create({
      body: sendInfo.body,
      topic_id: sendInfo.topic_id,
      author_id: user.id
    })
    .then(displayData => {
      res.json(displayData);
    });
  });
});

module.exports = router;