"use client"

import { Input } from "../../components/AuthInput";
import { AuthButton } from "../../components/AuthButton";
import { useState } from 'react';

export function RegisterForm() {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      const result = await response.json();

      if (!response.ok) {
        alert(result.error || "Registration failed");
        return;
      }
      
      alert("Account created successfully!");
      window.location.href = '/login';
    } catch (error) {
      console.error("Registration error:", error);
      alert("Connection error. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full sm:w-87.5 text-center bg-white/6 border border-white/10 rounded-2xl px-8">
      <h1 className="text-white text-3xl mt-10 font-medium">Sign up</h1>
      <p className="text-gray-400 text-sm mt-2">Please sign in to continue</p>

      <div className="mt-6">
        <Input
          name="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
          required
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-white/60" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="8" r="5" />
              <path d="M20 21a8 8 0 0 0-16 0" />
            </svg>
          }
        />
      </div>

      <div className="mt-4">
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
          type="password"
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
        />
      </div>

      <AuthButton>
        Sign up
      </AuthButton>

      <p className="text-gray-400 text-sm mt-3 mb-11">
        Already have an account?
        <a href="/login" className="text-indigo-400 hover:underline ml-1">click here</a>
      </p>
    </form>
  );
}