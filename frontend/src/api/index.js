import axios from 'axios';

const urlUsers = 'http://localhost:5000/users/';
const urlPosts = 'http://localhost:5000/posts/';

export const fetchPosts = () => axios.get(urlPosts);
export const createPost = (newPost) => axios.post(urlPosts, newPost);
export const likePost = (id) => axios.patch(`${urlPosts}/${id}/likePost`);
export const updatePost = (id, updatedPost) => axios.patch(`${urlPosts}/${id}`, updatedPost);
export const deletePost = (id) => axios.delete(`${urlPosts}/${id}`);

export const createUser = (newUser) => axios.post(urlUsers, newUser);
export const getUser = (username) => {axios.get(`${urlUsers}${username}`)};
