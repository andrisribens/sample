import React, {useEffect, useState} from "react";
const axios = require("axios");



function FirstBlock() {

    const [chuckQuote, setChuckQuote] = useState(null);

    useEffect(() => {

    const options = {
        method: 'GET',
        url: 'http://localhost:8000/chucknorris'
      };
      
      axios.request(options).then(function (response) {
          setChuckQuote(response.data.value);
      
      }).catch(function (error) {
          console.error(error);
      });

    }, [])


    return (
            <div className="first-block-content">
                <h1>Random Chuck Norris quote</h1>
                <h5>{chuckQuote}</h5>
            </div> 
    )
}

export default FirstBlock;