interface AuthButtonProps {
  children: React.ReactNode;
  type?: 'submit' | 'button';
  disabled?: boolean; 
}

export function AuthButton({ children, type = 'submit', disabled }: AuthButtonProps) {
  return (
    <button 
      type={type}
      disabled={disabled}
      className="mt-6 w-full h-11 rounded-full text-white bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed transition cursor-pointer"
    >
      {children}
    </button>
  );
}