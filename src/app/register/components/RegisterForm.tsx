"use client"

import { Input } from "@/app/components/AuthInput";
import { AuthButton } from "@/app/components/AuthButton";
import { PasswordToggle } from "@/app/components/PasswordToggle";
import { useState } from 'react';

export function RegisterForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    userType: '' as '' | 'customer' | 'company'
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };
  
  return (
    <form onSubmit={handleSubmit} className="w-full sm:w-87.5 text-center bg-white/6 border border-white/10 rounded-xl px-8">
      <h1 className="text-white text-3xl mt-10 font-medium">Criar conta</h1>
      <p className="text-gray-400 text-sm mt-2">Preencha os dados para continuar</p>

      <div className="mt-6">
        <Input
          name="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
          autoComplete="name"
          placeholder="Nome"
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
          autoComplete="email"
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
          autoComplete="new-password"
          placeholder="Senha"
          required
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-white/75" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
          }
          rightElement={
            <PasswordToggle 
              showPassword={showPassword} 
              onToggle={() => setShowPassword(!showPassword)} 
            />
          }
        />
      </div>

      <div className="mt-4">
        <div className="flex gap-3">
          <button
            type="button"
            onClick={() => setFormData((prev) => ({ ...prev, userType: "customer" }))}
            className={`flex-1 py-3 px-4 rounded-lg border transition-all cursor-pointer ${
              formData.userType === 'customer'
                ? 'bg-indigo-500/20 border-indigo-500 text-white'
                : 'bg-white/5 border-white/10 text-white/60 hover:border-white/20'
            }`}
          >
            <div className="flex flex-col items-center gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
              <span className="text-sm font-medium">Cliente</span>
            </div>
          </button>
          <button
            type="button"
            onClick={() => setFormData((prev) => ({ ...prev, userType: "company" }))}
            className={`flex-1 py-3 px-4 rounded-lg border transition-all cursor-pointer ${
              formData.userType === 'company'
                ? 'bg-indigo-500/20 border-indigo-500 text-white'
                : 'bg-white/5 border-white/10 text-white/60 hover:border-white/20'
            }`}
          >
            <div className="flex flex-col items-center gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
              </svg>
              <span className="text-sm font-medium">Empresa</span>
            </div>
          </button>
        </div>
      </div>

      <AuthButton>
        Cadastrar
      </AuthButton>

      <p className="text-gray-400 text-sm mt-3 mb-11">
        Já tem uma conta?
        <a href="/login" className="text-indigo-400 hover:underline ml-1">clique aqui</a>
      </p>
    </form>
  );
}
