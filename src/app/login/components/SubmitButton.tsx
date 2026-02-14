"use client"

import { useFormStatus } from 'react-dom';
import { AuthButton } from '../../components/AuthButton';

export function SubmitButton() {
  const { pending } = useFormStatus();
  
  return (
    <AuthButton disabled={pending}>
      {pending ? "Entrando..." : "Login"}
    </AuthButton>
  );
}
