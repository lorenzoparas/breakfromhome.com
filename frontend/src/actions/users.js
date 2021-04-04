import { FETCH_ALL, GET, CREATE, UPDATE, DELETE, LIKE } from '../constants/actionTypes';

import * as api from '../api/index.js';

export const createUser = (user) => async (dispatch) => {
  try {
    const { data } = await api.createUser(user);
    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    alert("Username taken!");
    console.log(error.message);
  }
};

export const getUser = (username) => async (dispatch) => {
  try {
    const { data } = await api.getUser(username);
    dispatch({ type: GET, payload: data });
    // console.log("DARTER =", data);
  } catch (error) {
    console.log(error.message);
  }
};
