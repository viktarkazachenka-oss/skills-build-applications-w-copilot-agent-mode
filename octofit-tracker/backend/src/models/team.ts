import { model, Schema, Types } from 'mongoose';

const teamSchema = new Schema(
  {
    name: { type: String, required: true, unique: true, trim: true },
    color: { type: String, required: true },
    captain: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    members: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    totalPoints: { type: Number, required: true, default: 0, min: 0 },
  },
  { timestamps: true },
);

export type TeamDocument = {
  _id: Types.ObjectId;
  name: string;
  color: string;
  captain: Types.ObjectId;
  members: Types.ObjectId[];
  totalPoints: number;
};

export const Team = model('Team', teamSchema);