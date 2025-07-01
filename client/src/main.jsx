import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Router from "./routes/Router";
import { Toaster } from "sonner";
import "./index.css";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <Toaster position="bottom-right" />
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </AuthProvider>
  </QueryClientProvider>
  // </StrictMode>
);
