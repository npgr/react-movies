import fetch from 'node-fetch';
import { HandlerEvent } from '@netlify/functions';

exports.handler = async (event: HandlerEvent) => {
  const { page = 1 } = event.queryStringParameters || {};

  const API_ENDPOINT = `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`;

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
    body: JSON.stringify({
      data: response,
    }),
  };
};
