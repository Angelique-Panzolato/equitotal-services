"use client";

import Link from "next/link";

export function Header() {
  return (
    <header className="w-full bg-[#0A1A2F] text-white py-4 shadow-md">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6">
        
        {/* Logo + Nom */}
        <div className="flex items-center gap-3">
          <img src="/logo.png" alt="Logo EquiTotal" className="h-10 w-auto" />
          <span className="text-xl font-semibold tracking-wide">
            EQUITOTAL SERVICES
          </span>
        </div>

        {/* Menu */}
        <nav className="flex items-center gap-8 text-sm font-medium">
          <Link href="/">Accueil</Link>

          <div className="relative group">
            <button className="cursor-pointer">Nos services</button>

            <div className="absolute hidden group-hover:flex flex-col bg-white text-black shadow-lg rounded-md mt-2 w-56">
              <Link href="/transport" className="px-4 py-2 hover:bg-gray-100">
                Transport & Location de véhicule
              </Link>
              <Link href="/sante" className="px-4 py-2 hover:bg-gray-100">
                Prestataire de santé équin
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
