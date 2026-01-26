import mongoose from 'mongoose'

const blogSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            trim: true,
            required: true,
            index: true
        },
        slug: {
            type: String,
            trim: true,
            unique: true,
            required: true,
        },
        content: {
            type: String,
            required: true,
            minlength: 100
        },
        author: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true
        },
        tags: {
            type: [String],
            index: true
        },
        status: {
            type: String,
            enum: ['draft', 'published', 'archived'],
            default: 'draft'
        }
    },
    {
        timestamps: true
    }
)

export const Blog = mongoose.model('Blog', blogSchema)