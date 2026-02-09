import { RegisterHeader } from "./RegisterHeader"
import { RegisterForm } from "./RegisterForm"
import { AuthLink } from "../../components/AuthLink"

export function RegisterCard(){
  return (
    <div
      className="w-full max-w-md
              bg-zinc-900/40 backdrop-blur-xl
              border border-white/10
              rounded-3xl p-10
              shadow-2xl shadow-black/50
              text-zinc-100">
      
        <RegisterHeader/>
        <RegisterForm/>
        <AuthLink 
          text="Already have an account?" 
          linkText="Sign in instead" 
          href="/login" 
        />
    </div>
  )
}
