import { RememberMe } from "./RememberMe";
import { Input } from "../../components/AuthInput";
import { AuthButton } from "../../components/AuthButton";
import { useState } from 'react';

export function LoginForm({ onSubmit }){
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = async (e: Event) => {
    e.preventDefault();
    const response = await fetch("http://localhost:3000/api/login", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({username, password})
    });

    const result = await response.json();
    if (result.success) {
      onSubmit(result);
    } else {
      alert ("Invalid Crendentials")
    }
  }

  return (
    <>
      {/* Form */}
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <Input type="text" placeholder="Username" />
        <Input type="password" placeholder="Password" />

        <RememberMe/>
        <div className="mt-2">
          <AuthButton>Sign in</AuthButton>
        </div>
      </form>
    </>
  )
}