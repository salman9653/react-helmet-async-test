import React from "react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import "./NotFoundPage.css";

/**
 * NotFoundPage Component
 *
 * 404 error page displayed when user navigates to an invalid route.
 * Includes user-friendly error message and link back to home page.
 *
 * Requirements: 1.5
 */
const NotFoundPage = () => {
  return (
    <>
      <SEO
        title="404 - Page Not Found | React Landing App"
        description="The page you are looking for could not be found. Return to the home page to continue browsing."
        ogTitle="404 - Page Not Found"
        ogDescription="This page does not exist. Please return to the home page."
        ogImage="https://example.com/images/404-og.jpg"
        ogUrl={window.location.href}
        ogType="website"
        twitterCard="summary_large_image"
        twitterTitle="404 - Page Not Found"
        twitterDescription="This page does not exist. Please return to the home page."
      />

      <div className="page-content not-found-page">
        <h1>404 - Page Not Found</h1>

        <div className="page-description">
          <p>
            Oops! The page you're looking for doesn't exist. It might have been
            moved, deleted, or the URL might be incorrect.
          </p>

          <p>
            Don't worry, you can return to our home page and continue exploring
            the application.
          </p>

          <div className="not-found-actions">
            <Link to="/" className="home-link">
              ← Back to Home
            </Link>
          </div>

          <h2>What can you do?</h2>
          <ul>
            <li>Check the URL for typos</li>
            <li>Use the navigation menu to find what you're looking for</li>
            <li>Visit our home page to start fresh</li>
            <li>Contact us if you believe this is an error</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default NotFoundPage;
