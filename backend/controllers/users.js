import express from 'express';
import mongoose from 'mongoose';

import User from '../models/user.js';

const router = express.Router();

export const createUser = async (req, res) => {
    const { username, password } = req.body;
    const newUser = new User({ username, password })
    try {
        const users = await User.find();
        for (let i = 0; i < users.length; i++) {
            if (users[i]['username'] == username) {
                throw("Username taken");
            }
        }
        await newUser.save();
        res.status(201).json(newUser);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const getPosts = async (req, res) => { 
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export default router;
