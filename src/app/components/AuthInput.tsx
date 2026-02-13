interface InputProps {
  id?: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  label?: string;
  icon?: string;
  required?: boolean;
  rightElement?: React.ReactNode; 
}

export function Input({ 
  id, 
  type, 
  value, 
  onChange, 
  placeholder, 
  label, 
  icon, 
  required = false,
  rightElement 
}: InputProps) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-white/70 mb-2">
        {label}
      </label>
      <div className="relative">
        <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-white/40 text-[16px]">
          {icon}
        </span>
        <input
          id={id}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          className="w-full h-11 rounded-xl
              bg-zinc-800/50
              border border-white/10
              pl-10 pr-4 text-sm text-white
              placeholder:text-zinc-500
              focus:outline-none focus:border-white/20 focus:bg-zinc-800/60
              transition-all"
        />
        {rightElement}
      </div>
    </div>
  );
}

