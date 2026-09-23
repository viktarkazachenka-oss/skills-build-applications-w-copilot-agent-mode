import { model, Schema } from 'mongoose';

const userSchema = new Schema(
  {
    username: { type: String, required: true, unique: true, trim: true },
    email: { type: String, required: true, unique: true, lowercase: true, trim: true },
    displayName: { type: String, required: true, trim: true },
    grade: { type: Number, required: true, min: 9, max: 12 },
    totalPoints: { type: Number, required: true, default: 0, min: 0 },
  },
  { timestamps: true },
);

export const User = model('User', userSchema);