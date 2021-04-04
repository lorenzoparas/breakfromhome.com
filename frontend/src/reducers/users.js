import { CREATE, GET } from '../constants/actionTypes';

export default (users = [], action) => {
  switch (action.type) {
    case GET:
      return action.payload;
    case CREATE:
      return [...users, action.payload];
    default:
      return users;
  }
};