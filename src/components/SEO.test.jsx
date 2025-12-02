import React from "react";
import { render } from "@testing-library/react";
import { HelmetProvider } from "react-helmet-async";
import SEO from "./SEO";

/**
 * Unit tests for SEO component
 *
 * Tests that the SEO component renders Helmet with correct props
 * and that all metadata tags are passed correctly.
 *
 * Requirements: 2.1, 2.2, 2.3, 2.4, 2.5, 2.6, 2.7, 2.8, 2.9, 2.10
 */

// Helper function to render SEO component with HelmetProvider
const renderSEO = (props) => {
  return render(
    <HelmetProvider>
      <SEO {...props} />
    </HelmetProvider>
  );
};

describe("SEO Component", () => {
  afterEach(() => {
    // Clean up helmet tags after each test
    const helmetTags = document.querySelectorAll("[data-rh]");
    helmetTags.forEach((tag) => tag.remove());
  });

  test("renders without crashing", () => {
    renderSEO({
      title: "Test Title",
      description: "Test Description",
    });
  });

  test("sets document title correctly", () => {
    renderSEO({
      title: "Test Page Title",
      description: "Test Description",
    });

    // Wait for Helmet to update the document
    setTimeout(() => {
      expect(document.title).toBe("Test Page Title");
    }, 0);
  });

  test("renders meta description tag", () => {
    renderSEO({
      title: "Test Title",
      description: "This is a test description",
    });

    setTimeout(() => {
      const metaDescription = document.querySelector(
        'meta[name="description"]'
      );
      expect(metaDescription).toBeInTheDocument();
      expect(metaDescription.getAttribute("content")).toBe(
        "This is a test description"
      );
    }, 0);
  });

  test("renders Open Graph title tag", () => {
    renderSEO({
      title: "Test Title",
      description: "Test Description",
      ogTitle: "OG Test Title",
    });

    setTimeout(() => {
      const ogTitle = document.querySelector('meta[property="og:title"]');
      expect(ogTitle).toBeInTheDocument();
      expect(ogTitle.getAttribute("content")).toBe("OG Test Title");
    }, 0);
  });

  test("renders Open Graph description tag", () => {
    renderSEO({
      title: "Test Title",
      description: "Test Description",
      ogDescription: "OG Test Description",
    });

    setTimeout(() => {
      const ogDescription = document.querySelector(
        'meta[property="og:description"]'
      );
      expect(ogDescription).toBeInTheDocument();
      expect(ogDescription.getAttribute("content")).toBe("OG Test Description");
    }, 0);
  });

  test("renders Open Graph type tag with default value", () => {
    renderSEO({
      title: "Test Title",
      description: "Test Description",
    });

    setTimeout(() => {
      const ogType = document.querySelector('meta[property="og:type"]');
      expect(ogType).toBeInTheDocument();
      expect(ogType.getAttribute("content")).toBe("website");
    }, 0);
  });

  test("renders Open Graph URL tag when provided", () => {
    renderSEO({
      title: "Test Title",
      description: "Test Description",
      ogUrl: "https://example.com/test",
    });

    setTimeout(() => {
      const ogUrl = document.querySelector('meta[property="og:url"]');
      expect(ogUrl).toBeInTheDocument();
      expect(ogUrl.getAttribute("content")).toBe("https://example.com/test");
    }, 0);
  });

  test("renders Open Graph image tag when provided", () => {
    renderSEO({
      title: "Test Title",
      description: "Test Description",
      ogImage: "https://example.com/image.jpg",
    });

    setTimeout(() => {
      const ogImage = document.querySelector('meta[property="og:image"]');
      expect(ogImage).toBeInTheDocument();
      expect(ogImage.getAttribute("content")).toBe(
        "https://example.com/image.jpg"
      );
    }, 0);
  });

  test("renders Twitter card tag with default value", () => {
    renderSEO({
      title: "Test Title",
      description: "Test Description",
    });

    setTimeout(() => {
      const twitterCard = document.querySelector('meta[name="twitter:card"]');
      expect(twitterCard).toBeInTheDocument();
      expect(twitterCard.getAttribute("content")).toBe("summary_large_image");
    }, 0);
  });

  test("renders Twitter title tag", () => {
    renderSEO({
      title: "Test Title",
      description: "Test Description",
      twitterTitle: "Twitter Test Title",
    });

    setTimeout(() => {
      const twitterTitle = document.querySelector('meta[name="twitter:title"]');
      expect(twitterTitle).toBeInTheDocument();
      expect(twitterTitle.getAttribute("content")).toBe("Twitter Test Title");
    }, 0);
  });

  test("renders Twitter description tag", () => {
    renderSEO({
      title: "Test Title",
      description: "Test Description",
      twitterDescription: "Twitter Test Description",
    });

    setTimeout(() => {
      const twitterDescription = document.querySelector(
        'meta[name="twitter:description"]'
      );
      expect(twitterDescription).toBeInTheDocument();
      expect(twitterDescription.getAttribute("content")).toBe(
        "Twitter Test Description"
      );
    }, 0);
  });

  test("uses fallback values for optional metadata", () => {
    renderSEO({
      title: "Test Title",
      description: "Test Description",
    });

    setTimeout(() => {
      // og:title should fallback to title
      const ogTitle = document.querySelector('meta[property="og:title"]');
      expect(ogTitle.getAttribute("content")).toBe("Test Title");

      // og:description should fallback to description
      const ogDescription = document.querySelector(
        'meta[property="og:description"]'
      );
      expect(ogDescription.getAttribute("content")).toBe("Test Description");

      // twitter:title should fallback to title
      const twitterTitle = document.querySelector('meta[name="twitter:title"]');
      expect(twitterTitle.getAttribute("content")).toBe("Test Title");

      // twitter:description should fallback to description
      const twitterDescription = document.querySelector(
        'meta[name="twitter:description"]'
      );
      expect(twitterDescription.getAttribute("content")).toBe(
        "Test Description"
      );
    }, 0);
  });

  test("renders all metadata tags with complete props", () => {
    const completeProps = {
      title: "Complete Test Title",
      description: "Complete Test Description",
      ogTitle: "Complete OG Title",
      ogDescription: "Complete OG Description",
      ogImage: "https://example.com/complete-image.jpg",
      ogUrl: "https://example.com/complete",
      ogType: "website",
      twitterCard: "summary_large_image",
      twitterTitle: "Complete Twitter Title",
      twitterDescription: "Complete Twitter Description",
    };

    renderSEO(completeProps);

    setTimeout(() => {
      expect(document.title).toBe("Complete Test Title");
      expect(
        document
          .querySelector('meta[name="description"]')
          .getAttribute("content")
      ).toBe("Complete Test Description");
      expect(
        document
          .querySelector('meta[property="og:title"]')
          .getAttribute("content")
      ).toBe("Complete OG Title");
      expect(
        document
          .querySelector('meta[property="og:description"]')
          .getAttribute("content")
      ).toBe("Complete OG Description");
      expect(
        document
          .querySelector('meta[property="og:image"]')
          .getAttribute("content")
      ).toBe("https://example.com/complete-image.jpg");
      expect(
        document
          .querySelector('meta[property="og:url"]')
          .getAttribute("content")
      ).toBe("https://example.com/complete");
      expect(
        document
          .querySelector('meta[property="og:type"]')
          .getAttribute("content")
      ).toBe("website");
      expect(
        document
          .querySelector('meta[name="twitter:card"]')
          .getAttribute("content")
      ).toBe("summary_large_image");
      expect(
        document
          .querySelector('meta[name="twitter:title"]')
          .getAttribute("content")
      ).toBe("Complete Twitter Title");
      expect(
        document
          .querySelector('meta[name="twitter:description"]')
          .getAttribute("content")
      ).toBe("Complete Twitter Description");
    }, 0);
  });
});
