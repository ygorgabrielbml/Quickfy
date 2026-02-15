export type UserRole = "customer" | "company" | "admin";

// App/domain user shape (no Mongoose-specific types here)
export interface IUser {
  id: string;
  name: string;
  email: string;
  passwordHash: string;
  role: UserRole;
  createdAt: Date;
  updatedAt: Date;
}

// App/domain refresh token shape
export interface IRefreshToken {
  id: string;
  token: string;
  userId: string;
  expiresAt: Date;
  createdAt: Date;
  updatedAt: Date;
}
