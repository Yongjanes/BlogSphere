import mongoose from 'mongoose'

const userHistorySchema = new mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true
        },
        blogId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Blog',
            required: true
        }
    },
    {
        timestamps: true
    }
)

export const UserHistory = mongoose.model('UserHistory', userHistorySchema)