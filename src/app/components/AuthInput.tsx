import { forwardRef } from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  type: string;
  placeholder: string;
  icon: React.ReactNode;
  rightElement?: React.ReactNode;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { type, placeholder, icon, rightElement, ...rest },
  ref
) {
  return (
    <div className="flex items-center w-full bg-white/5 ring-2 ring-white/10 focus-within:ring-indigo-500/60 h-12 rounded-lg overflow-hidden pl-6 gap-2 transition-all relative">
      {icon}
      <input
        ref={ref}
        type={type}
        placeholder={placeholder}
        {...rest}
        className="w-full bg-transparent text-white placeholder-white/60 border-none outline-none pr-10 caret-white"
      />
      {rightElement}
    </div>
  );
});
