"use server";

import { z } from "zod";
import { redirect } from "next/navigation";
import { createSession } from "../../lib/auth/session";

const testUser = {
  id: "1",
  email: "ygorgabrielbml@gmail.com",
  password: "1234a5678",
};

const loginSchema = z.object({
  email: z.string().pipe(z.email({ message: "Email inválido" }).trim()),
  password: z.string().min(8, { message: "Senha precisa ter no mínimo 8 caracteres" }).trim(),
});

export async function login(prevState: any, formData: FormData) {
  const result = loginSchema.safeParse(Object.fromEntries(formData));

  if (!result.success) {
    const formatted = result.error.format();
    return {
      errors: {
        email: formatted.email?._errors,
        password: formatted.password?._errors,
      },
    };
  }

  const { email, password } = result.data;

  if (email !== testUser.email || password !== testUser.password) {
    return {
      message: "Email ou senha inválidos",
    };
  }

  await createSession(testUser.id);

  redirect("/dashboard");
}
