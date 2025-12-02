import React from "react";
import SEO from "../components/SEO";
import MetadataDisplay from "../components/MetadataDisplay";
import { pageMetadata } from "../config/metadata";
import "./HomePage.css";

/**
 * HomePage Component
 *
 * Landing page displayed at the root route "/".
 * Includes SEO metadata, heading, descriptive content, and metadata display.
 *
 * Requirements: 1.1, 4.1, 4.2, 4.3, 7.2
 */
const HomePage = () => {
  const metadata = pageMetadata.home;
  
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
        <h1>Welcome to React Landing App</h1>

        <div className="page-description">
          <p>
            This is a modern React 18 single-page application demonstrating best
            practices for SEO optimization and metadata management.
          </p>

          <p>
            Our application showcases the power of react-helmet-async for
            managing document head metadata, including comprehensive Open Graph
            tags for optimal social media sharing and Twitter Card integration.
          </p>

          <p>
            Built with Create React App and React Router DOM, this application
            provides seamless client-side navigation between pages while
            maintaining proper SEO metadata for each route.
          </p>

          <h2>Features</h2>
          <ul>
            <li>React 18 with modern hooks and best practices</li>
            <li>Client-side routing with React Router DOM v6</li>
            <li>Comprehensive SEO metadata management</li>
            <li>Open Graph tags for social media optimization</li>
            <li>Twitter Card integration</li>
            <li>Responsive design for mobile and desktop</li>
          </ul>
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

export default HomePage;
