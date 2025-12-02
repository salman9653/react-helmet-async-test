import React from "react";
import { Helmet } from "react-helmet-async";

/**
 * SEO Component
 *
 * Manages document head metadata using react-helmet-async.
 * Accepts props for all metadata fields and renders appropriate meta tags.
 *
 * Requirements: 2.1, 2.2, 2.3, 2.4, 2.5, 2.6, 2.7, 2.8, 2.9, 2.10, 3.3
 */
const SEO = ({
  title,
  description,
  ogTitle,
  ogDescription,
  ogImage,
  ogUrl,
  ogType = "website",
  twitterCard = "summary_large_image",
  twitterTitle,
  twitterDescription,
}) => {
  return (
    <Helmet>
      {/* Basic metadata - Requirements 2.1, 2.2 */}
      <title>{title}</title>
      <meta name="description" content={description} />

      {/* Open Graph metadata - Requirements 2.3, 2.4, 2.5, 2.6, 2.7 */}
      <meta property="og:title" content={ogTitle || title} />
      <meta property="og:description" content={ogDescription || description} />
      <meta property="og:type" content={ogType} />
      {ogUrl && <meta property="og:url" content={ogUrl} />}
      {ogImage && <meta property="og:image" content={ogImage} />}

      {/* Twitter Card metadata - Requirements 2.8, 2.9, 2.10 */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={twitterTitle || ogTitle || title} />
      <meta
        name="twitter:description"
        content={twitterDescription || ogDescription || description}
      />
    </Helmet>
  );
};

export default SEO;
