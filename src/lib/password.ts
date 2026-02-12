import bcrypt from "bcryptjs";

async function hash_password(password: string): Promise<string> {
  return await bcrypt.hash(password, 12);
}

async function verificate_password(plain_password: string, hash: string): Promise<boolean> {
  return await bcrypt.compare(plain_password, hash);
}