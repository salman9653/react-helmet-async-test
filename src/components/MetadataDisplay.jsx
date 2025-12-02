import { useState } from "react";
import "./MetadataDisplay.css";

/**
 * MetadataDisplay Component
 *
 * Displays all current page metadata values in a styled, collapsible card.
 * This is a debug/testing tool to verify react-helmet-async functionality.
 *
 * Requirements: 7.2
 */
const MetadataDisplay = ({
  title,
  description,
  ogTitle,
  ogDescription,
  ogImage,
  ogUrl,
  ogType,
  twitterCard,
  twitterTitle,
  twitterDescription,
}) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className="metadata-display">
      <div className="metadata-display-header" onClick={toggleCollapse}>
        <h3>🔍 Metadata Debug Panel</h3>
        <button
          className="metadata-display-toggle"
          aria-label="Toggle metadata display"
        >
          {isCollapsed ? "▼" : "▲"}
        </button>
      </div>

      {!isCollapsed && (
        <div className="metadata-display-content">
          <div className="metadata-section">
            <h4>Basic Metadata</h4>
            <div className="metadata-item">
              <span className="metadata-label">Title:</span>
              <span className="metadata-value">{title}</span>
            </div>
            <div className="metadata-item">
              <span className="metadata-label">Description:</span>
              <span className="metadata-value">{description}</span>
            </div>
          </div>

          <div className="metadata-section">
            <h4>Open Graph Tags</h4>
            <div className="metadata-item">
              <span className="metadata-label">og:title:</span>
              <span className="metadata-value">{ogTitle}</span>
            </div>
            <div className="metadata-item">
              <span className="metadata-label">og:description:</span>
              <span className="metadata-value">{ogDescription}</span>
            </div>
            <div className="metadata-item">
              <span className="metadata-label">og:type:</span>
              <span className="metadata-value">{ogType}</span>
            </div>
            <div className="metadata-item">
              <span className="metadata-label">og:url:</span>
              <span className="metadata-value">{ogUrl}</span>
            </div>
            <div className="metadata-item">
              <span className="metadata-label">og:image:</span>
              <span className="metadata-value">{ogImage}</span>
            </div>
          </div>

          <div className="metadata-section">
            <h4>Twitter Card Tags</h4>
            <div className="metadata-item">
              <span className="metadata-label">twitter:card:</span>
              <span className="metadata-value">{twitterCard}</span>
            </div>
            <div className="metadata-item">
              <span className="metadata-label">twitter:title:</span>
              <span className="metadata-value">{twitterTitle}</span>
            </div>
            <div className="metadata-item">
              <span className="metadata-label">twitter:description:</span>
              <span className="metadata-value">{twitterDescription}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MetadataDisplay;
