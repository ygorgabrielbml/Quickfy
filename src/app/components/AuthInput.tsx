interface InputProps {
  type: string;
  placeholder: string;
}

export function Input({ type, placeholder }: InputProps) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="w-full h-11 rounded-xl
              bg-zinc-800/50
              border border-white/10
              px-4 text-sm text-white
              placeholder:text-zinc-500
              focus:outline-none focus:border-white/20 focus:bg-zinc-800/60
              transition-all"
    />
  )
}
