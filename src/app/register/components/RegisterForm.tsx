"use client"

import { Input } from "../../components/AuthInput";
import { AuthButton } from "../../components/AuthButton";
import { GoogleButton } from "../../components/GoogleButton";
import { Divider } from "../../components/Divider";
import { useState } from 'react';

export function RegisterForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }

    try {
      const response = await fetch("http://localhost:3000/api/register", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({name, email, password})
      });

      const result = await response.json();

      if (!response.ok) {
        alert(result.error || "Registration failed");
        return;
      }
      
      alert("Account created successfully!");
    } catch (error) {
      console.error("Registration error:", error);
      alert("Connection error. Please try again.");
    }
  };

  const togglePasswordVisibility = () => setShowPassword(!showPassword);
  const toggleConfirmPasswordVisibility = () => setShowConfirmPassword(!showConfirmPassword);

  return (
    <>
      <form onSubmit={handleSubmit} className="space-y-5">
      <Input 
        id="name"
        type="text" 
        placeholder="Full name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        icon="person"
        required
      />

      <Input 
        id="email"
        type="email" 
        placeholder="Email address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        icon="mail"
        required
      />

      <Input 
        id="password"
        type={showPassword ? 'text' : 'password'} 
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
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

      <Input 
        id="confirmPassword"
        type={showConfirmPassword ? 'text' : 'password'} 
        placeholder="Confirm Password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        icon="lock"
        required
        rightElement={
          <button
            type="button"
            onClick={toggleConfirmPasswordVisibility}
            className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center justify-center text-white/40 hover:text-white/60 transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-[16px] leading-none">visibility</span>
          </button>
        }
      />

        <div className="mt-6">
          <AuthButton>Create account</AuthButton>
        </div>
      </form>

      <Divider />
      <GoogleButton text="Sign up with Google" />
    </>
  )
}