import Cookies from 'js-cookie';
import { ACCESS_TOKEN, REFRESH_TOKEN, USER_INFO } from '../constants/cookie';

function getCookie(CookieName: string) {
  const cookieValue = Cookies.get(CookieName) || '';
  let objectValue = null;
  try {
    objectValue = JSON.parse(cookieValue);
  } catch (error) {
    return cookieValue;
  }
  return objectValue;
}

function setCookie(CookieName: string, CookieValue: any) {
  const strCookieValue = typeof CookieValue == 'object' ? JSON.stringify(CookieValue) : CookieValue;
  return Cookies.set(CookieName, strCookieValue);
}

function removeCookie(CookieName: string) {
  return Cookies.remove(CookieName);
}

function removeCookieAll() {
  removeCookie(USER_INFO);
  removeCookie(ACCESS_TOKEN);
  removeCookie(REFRESH_TOKEN);
}

export { getCookie, setCookie, removeCookie, removeCookieAll };
