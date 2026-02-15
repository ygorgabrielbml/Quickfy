import mongoose, { Model, Schema } from "mongoose";
import { IUser } from "@/types/models";

type UserPersistence = Omit<IUser, "id">;

const UserSchema = new Schema<UserPersistence>(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    passwordHash: {
      type: String,
      required: true,
      select: false,
    },
    role: {
      type: String,
      enum: ["customer", "company", "admin"],
      default: "customer",
    },
  },
  {
    timestamps: true,
  }
);

const User: Model<UserPersistence> =
  mongoose.models.User || mongoose.model<UserPersistence>("User", UserSchema);

export default User;
