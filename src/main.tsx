import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import "./index.css"
import App from "./App.tsx"
import Careers from "./careers.tsx"
import Partnership from "./partnership.tsx"
import TermsOfService from "./TermsOfService.tsx"
import PrivacyPolicy from "./PrivacyPolicy.tsx"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/partnership" element={<Partnership />} />
        <Route path="/TermsOfService" element={<TermsOfService />} />
        <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
)