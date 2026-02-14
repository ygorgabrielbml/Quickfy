"use client"

import { Input } from "../../components/AuthInput";
import { PasswordToggle } from "../../components/PasswordToggle";
import { EmailIcon, LockIcon } from "../../components/Icons";
import { FieldError } from "../../components/ui/FieldError";
import { RememberMeCheckbox } from "./RememberMe";
import { SubmitButton } from "./SubmitButton";
import { useState } from 'react';
import { useActionState } from 'react';
import { useFormErrors } from '../../../lib/errors/useFormErrors';
import { login } from '../../actions/auth';

export function LoginForm() {
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [state, loginAction] = useActionState(login, undefined);

  console.log('LoginForm state:', state);
  
  useFormErrors(state);

  return (
    <form action={loginAction} className="w-full sm:w-87.5 text-center bg-white/6 border border-white/10 rounded-2xl px-8">
      <h1 className="text-white text-3xl mt-10 font-medium">Login</h1>
      <p className="text-gray-400 text-sm mt-2">Please sign in to continue</p>

      <div className="mt-6">
        <Input
          name="email"
          type="email"
          placeholder="Email"
          icon={<EmailIcon />}
        />
        <FieldError message={state?.errors?.email} />
      </div>

      <div className="mt-4">
        <Input
          name="password"
          type={showPassword ? "text" : "password"}
          placeholder="Password"
          icon={<LockIcon />}
          rightElement={
            <PasswordToggle 
              showPassword={showPassword} 
              onToggle={() => setShowPassword(!showPassword)} 
            />
          }
        />
        <FieldError message={state?.errors?.password} />
      </div>

      <div className="mt-4 flex items-center justify-between">
        <RememberMeCheckbox 
          checked={rememberMe} 
          onChange={(e) => setRememberMe(e.target.checked)} 
        />
        <button type="button" className="text-sm text-indigo-400 hover:underline cursor-pointer">
          Forget password?
        </button>
      </div>
      <SubmitButton />

      <p className="text-gray-400 text-sm mt-3 mb-11">
        Don't have an account?
        <a href="/register" className="text-indigo-400 hover:underline ml-1">click here</a>
      </p>
    </form>
  );
}