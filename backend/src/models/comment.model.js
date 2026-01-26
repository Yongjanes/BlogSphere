import mongoose from 'mongoose'

const commentSchema = new mongoose.Schema(
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
        },
        content: {
            type: String,
            required: true,
            minlength: 1
        }
    },
    {
        timestamps: true
    }
)

export const Comment = mongoose.model('Comment', commentSchema)