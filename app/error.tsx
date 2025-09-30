'use client';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen bg-bg flex items-center justify-center p-4">
      <div className="glass-card p-8 max-w-md w-full text-center">
        <div className="text-6xl mb-4">⚠️</div>
        <h2 className="text-2xl font-bold mb-4">Something went wrong!</h2>
        <p className="text-muted mb-6">{error.message}</p>
        <button onClick={reset} className="btn-primary">
          Try Again
        </button>
      </div>
    </div>
  );
}
