import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import Router from "./routes/Router";
import { Toaster } from "sonner";
import "./index.css";

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <AuthProvider>
    <Toaster position="top-right" />
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  </AuthProvider>
  // </StrictMode>
);
