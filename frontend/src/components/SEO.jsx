import React from 'react';
import { Helmet } from 'react-helmet-async';
import PropTypes from 'prop-types';

const SEO = ({
  title,
  description,
  keywords,
  author = "Himanshu Baurai",
  image = "/profile-pic.jpg", // Default image path
  url,
  type = "website",
  children
}) => {
  // Use the current URL if none provided
  const siteUrl = url || (typeof window !== 'undefined' ? window.location.href : '');
  // Create absolute image URL if needed
  const imageUrl = image.startsWith('http') 
    ? image 
    : `${window.location.origin}${image}`;

  return (
    <Helmet>
      {/* Basic Metadata */}
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="author" content={author} />
      <link rel="canonical" href={siteUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:image:alt" content={`Image for ${title}`} />
      <meta property="og:site_name" content="Himanshu Baurai Portfolio" />

      {/* Social Media Profiles */}
      <meta name="linkedin:profile" content="https://www.linkedin.com/in/himanshu-baurai-283b4022a/" />
      <meta name="instagram:profile" content="https://www.instagram.com/himanshu_baurai/" />

      {/* Additional custom tags if needed */}
      {children}
    </Helmet>
  );
};

SEO.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  keywords: PropTypes.string,
  author: PropTypes.string,
  image: PropTypes.string,
  url: PropTypes.string,
  type: PropTypes.string,
  children: PropTypes.node
};

export default SEO;