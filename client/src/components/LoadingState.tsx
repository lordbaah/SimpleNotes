interface LoadingStateProps {
  message?: string;
  className?: string;
}

const LoadingState = ({
  message = 'Loading notes...',
  className,
}: LoadingStateProps) => {
  return (
    <div
      className={`flex flex-col items-center justify-center py-12 ${
        className || ''
      }`}
    >
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mb-4"></div>
      <p className="text-gray-600 text-sm font-medium">{message}</p>
    </div>
  );
};

export default LoadingState;
