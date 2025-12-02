import React from "react";
import SEO from "../components/SEO";
import MetadataDisplay from "../components/MetadataDisplay";
import { pageMetadata } from "../config/metadata";
import "./ContactPage.css";

/**
 * ContactPage Component
 *
 * Contact page displayed at the "/contact-us" route.
 * Includes SEO metadata, heading, contact information,
 * and metadata display.
 *
 * Requirements: 1.3, 6.1, 6.2, 6.3, 7.2
 */
const ContactPage = () => {
  const metadata = pageMetadata.contact;
  
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
        <h1>Contact Us</h1>

        <div className="page-description">
          <p>
            We'd love to hear from you! Whether you have questions about our
            React 18 application, need support, or want to discuss collaboration
            opportunities, feel free to reach out.
          </p>

          <h2>Get in Touch</h2>
          <div className="contact-info">
            <div className="contact-item">
              <h3>Email</h3>
              <p>
                <a href="mailto:contact@reactlandingapp.com">
                  contact@reactlandingapp.com
                </a>
              </p>
              <p>For general inquiries and support requests</p>
            </div>

            <div className="contact-item">
              <h3>Technical Support</h3>
              <p>
                <a href="mailto:support@reactlandingapp.com">
                  support@reactlandingapp.com
                </a>
              </p>
              <p>For technical questions and bug reports</p>
            </div>

            <div className="contact-item">
              <h3>Business Inquiries</h3>
              <p>
                <a href="mailto:business@reactlandingapp.com">
                  business@reactlandingapp.com
                </a>
              </p>
              <p>For partnership and collaboration opportunities</p>
            </div>
          </div>

          <h2>Office Hours</h2>
          <p>
            Our team is available Monday through Friday, 9:00 AM to 5:00 PM EST.
            We typically respond to inquiries within 24-48 hours.
          </p>

          <h2>Social Media</h2>
          <p>
            Connect with us on social media to stay updated on the latest
            developments and best practices in React development and SEO
            optimization:
          </p>
          <ul>
            <li>Twitter: @ReactLandingApp</li>
            <li>GitHub: github.com/reactlandingapp</li>
            <li>LinkedIn: linkedin.com/company/reactlandingapp</li>
          </ul>

          <h2>Feedback</h2>
          <p>
            Your feedback helps us improve. If you have suggestions for new
            features, improvements to our SEO implementation, or general
            comments about the application, please don't hesitate to contact us.
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

export default ContactPage;
