interface AuthButtonProps {
  children: React.ReactNode;
  type?: 'submit' | 'button';
}

export function AuthButton({ children, type = 'submit' }: AuthButtonProps) {
  return (
    <button 
      type={type} 
      className="mt-6 w-full h-11 rounded-full text-white bg-indigo-600 hover:bg-indigo-500 transition cursor-pointer"
    >
      {children}
    </button>
  );
}
