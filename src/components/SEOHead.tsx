import { useEffect } from 'react';

interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
  canonical?: string;
  type?: 'website' | 'article' | 'service' | 'organization';
  published?: string;
  modified?: string;
  author?: string;
}

export function SEOHead({ 
  title, 
  description, 
  keywords, 
  ogImage = 'https://huksonsit.com/og-image.png', 
  canonical,
  type = 'website',
  published,
  modified,
  author = 'HUK SONS IT'
}: SEOHeadProps) {
  useEffect(() => {
    // Update document title
    document.title = `${title} | HUK SONS IT - Enterprise Technical Transformation`;

    // Update or create meta tags
    const updateMetaTag = (name: string, content: string, property = false) => {
      const attribute = property ? 'property' : 'name';
      let element = document.querySelector(`meta[${attribute}="${name}"]`);
      
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      
      element.setAttribute('content', content);
    };

    // Standard meta tags for SEO
    updateMetaTag('description', description);
    if (keywords) {
      updateMetaTag('keywords', keywords);
    }
    updateMetaTag('author', author);
    updateMetaTag('robots', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');
    updateMetaTag('googlebot', 'index, follow');
    updateMetaTag('bingbot', 'index, follow');
    
    // Viewport and mobile optimization
    updateMetaTag('viewport', 'width=device-width, initial-scale=1.0, maximum-scale=5.0');
    updateMetaTag('mobile-web-app-capable', 'yes');
    updateMetaTag('apple-mobile-web-app-capable', 'yes');
    updateMetaTag('apple-mobile-web-app-status-bar-style', 'black-translucent');
    
    // Language and region
    updateMetaTag('language', 'English');
    updateMetaTag('geo.region', 'US');
    updateMetaTag('geo.placename', 'Global');
    
    // Content classification
    updateMetaTag('rating', 'General');
    updateMetaTag('distribution', 'global');
    updateMetaTag('target', 'all');

    // Open Graph tags for social sharing
    updateMetaTag('og:title', title, true);
    updateMetaTag('og:description', description, true);
    updateMetaTag('og:type', type, true);
    updateMetaTag('og:image', ogImage, true);
    updateMetaTag('og:image:width', '1200', true);
    updateMetaTag('og:image:height', '630', true);
    updateMetaTag('og:image:alt', title, true);
    updateMetaTag('og:site_name', 'HUK SONS IT', true);
    updateMetaTag('og:locale', 'en_US', true);
    
    if (canonical) {
      updateMetaTag('og:url', canonical, true);
    }

    // Twitter Card tags
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:site', '@huksonsit');
    updateMetaTag('twitter:creator', '@huksonsit');
    updateMetaTag('twitter:title', title);
    updateMetaTag('twitter:description', description);
    updateMetaTag('twitter:image', ogImage);
    updateMetaTag('twitter:image:alt', title);

    // LinkedIn specific
    updateMetaTag('linkedin:owner', 'HUK SONS IT', true);

    // Article specific tags
    if (type === 'article' && published) {
      updateMetaTag('article:published_time', published, true);
      if (modified) {
        updateMetaTag('article:modified_time', modified, true);
      }
      updateMetaTag('article:author', author, true);
    }

    // Canonical link
    if (canonical) {
      let linkElement = document.querySelector('link[rel="canonical"]');
      if (!linkElement) {
        linkElement = document.createElement('link');
        linkElement.setAttribute('rel', 'canonical');
        document.head.appendChild(linkElement);
      }
      linkElement.setAttribute('href', canonical);
    }

    // Enhanced Structured Data - Organization + breadcrumbs + service
    const organizationSchema = {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      '@id': 'https://huksonsit.com/#organization',
      name: 'HUK SONS IT',
      legalName: 'HUK SONS IT',
      description: 'Global technical transformation and engineering firm specializing in cloud infrastructure, DevOps, AI automation, data engineering, and enterprise modernization',
      url: 'https://huksonsit.com',
      logo: {
        '@type': 'ImageObject',
        url: 'https://huksonsit.com/logo.png',
        width: 600,
        height: 600
      },
      image: 'https://huksonsit.com/og-image.png',
      telephone: '+1-555-EXPAND',
      email: 'info@huksons.com',
      foundingDate: '2015',
      founders: [
        {
          '@type': 'Person',
          name: 'HUK SONS IT Leadership Team'
        }
      ],
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'US',
        addressLocality: 'Global',
        streetAddress: 'Global Operations'
      },
      areaServed: [
        {
          '@type': 'Country',
          name: 'United States'
        },
        {
          '@type': 'Country',
          name: 'United Arab Emirates'
        },
        {
          '@type': 'Country',
          name: 'Pakistan'
        },
        {
          '@type': 'GeoCircle',
          name: 'Worldwide'
        }
      ],
      sameAs: [
        'https://linkedin.com/company/huksonsit',
        'https://twitter.com/huksonsit',
        'https://github.com/huksonsit'
      ],
      contactPoint: [
        {
          '@type': 'ContactPoint',
          contactType: 'Enterprise Sales',
          email: 'sales@huksons.com',
          availableLanguage: ['English']
        },
        {
          '@type': 'ContactPoint',
          contactType: 'Technical Support',
          email: 'support@huksons.com',
          availableLanguage: ['English']
        },
        {
          '@type': 'ContactPoint',
          contactType: 'Customer Service',
          email: 'info@huksons.com',
          availableLanguage: ['English']
        }
      ],
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.9',
        ratingCount: '1500',
        bestRating: '5',
        worstRating: '1'
      },
      numberOfEmployees: {
        '@type': 'QuantitativeValue',
        value: '100+'
      },
      slogan: 'Enterprise Technical Transformation at Scale',
      knowsAbout: [
        'Cloud Infrastructure',
        'DevOps Engineering',
        'AI & Machine Learning',
        'Data Engineering',
        'Kubernetes',
        'Terraform',
        'AWS',
        'Google Cloud Platform',
        'Microsoft Azure',
        'Enterprise Architecture'
      ]
    };

    // Website schema
    const websiteSchema = {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      '@id': 'https://huksonsit.com/#website',
      url: 'https://huksonsit.com',
      name: 'HUK SONS IT',
      description: 'Enterprise technical transformation and cloud infrastructure services',
      publisher: {
        '@id': 'https://huksonsit.com/#organization'
      },
      potentialAction: {
        '@type': 'SearchAction',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: 'https://huksonsit.com/search?q={search_term_string}'
        },
        'query-input': 'required name=search_term_string'
      },
      inLanguage: 'en-US'
    };

    // Professional Service schema
    const serviceSchema = {
      '@context': 'https://schema.org',
      '@type': 'ProfessionalService',
      '@id': 'https://huksonsit.com/#service',
      name: 'HUK SONS IT - Enterprise Technical Transformation Services',
      description: 'Comprehensive cloud infrastructure, DevOps, AI automation, and data engineering services for enterprises',
      url: 'https://huksonsit.com',
      telephone: '+1-555-EXPAND',
      email: 'info@huksons.com',
      priceRange: '$$$$',
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'US',
        addressLocality: 'Global',
        streetAddress: 'Global Operations'
      },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Enterprise Technical Services',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Cloud Infrastructure Management'
            }
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'DevOps Engineering'
            }
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'AI & Automation'
            }
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Data Engineering'
            }
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Emergency Intervention'
            }
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Digital Marketing'
            }
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Business Process Optimization'
            }
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Growth Solutions'
            }
          }
        ]
      }
    };

    // Breadcrumb Schema
    const pathSegments = window.location.pathname.split('/').filter(Boolean);
    const breadcrumbList = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://huksonsit.com'
        },
        ...pathSegments.map((segment, index) => ({
          '@type': 'ListItem',
          position: index + 2,
          name: segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, ' '),
          item: `https://huksonsit.com/${pathSegments.slice(0, index + 1).join('/')}`
        }))
      ]
    };

    // Combine all schemas
    const structuredData = {
      '@context': 'https://schema.org',
      '@graph': [organizationSchema, websiteSchema, serviceSchema, breadcrumbList]
    };

    let scriptElement = document.querySelector('script[type="application/ld+json"]');
    if (!scriptElement) {
      scriptElement = document.createElement('script');
      scriptElement.setAttribute('type', 'application/ld+json');
      document.head.appendChild(scriptElement);
    }
    scriptElement.textContent = JSON.stringify(structuredData);

    // Add additional SEO-friendly meta tags
    updateMetaTag('theme-color', '#2C3745');
    updateMetaTag('msapplication-TileColor', '#10141A');
    updateMetaTag('msapplication-navbutton-color', '#2C3745');
    updateMetaTag('application-name', 'HUK SONS IT');

    // Performance and Core Web Vitals hints
    const preconnectLinks = [
      'https://fonts.googleapis.com',
      'https://fonts.gstatic.com'
    ];

    preconnectLinks.forEach(href => {
      let link = document.querySelector(`link[rel="preconnect"][href="${href}"]`);
      if (!link) {
        link = document.createElement('link');
        link.setAttribute('rel', 'preconnect');
        link.setAttribute('href', href);
        if (href.includes('gstatic')) {
          link.setAttribute('crossorigin', 'anonymous');
        }
        document.head.appendChild(link);
      }
    });

  }, [title, description, keywords, ogImage, canonical, type, published, modified, author]);

  return null;
}