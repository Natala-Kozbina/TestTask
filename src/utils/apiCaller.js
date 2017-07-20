import fetch from 'isomorphic-fetch';

export const API_URL = 'http://localhost:8080/api';

export default function callApi(endpoint, method = 'get', body, options = { isJSON: true, isFake: false, fakeResponse: null }) {
  const headers = {};

  if (options.isJSON) {
    headers['content-type'] = 'application/json';
  }

  if (options.isFake) {
    return new Promise(resolve => resolve(options.fakeResponse));
  }

  return fetch(`${API_URL}/${endpoint}`, {
    headers,
    method,
    body: options.isJSON ? JSON.stringify(body) : body,
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
