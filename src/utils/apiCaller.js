import fetch from 'isomorphic-fetch';
import { isFake, getFakeResponse } from './fakeApi';

export const API_URL = 'http://localhost:8080/api';

export default function callApi(endpoint, method = 'get', body, options = { isJSON: true }) {
  if (isFake(endpoint, method)) {
    return new Promise(resolve => resolve(getFakeResponse(endpoint, method, body)));
  }

  const headers = {};

  if (options.isJSON) {
    headers['content-type'] = 'application/json';
  }

  return fetch(`${API_URL}/${endpoint}`, {
    headers,
    method,
    body: options.isJSON || method !== 'get' ? JSON.stringify(body) : body,
  })
  .then(response => response.json().then(json => ({ json, response })))
  .then(({ json, response }) => {
    if (!response.ok) {
      return Promise.reject(json);
    }

    return json;
  })
  .then(
    response => response,
    error => error
  );
}
