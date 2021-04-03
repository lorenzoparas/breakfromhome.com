import express from 'express';
import mongoose from 'mongoose';

import User from '../models/user.js';

const router = express.Router();

export const createUser = async (req, res) => {
    const { username, password } = req.body;
    const newUser = new User({ username, password })
    try {
        await newUser.save();
        res.status(201).json(newUser);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export default router;
