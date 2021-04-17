const { json } = require('express');
const express = require('express');
const uuid = require('uuid')
const db = require('../../localDB/members.json')

const router = express.Router();

// Get all members
router.get('', (req, res)=> {
    res.send(db)
})

// Get single member
router.get('/:id', (req, res)=> {
    const searchId = req.params.id
    const found = db.some(member => member.id == searchId)
    if(found){
      res.send(db.filter( member => member.id == searchId))
    } else {
      res.status(400).json({msg: `members with id : ${searchId} not found`})
    }
    
})

// Create member
router.post('/', (req, res) => {
  const reqBody = req.body
  const newMember = {
    id: uuid.v4(),
    name: reqBody.name,
    email: reqBody.email,
    old: reqBody.old,
    status: 'active',
  }
  if( !newMember.name || !newMember.email) {
    res.status(400).json({msg: 'pls include email and name'})
  } else {
    db.push(newMember)
    res.send({db: db, status: 'new member was created!'})
  }
  
})

// Update Member
router.put('/:id', (req, res) => {
  const searchId = req.params.id
  const found = db.some(member => member.id == searchId)
  if(found){
    const reqBody = req.body
    db.forEach(member => {
      if (member.id == searchId) {
        member.name = reqBody.name ? reqBody.name : member.name
        member.old = reqBody.old ? reqBody.old : member.old
        member.email = reqBody.email ? reqBody.email : member.email
        res.json({msg: 'Member updated', member});
      }
    })
  } else {
    res.status(400).json({msg: `members with id : ${searchId} not found`})
  }
})

router.delete('/:id', (req, res)=>{
  const searchId = req.params.id
  const found = db.some(member => member.id == searchId)
  if(found){
    db.forEach((member, index) => {
      if (member.id == searchId) {
        db.splice(index, 1)
        res.json({msg: `Member with id: ${searchId} was deleted`, member});
      }
    })
  } else {
    res.status(400).json({msg: `members with id : ${searchId} not found`})
  }
})
module.exports = router
