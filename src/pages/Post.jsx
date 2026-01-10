import React from 'react';
import { useParams, Link } from 'react-router-dom';

export default function Post({ posts, onUpdate }) {
  const { id } = useParams();
  const postIndex = posts.findIndex(p => p.id === Number(id));
  const post = posts[postIndex];
  const [comment, setComment] = React.useState('');
  const [localComments, setLocalComments] = React.useState(post?.comments || []);

  // Tambah views saat mount
  React.useEffect(() => {
    if (post && typeof onUpdate === 'function') {
      if (!post.views) post.views = 0;
      onUpdate({ ...post, views: (post.views || 0) + 1, comments: localComments });
    }
    // eslint-disable-next-line
  }, []);

  // Tambah komentar
  const handleAddComment = e => {
    e.preventDefault();
    if (!comment.trim()) return;
    const newComments = [...(post.comments || []), { text: comment, date: new Date().toISOString() }];
    setLocalComments(newComments);
    setComment('');
    if (typeof onUpdate === 'function') {
      onUpdate({ ...post, comments: newComments });
    }
  };

  if (!post) return <div className="text-center text-red-500 font-bold">Post tidak ditemukan.</div>;

  return (
    <div className="bg-white rounded-xl shadow p-8 max-w-2xl mx-auto border-l-4 border-blue-700">
      <h1 className="text-3xl font-bold text-blue-800 mb-2">{post.title}</h1>
      <p className="text-gray-400 mb-2">{post.date} &middot; <span className="text-blue-700 font-semibold">{post.views || 1} views</span></p>
      <pre className="whitespace-pre-wrap text-gray-700 mb-6">{post.content}</pre>
      <div className="mb-6">
        <h2 className="text-xl font-bold mb-2 text-blue-700">Komentar</h2>
        <form onSubmit={handleAddComment} className="flex gap-2 mb-4">
          <input
            className="flex-1 border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-400"
            placeholder="Tulis komentar..."
            value={comment}
            onChange={e => setComment(e.target.value)}
          />
          <button type="submit" className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800 transition">Kirim</button>
        </form>
        <div className="space-y-2">
          {(post.comments || []).length === 0 && <div className="text-gray-400">Belum ada komentar.</div>}
          {(post.comments || []).map((c, i) => (
            <div key={i} className="bg-blue-50 rounded px-3 py-2 text-gray-700">
              <span>{c.text}</span>
              <span className="block text-xs text-gray-400 mt-1">{new Date(c.date).toLocaleString()}</span>
            </div>
          ))}
        </div>
      </div>
      <Link to="/" className="text-blue-700 font-semibold hover:underline">← Kembali ke Blog</Link>
    </div>
  );
}
