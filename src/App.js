import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import NotFoundPage from "./pages/NotFoundPage";
import "./App.css";

/**
 * App Component
 *
 * Root component that sets up routing and HelmetProvider context.
 * Wraps all routes with Layout component for consistent navigation.
 *
 * Requirements: 1.1, 1.2, 1.3, 1.4, 1.5, 3.2, 3.3
 */
function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact-us" element={<ContactPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
