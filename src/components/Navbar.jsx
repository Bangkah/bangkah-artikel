

import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
	const { pathname } = useLocation();
	const navLinks = [
		{ to: '/', label: 'Home' },
		{ to: '/about', label: 'About' },
		{ to: '/contact', label: 'Contact' },
	];
	const [open, setOpen] = React.useState(false);

	return (
		<nav className="sticky top-0 z-30 w-full bg-white/80 backdrop-blur border-b border-blue-100 shadow-sm">
			<div className="max-w-5xl mx-auto flex items-center justify-between px-4 py-3">
				<Link to="/" className="text-2xl font-extrabold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-blue-500 to-cyan-400 drop-shadow">Bangkah</Link>
				{/* Desktop nav */}
				<div className="hidden md:flex gap-1">
					{navLinks.map(link => (
						<Link
							key={link.to}
							to={link.to}
							className={`px-4 py-2 rounded-lg font-semibold transition-all duration-200 
								${pathname === link.to ? 'bg-blue-700 text-white shadow scale-105' : 'text-blue-700 hover:bg-blue-100 hover:scale-105'}`}
						>
							{link.label}
						</Link>
					))}
				</div>
				{/* Hamburger for mobile */}
				<button className="md:hidden flex flex-col gap-1 p-2" onClick={() => setOpen(o => !o)} aria-label="Menu">
					<span className={`block w-6 h-0.5 bg-blue-700 rounded transition-all ${open ? 'rotate-45 translate-y-1.5' : ''}`}></span>
					<span className={`block w-6 h-0.5 bg-blue-700 rounded transition-all ${open ? 'opacity-0' : ''}`}></span>
					<span className={`block w-6 h-0.5 bg-blue-700 rounded transition-all ${open ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
				</button>
			</div>
			{/* Mobile nav dropdown */}
			{open && (
				<div className="md:hidden flex flex-col gap-1 px-4 pb-3 animate-fade-in-down">
					{navLinks.map(link => (
						<Link
							key={link.to}
							to={link.to}
							onClick={() => setOpen(false)}
							className={`px-4 py-2 rounded-lg font-semibold transition-all duration-200 
								${pathname === link.to ? 'bg-blue-700 text-white shadow scale-105' : 'text-blue-700 hover:bg-blue-100 hover:scale-105'}`}
						>
							{link.label}
						</Link>
					))}
				</div>
			)}
			<style>{`
				@keyframes fade-in-down {
					from { opacity: 0; transform: translateY(-20px); }
					to { opacity: 1; transform: translateY(0); }
				}
				.animate-fade-in-down {
					animation: fade-in-down 0.3s cubic-bezier(.39,.575,.565,1) both;
				}
			`}</style>
		</nav>
	);
}

