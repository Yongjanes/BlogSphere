import express from 'express'

import { registerUser, loginUser, logoutUser, getMe } from '../controllers/auth.controller.js'

import { requireAuth } from '../middlerwares/auth.middleware.js'

const authRouter = express.Router() 


// Public Routes (No Auth)
router.route('/register').post(registerUser)
router.route('/login').post(loginUser)

// Protected Routes (Auth Required)
router.use(requireAuth)

router.route('/logout').post(logoutUser)
router.route('/me').get(getMe)

export { authRouter }

