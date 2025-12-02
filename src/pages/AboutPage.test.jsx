import React from "react";
import { render, screen } from "@testing-library/react";
import { HelmetProvider } from "react-helmet-async";
import AboutPage from "./AboutPage";

/**
 * Unit tests for AboutPage component
 *
 * Requirements: 5.1, 5.2
 */

describe("AboutPage", () => {
  const renderAboutPage = () => {
    return render(
      <HelmetProvider>
        <AboutPage />
      </HelmetProvider>
    );
  };

  test("renders without errors", () => {
    renderAboutPage();
    expect(screen.getByRole("heading", { level: 1 })).toBeInTheDocument();
  });

  test("heading is present", () => {
    renderAboutPage();
    const heading = screen.getByRole("heading", {
      level: 1,
      name: /about us/i,
    });
    expect(heading).toBeInTheDocument();
  });

  test("descriptive content is displayed", () => {
    renderAboutPage();

    // Check for key descriptive content about the organization/purpose
    expect(
      screen.getByText(/demonstrating modern web development practices/i)
    ).toBeInTheDocument();

    // Check for mission section
    expect(
      screen.getByRole("heading", { level: 2, name: /our mission/i })
    ).toBeInTheDocument();

    expect(
      screen.getByText(
        /proper metadata management can enhance web applications/i
      )
    ).toBeInTheDocument();

    // Check for technology stack section
    expect(
      screen.getByRole("heading", { level: 2, name: /technology stack/i })
    ).toBeInTheDocument();

    expect(screen.getByText(/React 18:/)).toBeInTheDocument();
    expect(screen.getByText(/React Router DOM v6:/)).toBeInTheDocument();

    // Check for SEO section
    expect(
      screen.getByRole("heading", { level: 2, name: /why seo matters/i })
    ).toBeInTheDocument();

    expect(
      screen.getByText(
        /Search engines can accurately index and rank your content/i
      )
    ).toBeInTheDocument();
  });
});
