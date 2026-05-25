import { Schema, model } from 'mongoose';

const sessionSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      required: true,
    },
    accessToken: {
      type: String,
      required: true,
    },
    refreshToken: {
      type: String,
      required: true,
    },
    accessTokenValidUntill: {
      type: Date,
      required: true,
    },
    refreshTokenValidUntill: {
      type: Date,
      required: true,
    },
  },
  { timestamps: true },
);

export const Session = model('Session', sessionSchema);
