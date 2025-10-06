export const paths = {
  // authorized
  main: '/',

  users: '/users',
  userDetail: (userId: string = ':id') => `/users/${userId}`,

  logs: '/logs',

  // unauthorized
  login: '/login',
};
