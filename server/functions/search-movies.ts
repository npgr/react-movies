import fetch from 'node-fetch';
import { HandlerEvent } from '@netlify/functions';
import { BASE_URL } from '../config';

exports.handler = async (event: HandlerEvent) => {
  const { query, page = 1 } = event.queryStringParameters || {};

  const url = `${BASE_URL}/search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=${query}&page=${page}`;
  let response;

  try {
    response = await fetch(url, {
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
