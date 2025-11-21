

const express =require('express')
const mongoose = require('mongoose');

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

app.get('/', (req ,res)=>{

    res.send('jadsa')

})

app.listen(4000, () => {
    console.log('Server is running on port 4000');
});