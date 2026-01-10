

import React from 'react';
import Seo from '../components/Seo';

export default function Abot() {
  return (
    <>
      <Seo
        title="Abot - Profil & Info Lain | Bangkah"
        description="Halaman Abot di Bangkah. Tempat untuk profil, tim, atau info tambahan."
        keywords="abot bangkah, profil abot, info abot, tim bangkah, halaman abot, bangkah artikel, bangkah atha, bangkah mdhiyaulatha"
      />
      <div className="bg-white rounded-xl shadow p-8 max-w-2xl mx-auto border-l-4 border-blue-700 mt-8">
        <h1 className="text-3xl font-bold text-blue-800 mb-2">Abot</h1>
        <p className="text-gray-700 mb-2">Ini adalah halaman Abot. Silakan sesuaikan konten sesuai kebutuhan Anda.</p>
        <p className="text-blue-700 font-semibold">Halaman ini bisa digunakan untuk profil, tim, atau info lain.</p>
      </div>
    </>
  );
}
