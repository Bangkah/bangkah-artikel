
import React from 'react';

export default function Contact() {
	return (
		<div className="bg-white rounded-xl shadow p-8 max-w-2xl mx-auto border-l-4 border-blue-700 mt-8">
			<h1 className="text-3xl font-bold text-blue-800 mb-2">Kontak Bangkah</h1>
			<p className="mb-2 text-gray-700">Ingin terhubung, kolaborasi, atau sekadar menyapa? Silakan hubungi saya melalui:</p>
			<ul className="list-none ml-0 text-gray-700 mb-4">
				<li>Email: <a href="mailto:mdhyaulatha@gmail.com" className="text-blue-700 underline">mdhyaulatha@gmail.com</a></li>
				<li>Instagram: <a href="https://instagram.com/mdhiyaulatha" className="text-blue-700 underline" target="_blank" rel="noopener noreferrer">@mdhiyaulatha</a></li>
				<li>GitHub: <a href="https://github.com/Bangkah" className="text-blue-700 underline" target="_blank" rel="noopener noreferrer">Bangkah</a></li>
			</ul>
			<p className="text-gray-500">Form kontak akan segera hadir.</p>
		</div>
	);
}

