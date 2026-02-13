'use client'
import { useRouter } from 'next/navigation'
import { LoginForm } from "./LoginForm";
import { LoginHeader } from "./LoginHeader";
import { AuthLink } from "../../components/AuthLink";

export function LoginCard(){
  const router = useRouter()

  const handleLoginSuccess = (result: any) => {
    if (result.token) {
      localStorage.setItem('token', result.token);
    }

    router.push('/dashboard')
  }
  
  return (
    <div
      className="w-full max-w-sm
              bg-zinc-900/40 backdrop-blur-xl
              border border-white/10
              rounded-3xl p-8
              shadow-2xl shadow-black/50
              text-zinc-100">
                
      <LoginHeader/>
      <LoginForm onSubmit={handleLoginSuccess}/>
      
      <AuthLink 
        text="Don't have an account?" 
        linkText="Create account" 
        href="/register" 
      />
    </div>
  )
}