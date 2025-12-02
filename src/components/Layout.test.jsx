import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Layout from "./Layout";

/**
 * Unit tests for Layout component
 *
 * Tests that navigation links are rendered and that Layout renders children correctly.
 *
 * Requirements: 4.3, 5.3, 6.3
 */

// Helper function to render Layout component with Router context
const renderLayout = (children) => {
  return render(
    <MemoryRouter>
      <Layout>{children}</Layout>
    </MemoryRouter>
  );
};

describe("Layout Component", () => {
  test("renders without crashing", () => {
    renderLayout(<div>Test Content</div>);
  });

  test("renders navigation links to all pages", () => {
    renderLayout(<div>Test Content</div>);

    // Check that all three navigation links are present
    const homeLink = screen.getByRole("link", { name: /home/i });
    const aboutLink = screen.getByRole("link", { name: /about/i });
    const contactLink = screen.getByRole("link", { name: /contact us/i });

    expect(homeLink).toBeInTheDocument();
    expect(aboutLink).toBeInTheDocument();
    expect(contactLink).toBeInTheDocument();
  });

  test("navigation links have correct href attributes", () => {
    renderLayout(<div>Test Content</div>);

    const homeLink = screen.getByRole("link", { name: /home/i });
    const aboutLink = screen.getByRole("link", { name: /about/i });
    const contactLink = screen.getByRole("link", { name: /contact us/i });

    expect(homeLink).toHaveAttribute("href", "/");
    expect(aboutLink).toHaveAttribute("href", "/about");
    expect(contactLink).toHaveAttribute("href", "/contact-us");
  });

  test("renders children correctly", () => {
    const testContent = "This is test content for the layout";
    renderLayout(<div>{testContent}</div>);

    expect(screen.getByText(testContent)).toBeInTheDocument();
  });

  test("renders multiple children correctly", () => {
    renderLayout(
      <>
        <h1>Test Heading</h1>
        <p>Test paragraph</p>
        <button>Test Button</button>
      </>
    );

    expect(
      screen.getByRole("heading", { name: /test heading/i })
    ).toBeInTheDocument();
    expect(screen.getByText(/test paragraph/i)).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /test button/i })
    ).toBeInTheDocument();
  });

  test("renders navigation as a list", () => {
    renderLayout(<div>Test Content</div>);

    const navList = screen.getByRole("list");
    expect(navList).toBeInTheDocument();

    const navItems = screen.getAllByRole("listitem");
    expect(navItems).toHaveLength(3);
  });

  test("navigation structure is correct", () => {
    const { container } = renderLayout(<div>Test Content</div>);

    const nav = container.querySelector("nav");
    expect(nav).toBeInTheDocument();
    expect(nav).toHaveClass("layout-nav");

    const main = container.querySelector("main");
    expect(main).toBeInTheDocument();
    expect(main).toHaveClass("layout-content");
  });
});
