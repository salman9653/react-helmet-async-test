import React from "react";
import { render, screen } from "@testing-library/react";
import { HelmetProvider } from "react-helmet-async";
import ContactPage from "./ContactPage";

/**
 * Unit tests for ContactPage component
 *
 * Requirements: 6.1, 6.2
 */

describe("ContactPage", () => {
  const renderContactPage = () => {
    return render(
      <HelmetProvider>
        <ContactPage />
      </HelmetProvider>
    );
  };

  test("renders without errors", () => {
    renderContactPage();
    expect(screen.getByRole("heading", { level: 1 })).toBeInTheDocument();
  });

  test("heading is present", () => {
    renderContactPage();
    const heading = screen.getByRole("heading", {
      level: 1,
      name: /contact us/i,
    });
    expect(heading).toBeInTheDocument();
  });

  test("contact information is displayed", () => {
    renderContactPage();

    // Check for main contact section
    expect(
      screen.getByRole("heading", { level: 2, name: /get in touch/i })
    ).toBeInTheDocument();

    // Check for email contact information
    expect(
      screen.getByRole("heading", { level: 3, name: /^email$/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /contact@reactlandingapp\.com/i })
    ).toBeInTheDocument();

    // Check for technical support information
    expect(
      screen.getByRole("heading", { level: 3, name: /technical support/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /support@reactlandingapp\.com/i })
    ).toBeInTheDocument();

    // Check for business inquiries information
    expect(
      screen.getByRole("heading", { level: 3, name: /business inquiries/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /business@reactlandingapp\.com/i })
    ).toBeInTheDocument();

    // Check for office hours section
    expect(
      screen.getByRole("heading", { level: 2, name: /office hours/i })
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Monday through Friday, 9:00 AM to 5:00 PM EST/i)
    ).toBeInTheDocument();

    // Check for social media section
    expect(
      screen.getByRole("heading", { level: 2, name: /social media/i })
    ).toBeInTheDocument();
    expect(screen.getByText(/Twitter: @ReactLandingApp/i)).toBeInTheDocument();

    // Check for feedback section
    expect(
      screen.getByRole("heading", { level: 2, name: /feedback/i })
    ).toBeInTheDocument();
  });
});
