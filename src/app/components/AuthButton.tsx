interface AuthButtonProps {
  children: React.ReactNode;
}

export function AuthButton({ children }: AuthButtonProps) {
  return (
    <button
      type="submit"
      className="w-full h-11 rounded-xl font-medium text-sm
              bg-zinc-100 text-black
              hover:bg-zinc-200
              active:scale-95
              transition-all cursor-pointer"
    >
      {children}
    </button>
  )
}
