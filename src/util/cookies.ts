export function setCookie(name: string, value: string) {
  const now = new Date();
  const expirationTime =
      new Date(now.getTime() + 55 * 60 * 1000);  // 55 minutos en milisegundos
  document.cookie =
      `${name}=${encodeURIComponent(value)}; expires=${expirationTime.toUTCString()}; path=/; SameSite=Lax${location.protocol === 'https:' ? '; Secure' : ''}`;
};

export const getCookie = (name: string) => {
  const cookies = document.cookie.split(';');
  for (const cookie of cookies) {
    const separator = cookie.indexOf('=');
    const cookieName = cookie.slice(0, separator).trim();
    if (name === cookieName) {
      return decodeURIComponent(cookie.slice(separator + 1));
    }
  }
  return undefined;
};

export function clearSessionCookies() {
  if (typeof document === 'undefined') return;

  ['jwt', 'email', 'id', 'username'].forEach(name => {
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; SameSite=Lax`;
  });
}
