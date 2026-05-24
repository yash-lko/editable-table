import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { TableProvider } from "./context/TableContext";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "./components/ErrorFallback";
import App from "./App";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <TableProvider>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
      <App />
      </ErrorBoundary>
    </TableProvider>
  </StrictMode>
);
