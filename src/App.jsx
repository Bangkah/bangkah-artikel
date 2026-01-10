
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Post from './pages/Post';
import About from './pages/About';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import Abot from './pages/Abot';
import Contak from './pages/Contak';
import Artikel from './pages/Artikel';
import React from 'react';

function App() {
  const [posts, setPosts] = React.useState([
    {
      id: 1,
      title: 'Tips Menulis Blog yang Menarik',
      excerpt: 'Bagaimana membuat tulisan blog yang memikat pembaca? Simak tips berikut!',
      content: `Bagaimana membuat tulisan blog yang memikat pembaca?\n\n1. Tentukan topik yang relevan.\n2. Gunakan judul yang menarik.\n3. Sertakan gambar atau ilustrasi.\n4. Tulis dengan bahasa yang mudah dipahami.\n5. Akhiri dengan ajakan berdiskusi.`,
      date: '2026-01-10',
      source: 'https://dev.to/bangkah/skip-the-boilerplate-scaffold-a-production-ready-laravel-project-in-seconds-with-bangkah-starter-31p8',
    },
    {
      id: 2,
      title: 'Mengenal React untuk Pemula',
      excerpt: 'React adalah library JavaScript populer. Pelajari dasar-dasarnya di sini.',
      content: `React adalah library JavaScript untuk membangun UI interaktif.\n\n- Komponen\n- Props & State\n- JSX\n\nMulai belajar React untuk membuat web modern!`,
      date: '2026-01-09',
    },
    {
      id: 3,
      title: 'Cara Membuat Website Responsive',
      excerpt: 'Website modern harus responsive. Berikut langkah-langkah mudahnya.',
      content: `Website responsive menyesuaikan tampilan di berbagai perangkat.\n\nGunakan CSS Flexbox/Grid dan media queries untuk hasil optimal.`,
      date: '2026-01-08',
    },
    {
      id: 4,
      title: 'Skip the Boilerplate: Scaffold a Production-Ready Laravel Project in Seconds with Bangkah Starter Kit',
      excerpt: 'Bangkah adalah CLI tool untuk scaffolding Laravel siap produksi dengan Docker, web/API template, dan best practice. Hemat waktu setup, langsung coding!',
      content: `Hello developers 👋\n\nSetting up a production-ready Laravel project often means repeating the same steps: configuring Docker, setting up Nginx, wiring authentication, preparing environment files, and optimizing builds. While all of this is necessary, it quickly becomes a time-consuming and repetitive process—especially when you start new projects often.\n\nItulah alasan Bangkah dibuat — sebuah Laravel Starter Kit.\n\n## 🤔 Why Bangkah? Solving Setup Fatigue\n\nBangkah jauh melampaui sekadar \`composer create-project\`. Ia membundel infrastruktur penting untuk aplikasi Laravel modern, agar kamu bisa fokus membangun fitur, bukan setup awal.\n\n## ⚙️ Key Features\n\n### 1️⃣ Zero-Config Docker Integration\n- docker-compose.yml siap pakai\n- Nginx, PHP-FPM 8.2+, MySQL/PostgreSQL\n- Jalankan app lokal cukup 1-2 perintah Docker\n\n### 2️⃣ Dual Application Templates\n- Web App: Auth, Vite, Breeze/UI, struktur web\n- API: CORS, struktur API-first, versioning, rate limit\n\n### 3️⃣ Optimized for Speed & Security\n- Multi-stage Docker build\n- Composer install cepat\n- UI modern: Tailwind/Bootstrap\n- Siap production dari awal\n\n## 🚀 Get Started\n\nCek source code, dokumentasi, dan coba Bangkah:\nhttps://github.com/Bangkah/bangkah-launcher\n\n## 🤝 We Need Your Collaboration\n\nBangkah open source dan untuk komunitas Laravel.\n- Coba dan hemat waktu setup\n- Beri feedback & kontribusi\n- Fork & PR\n\nLet’s build a faster and cleaner way to launch Laravel projects together 🚀\n\nHappy Coding! 💻✨`,
      date: '2026-01-10',
    },
  ]);

  // Dark mode global state
  const [dark, setDark] = React.useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') === 'dark';
    }
    return true;
  });
  React.useEffect(() => {
    if (dark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [dark]);

  const addPost = post => setPosts(p => [...p, post]);
  const updatePost = updated => setPosts(p => p.map(post => post.id === updated.id ? updated : post));
  const deletePost = id => setPosts(p => p.filter(post => post.id !== id));

  return (
    <div className={
      `flex flex-col min-h-screen transition-colors duration-300 ${dark ? 'bg-[#0e1320] text-white' : 'bg-white text-[#101624]'}`
    }>
      <Navbar dark={dark} setDark={setDark} />
      <main className="main-content flex-1">
        <Routes>
          <Route path="/" element={<Home posts={posts} onAdd={addPost} onUpdate={updatePost} onDelete={deletePost} />} />
          <Route path="/post/:id" element={<Post posts={posts} onUpdate={updatePost} />} />
          <Route path="/artikel" element={<Artikel posts={posts} />} />
          <Route path="/tentang" element={<About />} />
          <Route path="/kontak" element={<Contact />} />
          <Route path="/abot" element={<Abot />} />
          <Route path="/contak" element={<Contak />} />
        </Routes>
      </main>
      <Footer dark={dark} />
    </div>
  );
}

export default App;

