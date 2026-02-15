"use server";

import { redirect } from "next/navigation";
import { FormState } from "@/types/errors";
import { loginSchema } from "@/lib/validations/auth.schema";
import { testUser } from "@/lib/data/users";
import { createSession, deleteSession } from "@/lib/auth/session";

export async function login(_prevState: FormState, formData: FormData) {
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

export async function logout() {
  await deleteSession();
  redirect("/login");
}
