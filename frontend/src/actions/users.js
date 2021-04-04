import { FETCH_ALL, GET, CREATE, UPDATE, DELETE, LIKE } from '../constants/actionTypes';

import * as api from '../api/index.js';

export const createUser = (user) => async (dispatch) => {
  try {
    const { data } = await api.createUser(user);
    dispatch({ type: CREATE, payload: data });
    sessionStorage.setItem('loggedInUser', JSON.stringify(data));
  } catch (error) {
    alert("Username taken!");
    console.log(error.message);
  }
};

export const getUser = (username) => async (dispatch) => {
  try {
    const data = await api.getUser(username);
    dispatch({ type: GET, payload: data });
    return data.data;
  } catch (error) {
    console.log(error.message);
  }
};

export const updateUser = (username, user) => async (dispatch) => {
  try {
    const { data } = await api.updateUser(username, user);
    dispatch({ type: UPDATE, payload: data}); 
  } catch (error) {
    console.log(error.message);
  }
};
