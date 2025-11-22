// const express = require('express')
// const mongoose = require('mongoose');

// const app = express()
// app.use(express.json())

// // AiNaWX1i5lMFMSez   pass
// // FirstMongoWork  project name

// mongoose.connect('mongodb+srv://FirstMongoWork:AiNaWX1i5lMFMSez@cluster0.7ooynjm.mongodb.net/FirstMongoWork?appName=Cluster0')
//     .then(() => console.log(' mongo db Connected!'));

// const Schema = mongoose.Schema;

// const UserSchema = new Schema({
//     Name: String,
//     Email: String,
//     Password: String,
// });
// const user = mongoose.model('AllUser', UserSchema)

// // --------------------Register section---------------------

// app.get('/register', async (req, res) => {

//     try {

//         const {
//             Name,
//             Email,
//             Password
//         } = req.body;

//         if (!Name) return res.status(400).send({
//             Error: 'Name is required'
//         })
//         if (!Email) return res.status(400).send({
//             Error: 'Email is required'
//         })
//         if (!Password) return res.status(400).send({
//             Error: 'Password is required'
//         })

//         const existinguser = await user.findOne({
//             Email
//         })

//         if (existinguser) return res.status(400).send({
//             Error: 'User already Exists'
//         })

//         const newUser = new user({
//             Name,
//             Email,
//             Password
//         })

//         newUser.save()

//         res.status(201).send({
//             sucess: 'reg successful for user',
//             newUser
//         })

//     } catch (error) {
//         res.status(500).send({
//             error: 'reg failed'
//         })
//     }
// })


// // --------------------login section------------------------

// app.get('/Login', async (req, res) => {


//     try {

//         const {
//             Email,
//             Password
//         } = req.body;


//         const newUser = await user.findOne({
//             Email
//         })

//         if (!newUser) return res.status(400).send({
//             Error: 'user does not exist'
//         })
//         if (newUser.Password !== Password) return res.status(400).send({
//             Error: 'Password dosent match'
//         })

//         res.status(201).send({
//             sucess: 'login successful ',
//             newUser
//         })

//     } catch (error) {
//         res.status(500).send({
//             error: 'login failed'
//         })
//     }


// })

// // -----------------home section------------
// app.get('/', (req, res) => {

//     res.send('')

// })
// // ---------------------server seaction---------------

// app.listen(4000, () => {
//     console.log('Server is running on port 4000');
// });






const express = require('express')

const mongoose = require('mongoose');

const app =express()

app.use(express.json())



mongoose.connect('mongodb://127.0.0.1:27017/test')
  .then(() => console.log(' DATABASE Connected!'));


app.listen(4000 ,()=>{
    console.log('server running on port 4000')
})