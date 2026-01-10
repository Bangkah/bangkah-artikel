

import React from 'react';
import Seo from '../components/Seo';

export default function About() {
	return (
		<>
			<Seo
				title="Tentang Bangkah - Muhammad Dhiyaul Atha (mdhiyaulatha)"
				description="Profil, branding, dan misi Bangkah. Personal blog oleh Muhammad Dhiyaul Atha (atha, mdhiyaulatha) membahas inspirasi, UMKM, teknologi, dan komunitas."
				keywords="tentang bangkah, tentang atha, tentang mdhiyaulatha, tentang muhammad dhiyaul atha, profil bangkah, branding bangkah, misi bangkah, blog atha, blog mdhiyaulatha, blog bangkah, bangkah artikel, bangkah inspirasi, bangkah komunitas"
			/>
			<div className="bg-white rounded-xl shadow p-8 max-w-2xl mx-auto border-l-4 border-blue-700 mt-8">
			<h1 className="text-3xl font-bold text-blue-800 mb-2">Tentang Bangkah</h1>
			<p className="text-gray-700 mb-2">
				<b>Bangkah</b> adalah personal blog & branding digital milik <span className="text-blue-700 font-semibold">Muhammad Dhiyaul Atha</span> (mdhiyaulatha).
				Blog ini membahas tips menulis, teknologi web, inspirasi digital, dan perjalanan membangun produk open source.
			</p>
			<p className="text-gray-700 mb-2">
				Website ini dibuat dengan <span className="font-semibold">React</span>, <span className="font-semibold">Vite</span>, dan <span className="font-semibold">Tailwind CSS</span>.
				Semua artikel, desain, dan kode bersifat open source dan dapat dikembangkan bersama komunitas.
			</p>
			<div className="my-4">
				<h2 className="text-xl font-bold text-blue-700 mb-1">Branding & Misi</h2>
				<ul className="list-disc ml-6 text-gray-700">
					<li>Menginspirasi generasi muda untuk menulis dan berbagi karya.</li>
					<li>Membuka peluang kolaborasi di bidang teknologi dan edukasi digital.</li>
					<li>Membangun komunitas kreator dan developer Indonesia.</li>
				</ul>
			</div>
			<div className="my-4">
				<h2 className="text-xl font-bold text-blue-700 mb-1">Kontak & Sosial</h2>
				<ul className="list-none ml-0 text-gray-700">
					  <li>Email: <a href="mailto:mdhyaulatha@gmail.com" className="text-blue-700 underline">mdhyaulatha@gmail.com</a></li>
					  <li>Instagram: <a href="https://instagram.com/mdhiyaulatha" className="text-blue-700 underline" target="_blank" rel="noopener noreferrer">@mdhiyaulatha</a></li>
					  <li>GitHub: <a href="https://github.com/Bangkah" className="text-blue-700 underline" target="_blank" rel="noopener noreferrer">Bangkah</a></li>
				</ul>
			</div>
				<p className="text-gray-500 text-sm mt-6">&copy; 2026 Bangkah. All rights reserved.</p>
			</div>
		</>
	);
}

