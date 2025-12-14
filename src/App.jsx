import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import CompanyPage from "./pages/CompanyPage";
import DriverPage from "./pages/DriverPage";

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/companies" element={<CompanyPage />} />
          <Route path="/drivers" element={<DriverPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
