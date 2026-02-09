import { LoginForm } from "./LoginForm";
import { LoginHeader } from "./LoginHeader";
import { AuthLink } from "../../components/AuthLink";

export function LoginCard(){
  return (
    <div
      className="w-full max-w-sm
              bg-zinc-900/40 backdrop-blur-xl
              border border-white/10
              rounded-3xl p-8
              shadow-2xl shadow-black/50
              text-zinc-100">
                
      <LoginHeader/>
      <LoginForm/>
      <AuthLink 
        text="Don't have an account?" 
        linkText="Create account" 
        href="/register" 
      />
    </div>
  )
}