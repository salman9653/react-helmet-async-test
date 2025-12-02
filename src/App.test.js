import { render, screen } from "@testing-library/react";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import NotFoundPage from "./pages/NotFoundPage";

/**
 * Routing Tests for App Component
 *
 * Tests that verify correct routing behavior for all application routes.
 * Requirements: 1.1, 1.2, 1.3, 1.5
 */

// Helper function to render app with specific route
const renderWithRouter = (route) => {
  return render(
    <HelmetProvider>
      <MemoryRouter initialEntries={[route]}>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact-us" element={<ContactPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Layout>
      </MemoryRouter>
    </HelmetProvider>
  );
};

describe("App routing", () => {
  test('navigating to "/" renders HomePage', () => {
    renderWithRouter("/");

    // HomePage should display "Welcome to React Landing App" heading
    expect(
      screen.getByRole("heading", { name: /Welcome to React Landing App/i })
    ).toBeInTheDocument();
  });

  test('navigating to "/about" renders AboutPage', () => {
    renderWithRouter("/about");

    // AboutPage should display "About Us" heading
    expect(
      screen.getByRole("heading", { name: /^About Us$/i })
    ).toBeInTheDocument();
  });

  test('navigating to "/contact-us" renders ContactPage', () => {
    renderWithRouter("/contact-us");

    // ContactPage should display "Contact Us" heading
    expect(
      screen.getByRole("heading", { name: /^Contact Us$/i })
    ).toBeInTheDocument();
  });

  test("navigating to invalid route renders NotFoundPage", () => {
    renderWithRouter("/invalid-route");

    // NotFoundPage should display "404 - Page Not Found" heading
    expect(
      screen.getByRole("heading", { name: /404 - Page Not Found/i })
    ).toBeInTheDocument();
  });
});
