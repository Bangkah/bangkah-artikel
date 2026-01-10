
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Post from './pages/Post';
import About from './pages/About';
import Contact from './pages/Contact';

export default function App() {
  const [posts, setPosts] = React.useState([
    {
      id: 1,
      title: 'Tips Menulis Blog yang Menarik',
      excerpt: 'Bagaimana membuat tulisan blog yang memikat pembaca? Simak tips berikut!',
      content: `Bagaimana membuat tulisan blog yang memikat pembaca?\n\n1. Tentukan topik yang relevan.\n2. Gunakan judul yang menarik.\n3. Sertakan gambar atau ilustrasi.\n4. Tulis dengan bahasa yang mudah dipahami.\n5. Akhiri dengan ajakan berdiskusi.`,
      date: '2026-01-10',
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
  ]);

  // CRUD Handlers (dummy, to be implemented)
  const addPost = post => setPosts(p => [...p, post]);
  const updatePost = updated => setPosts(p => p.map(post => post.id === updated.id ? updated : post));
  const deletePost = id => setPosts(p => p.filter(post => post.id !== id));

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="main-content flex-1">
        <Routes>
          <Route path="/" element={<Home posts={posts} onAdd={addPost} onUpdate={updatePost} onDelete={deletePost} />} />
          <Route path="/post/:id" element={<Post posts={posts} onUpdate={updatePost} />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
  <Footer />
    </div>
  );
}

