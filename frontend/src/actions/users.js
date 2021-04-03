import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from '../constants/actionTypes';

import * as api from '../api/index.js';

export const createUser = (user) => async (dispatch) => {
  try {
    console.log("MY NAME's JEFF! 1 =", user);
    const { data } = await api.createUser(user);
    console.log("MY NAME's JEFF! =", data);
    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
