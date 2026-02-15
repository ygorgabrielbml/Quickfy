import { Document, Types } from "mongoose";

// Interface User
export interface IUser extends Document {
  _id: Types.ObjectId;
  name: string;
  email: string;
  passwordHash: string;
  role: "customer" | "company" | "admin";
  createdAt: Date;
  updatedAt: Date;
}

// Interface RefreshToken
export interface IRefreshToken extends Document {
  _id: Types.ObjectId;
  token: string;
  userId: Types.ObjectId;
  expiresAt: Date;
  createdAt: Date;
  updatedAt: Date;
}