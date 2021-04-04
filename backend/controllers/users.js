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

export const getUser = async (req, res) => {
    const { name } = req.params;
    console.log("HERE", name);
    try {
        const user = await User.find({ username: name });
        console.log("YES!=", user);
        res.status(200).json(user);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const getPost = async (req, res) => { 
    const { id } = req.params;

    try {
        const post = await User.findById(id);
        
        res.status(200).json(post);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export default router;
