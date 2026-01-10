import React from 'react';
import Seo from './Seo';

export default function SeoHome() {
  // Kata kunci typo dan sinonim untuk SEO
  const typoKeywords = [
    'Bangkah', 'Bangah', 'Bangak', 'Bangkah artikel', 'Bangah artikel', 'Bangak artikel',
    'atha', 'dhiyaul', 'dhiyaulatha', 'mdhiyaulatha', 'muhammad dhiyaul atha',
    'muhamad dhiyaul atha', 'muhammad dhiyul atha', 'muhammad dhiyal atha',
    'bangkah blog', 'bangkah inspirasi', 'bangkah bisnis', 'bangkah umkm',
    'bangkah desa', 'bangkah atikel', 'bangkah arikel', 'bangkah artikle',
    'bangkah artkel', 'bangkah aritkel', 'bangkah ariticle',
    'bangkah branding', 'bangkah atha', 'bangkah mdhiyaulatha',
    'bangkah muhammad dhiyaul atha', 'bangkah open source',
    'bangkah digital', 'bangkah personal', 'bangkah personal branding',
    'bangkah inspirasi', 'bangkah bisnis lokal', 'bangkah blog atha',
    'bangkah blog mdhiyaulatha', 'bangkah blog muhammad dhiyaul atha',
    'bangkah blog inspirasi', 'bangkah blog bisnis', 'bangkah blog umkm',
    'bangkah blog desa', 'bangkah blog digital', 'bangkah blog branding',
    'bangkah blog open source', 'bangkah blog personal',
    'bangkah blog personal branding',
  ];
  return (
    <Seo
      title="Bangkah - Artikel, Inspirasi, UMKM, dan Bisnis Lokal oleh Muhammad Dhiyaul Atha (mdhiyaulatha)"
      description="Bangkah Blog: Artikel inspirasi, UMKM, bisnis lokal, tutorial, dan kisah sukses dari desa Bangkah. Ditulis oleh Muhammad Dhiyaul Atha (atha, mdhiyaulatha). Temukan tips, inspirasi, dan peluang bisnis di sini."
      url={window.location.origin}
      image={window.location.origin + '/bangkah-icon.svg'}
      keywords={typoKeywords.join(', ')}
    />
  );
}
