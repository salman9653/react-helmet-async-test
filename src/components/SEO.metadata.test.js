import React from "react";
import { render } from "@testing-library/react";
import { HelmetProvider } from "react-helmet-async";
import * as fc from "fast-check";
import SEO from "./SEO";
import { pageMetadata } from "../config/metadata";

/**
 * Property-Based Test for Metadata Completeness
 *
 * Feature: react-landing-app, Property 1: Metadata completeness for all pages
 *
 * This test verifies that for any page in the application (home, about, contact-us),
 * when that page is loaded, all required metadata tags are present in the document head
 * with non-empty, page-specific values.
 *
 * Validates: Requirements 2.1, 2.2, 2.3, 2.4, 2.5, 2.6, 2.7, 2.8, 2.9, 2.10, 7.1
 */
describe("Property-Based Tests: Metadata Completeness", () => {
  afterEach(() => {
    // Clean up helmet tags after each test
    const helmetTags = document.querySelectorAll("[data-rh]");
    helmetTags.forEach((tag) => tag.remove());
  });

  /**
   * Helper function to get metadata tag content from document head
   */
  const getMetaContent = (selector) => {
    const element = document.querySelector(selector);
    return element
      ? element.getAttribute("content") || element.textContent
      : null;
  };

  /**
   * Helper function to verify all metadata tags for a given page
   */
  const verifyMetadataCompleteness = (pageKey) => {
    const metadata = pageMetadata[pageKey];

    // Render SEO component with page metadata
    render(
      <HelmetProvider>
        <SEO
          title={metadata.title}
          description={metadata.description}
          ogTitle={metadata.ogTitle}
          ogDescription={metadata.ogDescription}
          ogImage={metadata.ogImage}
          ogUrl={metadata.ogUrl}
          ogType={metadata.ogType}
          twitterCard={metadata.twitterCard}
          twitterTitle={metadata.twitterTitle}
          twitterDescription={metadata.twitterDescription}
        />
      </HelmetProvider>
    );

    // Give helmet a moment to update the DOM
    return new Promise((resolve) => {
      setTimeout(() => {
        try {
          // Requirement 2.1: Document title
          const title = document.querySelector("title");
          expect(title).not.toBeNull();
          expect(title.textContent).toBeTruthy();
          expect(title.textContent.length).toBeGreaterThan(0);
          expect(title.textContent).toContain(metadata.title);

          // Requirement 2.2: Meta description
          const description = getMetaContent('meta[name="description"]');
          expect(description).not.toBeNull();
          expect(description).toBeTruthy();
          expect(description.length).toBeGreaterThan(0);

          // Requirement 2.3: Open Graph title
          const ogTitle = getMetaContent('meta[property="og:title"]');
          expect(ogTitle).not.toBeNull();
          expect(ogTitle).toBeTruthy();
          expect(ogTitle.length).toBeGreaterThan(0);

          // Requirement 2.4: Open Graph description
          const ogDescription = getMetaContent(
            'meta[property="og:description"]'
          );
          expect(ogDescription).not.toBeNull();
          expect(ogDescription).toBeTruthy();
          expect(ogDescription.length).toBeGreaterThan(0);

          // Requirement 2.5: Open Graph type
          const ogType = getMetaContent('meta[property="og:type"]');
          expect(ogType).not.toBeNull();
          expect(ogType).toBeTruthy();
          expect(ogType).toBe("website");

          // Requirement 2.6: Open Graph URL
          const ogUrl = getMetaContent('meta[property="og:url"]');
          expect(ogUrl).not.toBeNull();
          expect(ogUrl).toBeTruthy();
          expect(ogUrl.length).toBeGreaterThan(0);

          // Requirement 2.7: Open Graph image
          const ogImage = getMetaContent('meta[property="og:image"]');
          expect(ogImage).not.toBeNull();
          expect(ogImage).toBeTruthy();
          expect(ogImage.length).toBeGreaterThan(0);

          // Requirement 2.8: Twitter card
          const twitterCard = getMetaContent('meta[name="twitter:card"]');
          expect(twitterCard).not.toBeNull();
          expect(twitterCard).toBeTruthy();
          expect(twitterCard).toBe("summary_large_image");

          // Requirement 2.9: Twitter title
          const twitterTitle = getMetaContent('meta[name="twitter:title"]');
          expect(twitterTitle).not.toBeNull();
          expect(twitterTitle).toBeTruthy();
          expect(twitterTitle.length).toBeGreaterThan(0);

          // Requirement 2.10: Twitter description
          const twitterDescription = getMetaContent(
            'meta[name="twitter:description"]'
          );
          expect(twitterDescription).not.toBeNull();
          expect(twitterDescription).toBeTruthy();
          expect(twitterDescription.length).toBeGreaterThan(0);

          resolve(true);
        } catch (error) {
          resolve(false);
        }
      }, 0);
    });
  };

  /**
   * Property 1: Metadata completeness for all pages
   *
   * For any page in the application, all required metadata tags should be present
   * in the document head with non-empty, page-specific values.
   *
   * This test uses fast-check to generate 100+ test cases across all pages.
   */
  test("Property 1: All pages have complete metadata tags with non-empty values", async () => {
    // Create an arbitrary that generates page keys
    const pageArbitrary = fc.constantFrom("home", "about", "contact");

    await fc.assert(
      fc.asyncProperty(pageArbitrary, async (pageKey) => {
        const result = await verifyMetadataCompleteness(pageKey);
        return result;
      }),
      {
        numRuns: 100, // Configure test to run minimum 100 iterations
        verbose: true,
      }
    );
  });
});

/**
 * Property-Based Test for Unique Metadata
 *
 * Feature: react-landing-app, Property 3: Unique metadata per page
 *
 * This test verifies that for any two different pages in the application,
 * their metadata values (title, description, og:title, og:description) are distinct
 * to facilitate testing and proper SEO.
 *
 * Validates: Requirements 7.3
 */
describe("Property-Based Tests: Unique Metadata", () => {
  afterEach(() => {
    // Clean up helmet tags after each test
    const helmetTags = document.querySelectorAll("[data-rh]");
    helmetTags.forEach((tag) => tag.remove());
  });

  /**
   * Property 3: Unique metadata per page
   *
   * For any two different pages in the application, their metadata values
   * (title, description, og:title, og:description) should be distinct.
   *
   * This test uses fast-check to generate 100+ test cases with pairs of different pages.
   */
  test("Property 3: Different pages have distinct metadata values", async () => {
    // Create an arbitrary that generates pairs of different page keys
    const pagePairArbitrary = fc
      .tuple(
        fc.constantFrom("home", "about", "contact"),
        fc.constantFrom("home", "about", "contact")
      )
      .filter(([page1, page2]) => page1 !== page2); // Ensure pages are different

    await fc.assert(
      fc.asyncProperty(pagePairArbitrary, async ([page1, page2]) => {
        const metadata1 = pageMetadata[page1];
        const metadata2 = pageMetadata[page2];

        // Verify that title is distinct
        const titlesDistinct = metadata1.title !== metadata2.title;

        // Verify that description is distinct
        const descriptionsDistinct =
          metadata1.description !== metadata2.description;

        // Verify that og:title is distinct
        const ogTitlesDistinct = metadata1.ogTitle !== metadata2.ogTitle;

        // Verify that og:description is distinct
        const ogDescriptionsDistinct =
          metadata1.ogDescription !== metadata2.ogDescription;

        // All metadata values should be distinct between different pages
        return (
          titlesDistinct &&
          descriptionsDistinct &&
          ogTitlesDistinct &&
          ogDescriptionsDistinct
        );
      }),
      {
        numRuns: 100, // Configure test to run minimum 100 iterations
        verbose: true,
      }
    );
  });
});
