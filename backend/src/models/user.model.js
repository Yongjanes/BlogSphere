import mongoose from 'mongoose'

const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            trim: true,
            minlength: 3,
            maxlength:30
        },
        email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    passwordHash: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
    bio: {
      type: String,
      maxlength: 200,
      default: "",
    },
    avatarUrl: {
      type: String,
      default: "",
    },
    isActive: {
      type: Boolean,
      default: true, // admin can disable account
    },
    isVerified: {
      type: Boolean,
      default: false, // email verification later
    }
    },
    {
        timestamps: true
    }
)

export default mongoose.model("User", userSchema);