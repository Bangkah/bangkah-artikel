import React from 'react';
import { Link } from 'react-router-dom';
import Seo from '../components/Seo';

export default function Artikel({ posts = [] }) {
  return (
    <>
      <Seo title="Artikel | Bangkah Blog" description="Kumpulan artikel terbaru Bangkah tentang web, menulis, dan inspirasi digital." />
      <div className="max-w-4xl mx-auto py-8 px-4">
        <h1 className="text-3xl font-bold text-blue-800 mb-6">Artikel Terbaru</h1>
        <div className="flex flex-col gap-8">
          {posts.length === 0 && (
            <div className="text-center text-gray-500">Belum ada artikel.</div>
          )}
          {posts.map((post, i) => (
            <div
              className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-blue-700 hover:scale-[1.025] hover:shadow-2xl transition-all duration-300 group relative overflow-hidden"
              key={post.id}
              style={{ animation: `fadeInUp 0.5s ease ${(i + 1) * 0.1}s both` }}
            >
              <div className="absolute right-0 top-0 w-24 h-24 bg-gradient-to-br from-blue-200 to-blue-50 opacity-30 rounded-bl-full blur-2xl z-0" />
              <div className="relative z-10">
                <h2 className="text-2xl font-bold mb-1 text-blue-700 group-hover:text-blue-900 transition-colors duration-200">
                  <Link to={`/post/${post.id}`}>{post.title}</Link>
                </h2>
                <p className="text-sm text-gray-400 mb-2">{post.date}</p>
                <p className="mb-2 text-gray-700">{post.excerpt}</p>
                <Link to={`/post/${post.id}`} className="text-blue-700 font-semibold hover:underline">Baca Selengkapnya</Link>
                <div className="mt-4 flex gap-4 items-center">
                  <span className="inline-flex items-center gap-1 text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full font-semibold">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                    {post.views || 0} views
                  </span>
                  <span className="inline-flex items-center gap-1 text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full font-semibold">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2v-8a2 2 0 012-2h2m10 0V6a4 4 0 00-8 0v2m8 0H7" /></svg>
                    {(post.comments || []).length} komentar
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <style>{`
          @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(40px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in-up {
            animation: fadeInUp 0.7s cubic-bezier(.39,.575,.565,1) both;
          }
        `}</style>
      </div>
    </>
  );
}
