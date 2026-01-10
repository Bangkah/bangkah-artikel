import React from 'react';
import Seo from './Seo';

export default function SeoHome() {
  return (
    <Seo
      title="Bangkah - Artikel, Inspirasi, UMKM, dan Bisnis Lokal oleh Muhammad Dhiyaul Atha (mdhiyaulatha)"
      description="Bangkah Blog: Artikel inspirasi, UMKM, bisnis lokal, tutorial, dan kisah sukses dari desa Bangkah. Ditulis oleh Muhammad Dhiyaul Atha (atha, mdhiyaulatha). Temukan tips, inspirasi, dan peluang bisnis di sini."
      url={window.location.origin}
      image={window.location.origin + '/bangkah-icon.svg'}
    />
  );
}
