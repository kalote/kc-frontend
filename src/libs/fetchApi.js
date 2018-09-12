import config from '../config';

export async function invokeApi({
  type,
  method = "GET",
  urlParams = "",
  body
}) {
  body = body ? JSON.stringify(body) : undefined;
  const results = await fetch(`${config.api[type].URL}${urlParams}`, {
    method,
    headers: {
      'content-type': 'application/json'
    },
    body
  });

  if (results.status === 500) {
    throw new Error(await results.text());
  }

  return results.json();
}