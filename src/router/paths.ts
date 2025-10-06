export const paths = {
  // authorized
  main: '/',
  users: '/users',
  userDetail: (userId: string = ':id') => `/users/${userId}`,

  // unauthorized
  login: '/login',
};
