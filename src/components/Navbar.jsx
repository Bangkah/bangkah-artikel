import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar({ posts = [] }) {
  const { pathname } = useLocation();
  const [search, setSearch] = useState('');
  const [showResults, setShowResults] = useState(false);
  const navLinks = [
    { to: '/', label: 'Beranda' },
    { to: '/artikel', label: 'Artikel' },
    { to: '/tentang', label: 'Tentang' },
    { to: '/kontak', label: 'Kontak' },
  ];
  const filtered = search.trim()
    ? posts.filter(post => post.title.toLowerCase().includes(search.toLowerCase()))
    : [];

  return (
    <nav className="sticky top-0 z-40 w-full border-b bg-white border-blue-200/60 transition-colors duration-300">
      <div className="max-w-6xl mx-auto flex items-center px-4 sm:px-8 py-3">
        {/* Logo kiri */}
        <Link to="/" className="flex items-center gap-2 select-none mr-6">
          <span className="text-2xl sm:text-3xl font-black tracking-widest text-transparent bg-clip-text drop-shadow bg-gradient-to-r from-blue-700 via-cyan-400 to-blue-700">
            Bangkah
          </span>
        </Link>
        {/* Menu tengah */}
        <div className="flex-1 flex gap-1 sm:gap-2 justify-center">
          {navLinks.map(link => (
            <Link
              key={link.to}
              to={link.to}
              className={`px-4 py-2 rounded-lg font-semibold text-sm tracking-wide transition-all duration-200
                ${pathname === link.to
                  ? 'bg-blue-600 text-white shadow'
                  : 'text-blue-700 hover:bg-blue-100 hover:text-cyan-700'}`}
            >
              {link.label}
            </Link>
          ))}
        </div>
        {/* Search kanan */}
        <div className="flex items-center gap-4 ml-6">
          <div className="relative">
            <input
              type="text"
              placeholder="Cari artikel..."
              value={search}
              onChange={e => { setSearch(e.target.value); setShowResults(true); }}
              onFocus={() => setShowResults(true)}
              onBlur={() => setTimeout(() => setShowResults(false), 150)}
              className="rounded-lg px-4 py-2 pl-10 focus:outline-none focus:ring-2 w-44 sm:w-56 transition-colors duration-200 bg-blue-100 text-blue-700 placeholder-blue-400 focus:ring-blue-400"
            />
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-blue-400 transition-colors duration-200">
              <svg width="18" height="18" fill="none" viewBox="0 0 24 24"><circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2"/><path d="M21 21L17 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
            </span>
            {showResults && filtered.length > 0 && (
              <div className="absolute left-0 right-0 mt-2 bg-white border border-blue-200 rounded-lg shadow-lg z-50 max-h-60 overflow-auto">
                {filtered.map(post => (
                  <Link
                    key={post.id}
                    to={`/post/${post.id}`}
                    className="block px-4 py-2 text-blue-700 hover:bg-blue-50 hover:text-blue-900 transition"
                    onMouseDown={e => e.preventDefault()}
                  >
                    {post.title}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

