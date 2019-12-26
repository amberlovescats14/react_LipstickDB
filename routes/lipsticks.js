const express = require('express')
const router = express.Router()
const Lipstick = require('../models/Lipsticks')

router.get('/', async ( req, res)=> {
  try {
    let lipsticks = await Lipstick.find()
    return res.json(lipsticks)
  } catch (error) {
    console.error(error.message);
    res.status(500).json({msg: `Server Error`})
  }
})

router.post('/', async(req, res)=> {
  try {
    const newLipstick = new Lipstick({
      brand: req.body.brand,
      color: req.body.color,
      name: req.body.name,
      desc: req.body.desc,
      full: req.body.full
    })
    const save = await newLipstick.save()
    return res.json(save)
  } catch (error) {
    console.error(error.message);
    res.status(500).json({msg: `Server Error`})
  }
})

router.put('/:id', async (req, res)=> {
  try {
    let singleLipstick = await Lipstick.findById(req.params.id)
    if(!singleLipstick) return res.status(404).json({msg: `NOT FOUND`})
  
   
      singleLipstick.brand = req.body.brand
      singleLipstick.color = req.body.color
      singleLipstick.name = req.body.name
      singleLipstick.desc = req.body.desc
      singleLipstick.full = req.body.full
      await singleLipstick.save()
      let allLipsticks = await Lipstick.find()
      return res.json(allLipsticks)

  } catch (error) {
    console.error(error.message);
    res.status(500).json({msg: `SERVER ERROR`})
  }
})


router.delete('/:id', async(req, res)=> {
  try {
    const singleLipstick = await Lipstick.findById(req.params.id)
    if(!singleLipstick) return res.status(404).json({msg: `NOT FOUND`})
      await singleLipstick.remove()
      return res.json({msg: `Lipstick Deleted`})

  } catch (error) {
    console.error(error.message)
    res.status(500).json({msg: `SERVER ERROR`})
  }
})

module.exports = router