import jwt from 'jsonwebtoken'

import { ApiError } from '../utils/ApiError.js'
import { asyncHandler } from '../utils/asyncHandler.js'
import { User } from '../models/user.model.js'

const requireAuth = asyncHandler( async (req, res, next) => {
    const accessToken = req.cookies?.access_token || req.headers.authorization?.split(' ')[1]

    if (!accessToken) {
        throw new ApiError(401, "Access token missing")
    }

    let decoded
    try {
        decoded = jwt.verify(accessToken, process.env.JWT_ACCESS_SECRET)
    } catch {
        throw new ApiError(401, "Invalid or expired accesss token")
    }

    const user = await User.findById(decoded.id).select("-password")

    if (!user) {
        throw new ApiError(401, "User not found")
    }

    req.user = user

    next()
})

export { requireAuth }
