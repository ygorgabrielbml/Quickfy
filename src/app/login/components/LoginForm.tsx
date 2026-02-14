"use client"

import { Input } from "../../components/AuthInput";
import { AuthButton } from "../../components/AuthButton";
import { RememberMeCheckbox } from "./RememberMe";
import { useState } from 'react';

export function LoginForm() {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      const result = await response.json();

      if (!response.ok) {
        alert(result.error || "Invalid credentials");
        return;
      }
      
      // Salvar token e redirecionar
      localStorage.setItem('accessToken', result.accessToken);
      window.location.href = '/dashboard';
    } catch (error) {
      console.error("Login error:", error);
      alert("Connection error. Please try again.");
    }  
  };
  
  return (
    <form onSubmit={handleSubmit} className="w-full sm:w-87.5 text-center bg-white/6 border border-white/10 rounded-2xl px-8">
      <h1 className="text-white text-3xl mt-10 font-medium">Login</h1>
      <p className="text-gray-400 text-sm mt-2">Please sign in to continue</p>

      <div className="mt-6">
        <Input
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          required
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-white/75" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
              <rect x="2" y="4" width="20" height="16" rx="2" />
            </svg>
          }
        />
      </div>

      <div className="mt-4">
        <Input
          name="password"
          type={showPassword ? "text" : "password"}
          value={formData.password}
          onChange={handleChange}
          placeholder="Password"
          required
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-white/75" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
          }
          rightElement={
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 text-white/40 hover:text-white/60 transition-colors cursor-pointer"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                {showPassword ? (
                  <>
                    <path d="M9.88 9.88a3 3 0 1 0 4.24 4.24" />
                    <path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68" />
                    <path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61" />
                    <line x1="2" x2="22" y1="2" y2="22" />
                  </>
                ) : (
                  <>
                    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                    <circle cx="12" cy="12" r="3" />
                  </>
                )}
              </svg>
            </button>
          }
        />
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

      <AuthButton>
        Login
      </AuthButton>

      <p className="text-gray-400 text-sm mt-3 mb-11">
        Don't have an account?
        <a href="/register" className="text-indigo-400 hover:underline ml-1">click here</a>
      </p>
    </form>
  );
}