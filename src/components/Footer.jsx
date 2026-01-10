import React from 'react';

export default function Footer() {
  return (
    <footer className="mt-16 bg-gradient-to-r from-blue-700 via-blue-500 to-cyan-400 text-white py-8 shadow-inner">
      <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-lg font-bold tracking-widest">Bangkah</div>
        <div className="text-sm opacity-80">&copy; {new Date().getFullYear()} Bangkah. All rights reserved.</div>
        <div className="flex gap-4">
          <a href="mailto:bangkah@email.com" className="hover:text-yellow-200 transition">Email</a>
          <a href="https://instagram.com" target="_blank" rel="noopener" className="hover:text-yellow-200 transition">Instagram</a>
          <a href="https://github.com" target="_blank" rel="noopener" className="hover:text-yellow-200 transition">GitHub</a>
        </div>
      </div>
    </footer>
  );
}
