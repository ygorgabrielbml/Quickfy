interface InputProps {
  name: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  icon: React.ReactNode;
  required?: boolean;
  rightElement?: React.ReactNode;
}

export function Input({ name, type, value, onChange, placeholder, icon, required = false, rightElement }: InputProps) {
  return (
    <div className="flex items-center w-full bg-white/5 ring-2 ring-white/10 focus-within:ring-indigo-500/60 h-12 rounded-full overflow-hidden pl-6 gap-2 transition-all relative">
      {icon}
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full bg-transparent text-white placeholder-white/60 border-none outline-none pr-10"
      />
      {rightElement}
    </div>
  );
}

