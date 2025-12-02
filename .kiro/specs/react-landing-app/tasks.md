# Implementation Plan

- [x] 1. Set up Create React App project and install dependencies

  - Initialize new React 18 project using Create React App
  - Install react-router-dom for routing
  - Install react-helmet-async for metadata management
  - Install fast-check for property-based testing
  - Clean up default Create React App files
  - _Requirements: 3.1, 3.2, 3.3_

- [x] 2. Create metadata configuration

  - Create config/metadata.js file with metadata for all pages (home, about, contact-us)
  - Define title, description, og:title, og:description, og:image, og:url, og:type, twitter:card, twitter:title, twitter:description for each page
  - Ensure each page has distinct, easily identifiable metadata values
  - _Requirements: 2.1, 2.2, 2.3, 2.4, 2.5, 2.6, 2.7, 2.8, 2.9, 2.10, 7.3_

- [x] 3. Implement SEO component

  - Create components/SEO.jsx component that uses react-helmet-async
  - Accept props for all metadata fields (title, description, og tags, twitter tags)
  - Render Helmet component with all metadata tags
  - _Requirements: 2.1, 2.2, 2.3, 2.4, 2.5, 2.6, 2.7, 2.8, 2.9, 2.10, 3.3_

- [x] 3.1 Write unit tests for SEO component

  - Test that SEO component renders Helmet with correct props
  - Test that all metadata tags are passed correctly
  - _Requirements: 2.1, 2.2, 2.3, 2.4, 2.5, 2.6, 2.7, 2.8, 2.9, 2.10_

- [x] 4. Create MetadataDisplay component for testing

  - Create components/MetadataDisplay.jsx component
  - Display all current page metadata values in a styled card
  - Make it collapsible or toggleable for better UX
  - Style it distinctly so it's clearly a debug/testing tool
  - _Requirements: 7.2_

- [x] 5. Create Layout component with navigation

  - Create components/Layout.jsx with navigation menu
  - Include links to all three pages (/, /about, /contact-us)
  - Highlight active page in navigation using React Router's NavLink
  - Render children prop for page content
  - _Requirements: 1.4, 7.4_

- [x] 5.1 Write unit tests for Layout component

  - Test that navigation links are rendered
  - Test that Layout renders children correctly
  - _Requirements: 4.3, 5.3, 6.3_

- [x] 6. Implement HomePage component

  - Create pages/HomePage.jsx
  - Use SEO component with home page metadata from config
  - Include heading identifying it as the home page
  - Add descriptive content about the application
  - Include MetadataDisplay component showing current metadata
  - _Requirements: 1.1, 4.1, 4.2, 4.3, 7.2_

- [x] 6.1 Write unit tests for HomePage

  - Test that HomePage renders without errors
  - Test that heading is present
  - Test that descriptive content is displayed
  - _Requirements: 4.1, 4.2_

- [x] 7. Implement AboutPage component

  - Create pages/AboutPage.jsx
  - Use SEO component with about page metadata from config
  - Include heading identifying it as the about page
  - Add descriptive content about the organization/purpose
  - Include MetadataDisplay component showing current metadata
  - _Requirements: 1.2, 5.1, 5.2, 5.3, 7.2_

- [x] 7.1 Write unit tests for AboutPage

  - Test that AboutPage renders without errors
  - Test that heading is present
  - Test that descriptive content is displayed
  - _Requirements: 5.1, 5.2_

- [x] 8. Implement ContactPage component

  - Create pages/ContactPage.jsx
  - Use SEO component with contact page metadata from config
  - Include heading identifying it as the contact page
  - Add contact information or a simple contact form
  - Include MetadataDisplay component showing current metadata
  - _Requirements: 1.3, 6.1, 6.2, 6.3, 7.2_

- [x] 8.1 Write unit tests for ContactPage

  - Test that ContactPage renders without errors
  - Test that heading is present
  - Test that contact information is displayed
  - _Requirements: 6.1, 6.2_

- [x] 9. Implement NotFoundPage component

  - Create pages/NotFoundPage.jsx for 404 errors
  - Display user-friendly 404 message
  - Include link back to home page
  - _Requirements: 1.5_

- [x] 10. Set up routing in App component

  - Wrap app with HelmetProvider from react-helmet-async
  - Set up BrowserRouter from react-router-dom
  - Define routes for /, /about, /contact-us
  - Add catch-all route (\*) for 404 handling
  - Wrap all routes with Layout component
  - _Requirements: 1.1, 1.2, 1.3, 1.4, 1.5, 3.2, 3.3_

- [x] 10.1 Write routing tests

  - Test that navigating to "/" renders HomePage
  - Test that navigating to "/about" renders AboutPage
  - Test that navigating to "/contact-us" renders ContactPage
  - Test that navigating to invalid route renders NotFoundPage
  - _Requirements: 1.1, 1.2, 1.3, 1.5_

- [x] 11. Write property-based test for metadata completeness

  - **Property 1: Metadata completeness for all pages**
  - Use fast-check to generate test cases for all pages
  - For each page, verify all required metadata tags are present in document head
  - Verify metadata values are non-empty and page-specific
  - Configure test to run minimum 100 iterations
  - **Validates: Requirements 2.1, 2.2, 2.3, 2.4, 2.5, 2.6, 2.7, 2.8, 2.9, 2.10, 7.1**

- [-] 12. Write property-based test for unique metadata

  - **Property 3: Unique metadata per page**
  - Use fast-check to generate pairs of different pages
  - Verify that their metadata values (title, description, og:title, og:description) are distinct
  - Configure test to run minimum 100 iterations
  - **Validates: Requirements 7.3**

- [ ] 13. Write property-based test for metadata quality

  - **Property 6: Metadata quality standards**
  - Use fast-check to generate test cases for all pages
  - Verify og:image is a valid URL format
  - Verify og:url matches the current page path
  - Verify og:type is always "website"
  - Verify twitter:card is always "summary_large_image"
  - Verify all metadata values are non-empty strings
  - Configure test to run minimum 100 iterations
  - **Validates: Requirements 7.5, 2.5, 2.6, 2.8**

- [ ] 14. Write property-based test for navigation links presence

  - **Property 7: Navigation links presence**
  - Use fast-check to generate test cases for all pages
  - For each page, verify navigation links to all other pages are present
  - Configure test to run minimum 100 iterations
  - **Validates: Requirements 4.3, 5.3, 6.3**

- [x] 15. Add basic styling

  - Create CSS files for components
  - Style navigation with active link highlighting
  - Style MetadataDisplay as a collapsible debug panel
  - Add responsive design for mobile and desktop
  - Use consistent color scheme and typography
  - _Requirements: 7.4_

- [ ] 16. Final checkpoint - Ensure all tests pass
  - Ensure all tests pass, ask the user if questions arise.
