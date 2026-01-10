import React from 'react';

export default function Seo({
  title = 'Bangkah - Artikel, Inspirasi, dan UMKM',
  description = 'Blog Bangkah: Artikel inspirasi, UMKM, bisnis lokal, dan kisah sukses dari desa Bangkah. Ditulis oleh Muhammad Dhiyaul Atha (mdhiyaulatha).',
  url,
  image = '/bangkah-icon.svg',
  keywords
}) {
  React.useEffect(() => {
    // Google Site Verification (global for all pages)
    const googleVerificationContent = '6Y8g_eelfKIolwQbgNWo3J5Sn3NHlNwb9gb2p-ZUr-Q';
    let metaGoogle = document.querySelector('meta[name="google-site-verification"]');
    if (!metaGoogle) {
      metaGoogle = document.createElement('meta');
      metaGoogle.name = 'google-site-verification';
      document.head.appendChild(metaGoogle);
    }
    metaGoogle.content = googleVerificationContent;
    document.title = title;

    // Description
    if (description) {
      let meta = document.querySelector('meta[name="description"]');
      if (!meta) {
        meta = document.createElement('meta');
        meta.name = 'description';
        document.head.appendChild(meta);
      }
      meta.content = description;
    }

    // Canonical URL
    let canonicalUrl = url || window.location.href;
    let link = document.querySelector('link[rel="canonical"]');
    if (!link) {
      link = document.createElement('link');
      link.rel = 'canonical';
      document.head.appendChild(link);
    }
    link.href = canonicalUrl;

    // Image (Open Graph)
    let og = document.querySelector('meta[property="og:image"]');
    if (!og) {
      og = document.createElement('meta');
      og.setAttribute('property', 'og:image');
      document.head.appendChild(og);
    }
    og.content = image;

    // Keywords
    const defaultKeywords = 'Bangkah, Bangkah artikel, atha, muhammad dhiyaul atha, mdhiyaulatha, UMKM, artikel UMKM, blog Bangkah, desa Bangkah, inspirasi UMKM, bisnis lokal, artikel bisnis, artikel inspirasi, artikel desa, artikel atha, artikel mdhiyaulatha, artikel muhammad dhiyaul atha';
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.name = 'keywords';
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.content = keywords || defaultKeywords;

    // Author
    let metaAuthor = document.querySelector('meta[name="author"]');
    if (!metaAuthor) {
      metaAuthor = document.createElement('meta');
      metaAuthor.name = 'author';
      document.head.appendChild(metaAuthor);
    }
    metaAuthor.content = 'Muhammad Dhiyaul Atha';

    // Robots
    let metaRobots = document.querySelector('meta[name="robots"]');
    if (!metaRobots) {
      metaRobots = document.createElement('meta');
      metaRobots.name = 'robots';
      document.head.appendChild(metaRobots);
    }
    metaRobots.content = 'index, follow';

    // Open Graph
    const ogTags = [
      { property: 'og:site_name', content: 'Bangkah' },
      { property: 'og:locale', content: 'id_ID' },
      { property: 'og:type', content: 'article' },
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:url', content: canonicalUrl },
    ];
    ogTags.forEach(({ property, content }) => {
      let tag = document.querySelector(`meta[property="${property}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('property', property);
        document.head.appendChild(tag);
      }
      tag.content = content;
    });

    // Twitter Card
    const twitterTags = [
      { name: 'twitter:card', content: 'summary' },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: image },
      { name: 'twitter:site', content: '@mdhiyaulatha' },
    ];
    twitterTags.forEach(({ name, content }) => {
      let tag = document.querySelector(`meta[name="${name}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.name = name;
        document.head.appendChild(tag);
      }
      tag.content = content;
    });

    // Structured Data (JSON-LD)
    let ldJson = document.getElementById('structured-data');
    if (ldJson) ldJson.remove();
    const jsonLd = {
      '@context': 'https://schema.org',
      '@type': 'Article',
      'headline': title,
      'description': description,
      'image': image,
      'author': {
        '@type': 'Person',
        'name': 'Muhammad Dhiyaul Atha',
        'url': 'https://mdhiyaulatha.com/'
      },
      'publisher': {
        '@type': 'Organization',
        'name': 'Bangkah',
        'url': canonicalUrl,
        'logo': {
          '@type': 'ImageObject',
          'url': '/bangkah-icon.svg'
        }
      },
      'mainEntityOfPage': canonicalUrl,
      'datePublished': new Date().toISOString(),
    };
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'structured-data';
    script.innerHTML = JSON.stringify(jsonLd);
    document.head.appendChild(script);

  }, [title, description, url, image, keywords]);
  return null;
}
