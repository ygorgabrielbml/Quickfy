import { FieldError as FieldErrorType } from "@/types/errors";

interface FieldErrorProps {
  message?: FieldErrorType;
}

export function FieldError({ message }: FieldErrorProps) {
  if (!message || message.length === 0) return null;
  
  return (
    <p className="text-red-400 text-xs mt-1 text-left">
      {message[0]}
    </p>
  );
}
