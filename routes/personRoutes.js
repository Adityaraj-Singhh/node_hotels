const express = require('express');
const router = express.Router();
const Person = require('./../models/person');

//Post route to add a person
router.post('/',async(req,res)=>{

    try{
      const data = req.body //Assuming the request body contains the person data
  //create a new person document using moongose model
      const newPerson = new Person(data);
  
      //save the new person to the database
      const response = await newPerson.save();
      console.log('data saved');
      res.status(201).json(response);
    }
    catch(err){
      console.log(err);
      res.status(500).json({error: 'Internal Server Error'});
    }
  
  })

  //GET method to get the person
  //GET method to get the person

router.get('/', async(req,res)=>{
    try{
      const data = await Person.find();
      console.log('data fetched');
      res.status(201).json(data);
    }
    catch(err){ 
      console.log(err);
      res.status(500).json({error: 'Internal Server Error'})
    }
  })

  //Parametersed call of person
router.get('/:workType',async(req, res)=>{
    try{
  
      const  workType = req.params.workType; //Extract tghe worktype from the url parameter
  
      if(workType == 'chef' || workType == 'manager'||workType == 'waiter' ){
  
        const response = await Person.find({work: workType});
        console.log('response fetched');
        res.status(200).json(response);
        
      }else{
          return res.status(400).json({"Error":"Invalid Work Type!"})
      }
    }
    catch(err){
      console.error(err.message);
      res.status(500).json({error: 'Internal Server error'});
    }
  })
//Router for updating data

router.put('/:id', async(req,res)=>{
    try{
        const personId = req.params.id; //Extract th eid from the url parameter
        const updatedPersonData = req.body; //Update the data for the person

        const response = await Person.findByIdAndUpdate(personId ,updatedPersonData,{
            new: true,//Return updated document
            runValidators: true, //Run mongoose validation
        })

        
        if(!response){
            return res.status(404).json({error: 'Person not found'});
        }
        console.log('data updated');
        res.status(200).json(response);

    }
    catch(err){
        console.error(err.message);
      res.status(500).json({error: 'Internal Server error'});
    }
})

//Router to delete
router.delete('/:id',async(req,res)=>{
    try{
        const personId = req.params.id; //Extract th eid from the url parameter

        const response = await Person.findByIdAndDelete(personId)
        if(!response){
            return res.status(404).json({error: 'Person not found'});
        }
        console.log('data updated');
        res.status(200).json({message : 'Person deleted successfully'});


    }
    catch(err){
        console.error(err.message);
      res.status(500).json({error: 'Internal Server error'});
    }
})








module.exports = router;