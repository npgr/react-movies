// exports.handler = async (event, context) => {
//   // return {
//   //   statusCode: 200,
//   //   body: 'Hello World'
//   // }

const fetch = require("node-fetch");

const API_ENDPOINT =
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}`;

exports.handler = async (event, context) => {
  
  let response;
  try {
    response = await fetch(API_ENDPOINT, {
      mode: "cors",
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    }).then(response => response.json());
    // handle response
  } catch (err) {
    return {
      statusCode: err.statusCode || 500,
      body: JSON.stringify({
        error: err.message,
      }),
    };
  }

  return {
    statusCode: 200,
    body: JSON.stringify({
      data: response,
    }),
  };
};
