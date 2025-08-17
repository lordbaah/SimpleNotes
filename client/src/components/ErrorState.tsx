import { AlertCircle } from 'lucide-react';

interface ErrorStateProps {
  error: Error;
  className?: string;
}

const ErrorState = ({ error, className }: ErrorStateProps) => {
  return (
    <div
      className={`flex items-center justify-center gap-2 text-red-600 py-8 ${
        className || ''
      }`}
    >
      <AlertCircle className="h-5 w-5" />
      <span>{error.message}</span>
    </div>
  );
};

export default ErrorState;
