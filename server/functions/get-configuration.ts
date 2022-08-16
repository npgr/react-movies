import fetch from 'node-fetch';

exports.handler = async () => {
  const API_ENDPOINT = `https://api.themoviedb.org/3/configuration?api_key=${process.env.REACT_APP_API_KEY}`;

  let response;
  try {
    response = await fetch(API_ENDPOINT, {
      mode: 'cors',
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
    }).then((response) => response.json());
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
    body: JSON.stringify(response),
  };
};
