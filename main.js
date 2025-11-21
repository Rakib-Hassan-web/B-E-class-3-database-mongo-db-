

const express =require('express')
const mongoose = require('mongoose');
// const { use } = require('react');

const app =express()
app.use(express.json())

// AiNaWX1i5lMFMSez
// FirstMongoWork

mongoose.connect('mongodb+srv://FirstMongoWork:AiNaWX1i5lMFMSez@cluster0.7ooynjm.mongodb.net/FirstMongoWork?appName=Cluster0')
  .then(() => console.log(' mongo db Connected!'));

  const Schema = mongoose.Schema;


const UserSchema = new Schema({
  Name: String,
  Email: String,
  Password: String,
 
});

const user =mongoose.model('AllUser', UserSchema)





app.get('/register',  (req ,res)=>{


    try {
        
   const { Name, Email, Password} =req.body ;


if(!Name) return res.status(400).send({Error: 'Name is required'})
if(!Email) return res.status(400).send({Error: 'Email is required'})
if(!Password) return res.status(400).send({Error: 'Password is required'})




   const newUser =new user ({
    Name,
    Email,
    Password
   })

newUser.save()

    res.status(201).send( { sucess:'reg successful for user' , newUser  })
        
    } catch (error) {
        res.status(500).send({error:'reg failed'})
    }


})



app.get('/Login', async  (req ,res)=>{


    try {
        
   const { Email, Password} =req.body ;


   const newUser = await user.findOne({Email}) 

if(!newUser) return res.status(400).send({Error: 'user does not exist'})
// if(!Password) return res.status(400).send({Error: 'Password is required'})





    res.status(201).send( { sucess:'login successful ' , newUser  })
        
    } catch (error) {
        res.status(500).send({error:'login failed'})
    }


})



app.get('/', (req ,res)=>{

    res.send('')

})

app.listen(4000, () => {
    console.log('Server is running on port 4000');
});