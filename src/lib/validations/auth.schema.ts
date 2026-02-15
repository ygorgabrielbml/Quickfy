import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().pipe(z.email({ message: "Email inválido" }).trim()),
  password: z.string().min(8, { message: "Senha precisa ter no mínimo 8 caracteres" }).trim(),
});

export type LoginInput = z.infer<typeof loginSchema>;
