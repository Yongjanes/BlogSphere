import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
	{
		username: {
			type: String,
			required: true,
			unique: true,
			trim: true,
			minlength: 3,
			maxlength: 30
		},
		email: {
			type: String,
			required: true,
			trim: true,
			unique: true
		},
		password: {
			type: String,
			required: true
		},
		avatarUrl: {
			type: String
		},
		bio: {
			type: String,
			trim: true
		}
	},
	{
		timestamps: true,
	}
);

export const User = mongoose.model("User", userSchema);
