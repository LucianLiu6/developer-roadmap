import Cookies from 'js-cookie';
import { T as TOKEN_COOKIE_NAME, d as decodeToken } from './BaseLayout_CyQdLUYI.mjs';

function useAuth() {
  const token = Cookies.get(TOKEN_COOKIE_NAME);
  if (!token) {
    return null;
  }
  return decodeToken(token);
}

export { useAuth as u };
