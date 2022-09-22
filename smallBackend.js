const PORT = 8000
const express = require("express")
const cors = require("cors")
const axios = require ("axios")
require("dotenv").config()

const app = express()

app.use(cors())

app.get("/", (req,res) => {
    res.json("hi")
})

app.get("/chucknorris", (req,res) => {
    const options = {
        method: 'GET',
        url: 'https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/random',
        headers: {
          accept: 'application/json',
          'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
          'X-RapidAPI-Host': 'matchilling-chuck-norris-jokes-v1.p.rapidapi.com'
        }
      };
      
      axios.request(options).then(function (response) {
          res.json(response.data);

      }).catch(function (error) {
          console.error(error);
      });


})

// const data = {
//     MERGE0: 'liga.josta@kaka.lt'
// };

// axios.post(process.env.REACT_APP_MAILCHIMP_SUBSCRIBE_URL, data)
//     .then((res) => {
//         console.log(`Status: ${res.status}`);
//         console.log('Student Info: ', res.data);
//     }).catch((err) => {
//         console.error(err);
//     });





app.listen(PORT, () => console.log("Backend server is up and running on port " + PORT))
