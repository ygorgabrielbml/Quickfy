import "server-only";
import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";

const secretKey = process.env.SESSION_SECRET;
if (!secretKey) {
  throw new Error("SESSION_SECRET (secret key) não definida no .env.local")
}
const encodedKey = new TextEncoder().encode(secretKey);

// criar uma nova sessão
export async function createSession(userId: string) {
  const expiresAt = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000); //30d
  // criando o token de 30 dias
  const session = await encrypt({ userId, expiresAt });

  // criando cookies http-only
  (await cookies()).set("session", session, {
    httpOnly: true,
    secure: true,
    expires: expiresAt,
  });
}

// deletar a sessão
export async function deleteSession() {
  (await cookies()).delete("session");
}

// payload type
type SessionPayload = {
  userId: string;
  expiresAt: Date;
};

// função de criptografia do token
export async function encrypt(payload: SessionPayload) {
  return new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("30d")
    .sign(encodedKey);
}

// função de descriptografia do token
export async function decrypt(session: string | undefined = "") {
  try {
    const { payload } = await jwtVerify(session, encodedKey, {
      algorithms: ["HS256"],
    });
    return payload;
  } catch {
    return null;
  }
}
