import { AcrylicBackground } from "../components/AcrylicBackground";
import { RegisterCard } from "./components/RegisterCard";


export default function RegisterPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-black">
      <AcrylicBackground/>

      <div className="relative min-h-screen flex items-center justify-center px-4">
        <RegisterCard/>
      </div>
    </div>
  );
}