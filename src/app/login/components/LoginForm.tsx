import { RememberMe } from "./RememberMe";
import { Input } from "../../components/Input";
import { AuthButton } from "../../components/AuthButton";

export function LoginForm(){
  return (
    <>
      {/* Form */}
      <form className="flex flex-col gap-4">
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