import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Toaster } from "sonner";
import HomePage from "./pages/HomePage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import TermsOfServicePage from "./pages/TermsOfServicePage";
import DataDeletionPage from "./pages/DataDeletionPage";
import { AuthProvider } from "./contexts/AuthContext";

function Placeholder({ title }) {
  return (
    <div className="min-h-screen grid place-items-center bg-[#FAFAFA] text-slate-700">
      <div className="text-center">
        <h1 className="text-2xl font-['Outfit'] font-semibold">{title}</h1>
        <p className="mt-2 text-sm">Standalone website build placeholder route.</p>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Toaster position="top-right" richColors />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/privacy" element={<PrivacyPolicyPage />} />
          <Route path="/terms" element={<TermsOfServicePage />} />
          <Route path="/data-deletion" element={<DataDeletionPage />} />
          <Route path="/login" element={<Placeholder title="Login" />} />
          <Route path="/register" element={<Placeholder title="Register" />} />
          <Route path="/checkout" element={<Placeholder title="Checkout" />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}
