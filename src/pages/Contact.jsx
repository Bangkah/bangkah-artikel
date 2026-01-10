
import React from 'react';
import Seo from '../components/Seo';


export default function Contact() {
	const [form, setForm] = React.useState({ nama: '', email: '', pesan: '' });
	const [sent, setSent] = React.useState(false);

	const handleChange = e => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};

	const handleSubmit = e => {
		e.preventDefault();
		setSent(true);
		setForm({ nama: '', email: '', pesan: '' });
		setTimeout(() => setSent(false), 4000);
	};

	return (
		<>
			<div className="bg-white rounded-xl shadow p-8 max-w-2xl mx-auto border-l-4 border-blue-700 mt-8">
				<Seo
					title="Kontak Bangkah - Muhammad Dhiyaul Atha (mdhiyaulatha)"
					description="Hubungi Bangkah (Muhammad Dhiyaul Atha) untuk kolaborasi, pertanyaan, atau kerjasama. Email, Instagram, GitHub tersedia."
					keywords="kontak bangkah, kontak atha, kontak mdhiyaulatha, kontak muhammad dhiyaul atha, email bangkah, email atha, email mdhiyaulatha, instagram bangkah, github bangkah, hubungi bangkah, hubungi atha, hubungi mdhiyaulatha"
				/>
				<h1 className="text-3xl font-bold text-blue-800 mb-2">Kontak Bangkah</h1>
				<p className="mb-2 text-gray-700">Ingin terhubung, kolaborasi, atau sekadar menyapa? Silakan hubungi saya melalui:</p>
				<ul className="list-none ml-0 text-gray-700 mb-4">
					<li>Email: <a href="mailto:mdhyaulatha@gmail.com" className="text-blue-700 underline">mdhyaulatha@gmail.com</a></li>
					<li>Instagram: <a href="https://instagram.com/mdhiyaulatha" className="text-blue-700 underline" target="_blank" rel="noopener noreferrer">@mdhiyaulatha</a></li>
					<li>GitHub: <a href="https://github.com/Bangkah" className="text-blue-700 underline" target="_blank" rel="noopener noreferrer">Bangkah</a></li>
				</ul>
				<div className="my-6">
					<h2 className="text-xl font-bold text-blue-700 mb-2">Form Kontak</h2>
					{sent && (
						<div className="mb-4 p-3 bg-green-100 text-green-700 rounded">Pesan berhasil dikirim! Terima kasih 🙏</div>
					)}
					<form onSubmit={handleSubmit} className="flex flex-col gap-4">
						<input
							type="text"
							name="nama"
							placeholder="Nama"
							className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
							value={form.nama}
							onChange={handleChange}
							required
						/>
						<input
							type="email"
							name="email"
							placeholder="Email"
							className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
							value={form.email}
							onChange={handleChange}
							required
						/>
						<textarea
							name="pesan"
							placeholder="Pesan"
							className="border rounded px-3 py-2 min-h-[100px] focus:outline-none focus:ring-2 focus:ring-blue-300"
							value={form.pesan}
							onChange={handleChange}
							required
						/>
						<button
							type="submit"
							className="bg-blue-700 text-white font-semibold px-6 py-2 rounded hover:bg-blue-800 transition"
						>
							Kirim Pesan
						</button>
					</form>
				</div>
			</div>
		</>
	);
}

