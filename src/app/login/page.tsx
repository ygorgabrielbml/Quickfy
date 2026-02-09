import { AcrylicBackground } from "../components/AcrylicBackground";
import { LoginCard } from "./components/LoginCard";

export default function LoginPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-black">
      <AcrylicBackground/>

      <div className="relative min-h-screen flex items-center justify-center px-4">
        <LoginCard/>
      </div>
    </div>
  );
}