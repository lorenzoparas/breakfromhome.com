import express from 'express';
import mongoose from 'mongoose';

import User from '../models/user.js';

const router = express.Router();

export const createUser = async (req, res) => {
    const { username, password, favouriteWebsites, timePresets } = req.body;
    const newUser = new User({ username, password, favouriteWebsites, timePresets });
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
    const { username } = req.params;
    try {
        const user = await User.findOne({ username: username });
        res.status(200).json(user);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const updateUser = async (req, res) => {
    const { usernameIdentifier } = req.params;
    const { username, password, favouriteWebsites, timePresets } = req.body;
    const updatedUser = { username, password, favouriteWebsites, timePresets };
    await User.findOneAndUpdate({username: usernameIdentifier}, updatedUser, { new: true });
    res.json(updatedUser);
}

export default router;
