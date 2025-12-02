import React from "react";
import { render, screen } from "@testing-library/react";
import { HelmetProvider } from "react-helmet-async";
import HomePage from "./HomePage";

/**
 * Unit tests for HomePage component
 *
 * Requirements: 4.1, 4.2
 */

describe("HomePage", () => {
  const renderHomePage = () => {
    return render(
      <HelmetProvider>
        <HomePage />
      </HelmetProvider>
    );
  };

  test("renders without errors", () => {
    renderHomePage();
    expect(screen.getByRole("heading", { level: 1 })).toBeInTheDocument();
  });

  test("heading is present", () => {
    renderHomePage();
    const heading = screen.getByRole("heading", {
      level: 1,
      name: /welcome to react landing app/i,
    });
    expect(heading).toBeInTheDocument();
  });

  test("descriptive content is displayed", () => {
    renderHomePage();

    // Check for key descriptive content
    expect(
      screen.getByText(/modern React 18 single-page application/i)
    ).toBeInTheDocument();

    expect(
      screen.getByText(
        /react-helmet-async for managing document head metadata/i
      )
    ).toBeInTheDocument();

    expect(
      screen.getByText(/Built with Create React App and React Router DOM/i)
    ).toBeInTheDocument();

    // Check for Features section
    expect(
      screen.getByRole("heading", { level: 2, name: /features/i })
    ).toBeInTheDocument();

    // Check for feature list items
    expect(
      screen.getByText(/React 18 with modern hooks and best practices/i)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Client-side routing with React Router DOM v6/i)
    ).toBeInTheDocument();
  });
});
