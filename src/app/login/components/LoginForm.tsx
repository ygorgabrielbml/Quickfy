"use client"

import { RememberMeCheckbox } from "./RememberMe";
import { Input } from "../../components/AuthInput";
import { AuthButton } from "../../components/AuthButton";
import { GoogleButton } from "../../components/GoogleButton";
import { Divider } from "../../components/Divider";
import { useState } from 'react';

export function LoginForm({ onSubmit }: { onSubmit: (result:any) => void}){
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    try {
      const response = await fetch("http://localhost:3000/api/login", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({username, password})
      });

      const result = await response.json();

      if (!response.ok) {
        alert(result.error || "Invalid credentials");
        return;
      } else {
        alert ("Invalid Crendentials")
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("Connection error. Please try again.");
    }  
  }
  
  const togglePasswordVisibility = () => setShowPassword(!showPassword);
  
  return (
    <>
      {/* Form */}
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <Input 
          id="username"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          icon="badge"
          required
          />
        <Input 
          id="password"
          type={showPassword ? 'text' : 'password'}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          icon="lock"
          required
          rightElement={
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center justify-center text-white/40 hover:text-white/60 transition-colors cursor-pointer"
            >
              <span className="material-symbols-outlined text-[16px] leading-none">visibility</span>
            </button>
          }
          />

        <RememberMeCheckbox 
          checked={rememberMe} 
          onChange={(e) => setRememberMe(e.target.checked)} 
        />

        <div className="mt-2">
          <AuthButton>Sign in</AuthButton>
        </div>
      </form>

      <Divider />
      <GoogleButton text="Continue with Google" />
    </>
  )
}