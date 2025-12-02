import React from "react";
import SEO from "../components/SEO";
import MetadataDisplay from "../components/MetadataDisplay";
import { pageMetadata } from "../config/metadata";
import "./AboutPage.css";

/**
 * AboutPage Component
 *
 * About page displayed at the "/about" route.
 * Includes SEO metadata, heading, descriptive content about the organization/purpose,
 * and metadata display.
 *
 * Requirements: 1.2, 5.1, 5.2, 5.3, 7.2
 */
const AboutPage = () => {
  const metadata = pageMetadata.about;
  document.title = metadata.title;
  document.description = metadata.description;

  return (
    <>
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

      <div className="page-content">
        <h1>About Us</h1>

        <div className="page-description">
          <p>
            Welcome to our About page. We are dedicated to demonstrating modern
            web development practices using React 18 and cutting-edge SEO
            optimization techniques.
          </p>

          <h2>Our Mission</h2>
          <p>
            Our mission is to showcase how proper metadata management can
            enhance web applications for both users and search engines. We
            believe in building accessible, performant, and SEO-friendly
            applications that provide value to everyone.
          </p>

          <h2>Technology Stack</h2>
          <p>
            This application is built with a carefully selected technology stack
            that represents current best practices in web development:
          </p>
          <ul>
            <li>
              <strong>React 18:</strong> The latest version of React with
              concurrent features and improved performance
            </li>
            <li>
              <strong>React Router DOM v6:</strong> Modern client-side routing
              with improved API and better performance
            </li>
            <li>
              <strong>react-helmet-async:</strong> Comprehensive metadata
              management for SEO optimization
            </li>
            <li>
              <strong>Create React App:</strong> Zero-configuration build setup
              for rapid development
            </li>
          </ul>

          <h2>Why SEO Matters</h2>
          <p>
            Search Engine Optimization (SEO) is crucial for modern web
            applications. Proper metadata ensures that:
          </p>
          <ul>
            <li>Search engines can accurately index and rank your content</li>
            <li>
              Social media platforms display rich previews when links are shared
            </li>
            <li>Users can quickly understand what your page offers</li>
            <li>
              Your application is accessible and discoverable to a wider
              audience
            </li>
          </ul>

          <h2>Open Graph Protocol</h2>
          <p>
            We implement the Open Graph protocol to ensure optimal social media
            integration. When you share links from this application on platforms
            like Facebook, LinkedIn, or Twitter, they display rich cards with
            titles, descriptions, and images that we control through metadata.
          </p>
        </div>

        <MetadataDisplay
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
      </div>
    </>
  );
};

export default AboutPage;
