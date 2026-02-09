import { Input } from "../../components/Input";
import { AuthButton } from "../../components/AuthButton";

export function RegisterForm() {
  return (
    <form className="space-y-5">
      {/* Name field */}
        <Input type="text" placeholder="Full name" />

      {/* Email field */}
        <Input type="text" placeholder="Email address" />

      {/* Password field */}
        <Input type="password" placeholder="Password" />

      {/* Confirm Password field */}
        <Input type="password" placeholder="Confirm Password" />

      {/* Submit button */}
      <div className="mt-6">
        <AuthButton>Create account</AuthButton>
      </div>
    </form>
  )
}