import * as Cookie from 'js-cookie';

const USER_COOKIE = 'USER';

export const getCurrentUser = () => {
  const user = Cookie.get(USER_COOKIE);

  return user;
};

export const setCurrentUser = (name: string) => {
  Cookie.set(USER_COOKIE, name);
};
