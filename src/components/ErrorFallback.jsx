const ErrorFallback = ({ error, resetErrorBoundary }) => {
  return (
    <div className="error-boundary">

      <div className="error-card">

        <h1>Something went wrong</h1>

        <p className="error-message">
          {error.message}
        </p>

        <button
          className="retry-btn"
          onClick={resetErrorBoundary}
        >
          Try Again
        </button>

      </div>

    </div>
  );
};

export default ErrorFallback;