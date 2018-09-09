export const api_url = process.env.REACT_APP_api_url;

export const requestHeader = auth_token => {
  return {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    Authorization: 'Bearer ' + auth_token
  };
};

