import { jwtDecode } from 'jwt-decode';

export const getToken = () => {
  return localStorage.getItem('token');
};

export const decodeToken = (token) => {
  try {
    return jwtDecode(token);
  } catch (error) {
    return null;
  }
};

export const isAuthenticated = () => {
  const token = getToken();
  if (token) {
    const decodedToken = decodeToken(token);
    const currentTime = Date.now() / 1000;
    return decodedToken.exp > currentTime;
  }
  return false;
};
