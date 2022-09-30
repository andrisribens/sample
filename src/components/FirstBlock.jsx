import React, {useEffect, useState} from "react";
const axios = require("axios");



function FirstBlock() {

    const [chuckQuote, setChuckQuote] = useState(null);

    useEffect(() => {

    const options = {
        method: 'GET',
        url: process.env.REACT_APP_RAPID_API_URL,
        headers: {
            accept: 'application/json',
            'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
            'X-RapidAPI-Host': 'matchilling-chuck-norris-jokes-v1.p.rapidapi.com'
          }
      };
      
      axios.request(options).then(function (response) {
          setChuckQuote(response.data.value);
      
      }).catch(function (error) {
          console.error(error);
      });

    }, [])


    return (
            <div className="first-block-content">
                <h1>Random Chuck Norris quote from API</h1>
                <h5>{chuckQuote}</h5>
            </div> 
    )
}

export default FirstBlock;