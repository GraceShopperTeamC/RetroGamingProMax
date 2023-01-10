const router = require('express').Router()
const { models: { User }} = require('../db')

// router.get('/', async (req, res, next) => {
//   try {
//     const users = await User.findAll({
//       // explicitly select only the id and username fields - even though
//       // users' passwords are encrypted, it won't help if we just
//       // send everything to anyone who asks!
//       attributes: ['id', 'username']
//     })
//     res.json(users)
//   } catch (err) {
//     next(err)
//   }
// })

router.get('/', async (req, res, next) => {
  try{
      const users = await User.findAll({})
      res.send(users)
  } catch (err){
      next (err)
  }
})

router.get('/:id', async (req, res, next) => {
  try{
      const users = await User.findByPk(req.params.id)
      res.send(users)
  } catch (err){
      next (err)
  }
})

router.post('/', async (req, res, next) => {
  try{
      const users = await User.create(req.body)
      res.send(users)
  } catch (err){
      next (err)
  }
})

router.put('/:id', async(req, res, next) => {
  try{
      const users = await User.findByPk(req.params.id)
      res.send(await users.update(req.body))
  } catch(err) {
      next(err)
  }
})

router.delete('/:id', async (req, res, next) => {
  try{
      const users = await User.findByPk(req.params.id)
      users.destroy()
      res.send(users)
  } catch (err){
      next (err)
  }
})

module.exports = router