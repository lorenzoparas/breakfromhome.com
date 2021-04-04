import express from 'express';

import { createUser, getUser, updateUser } from '../controllers/users.js';

const router = express.Router();

router.post('/', createUser);
router.get('/:username', getUser);
router.patch('/:usernameIdentifier', updateUser);

export default router;