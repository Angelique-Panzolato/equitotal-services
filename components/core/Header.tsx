import Image from "next/image";
import Link from "next/link";

export function Header() {
  return (
    <header className="flex items-center justify-between px-8 py-4 bg-[#0A0F1F]">
      {/* Logo + Nom */}
      <div className="flex items-center gap-3">
        <Image
          src="/Equitruck Services Logo.png"
          alt="Equitruck Services Logo"
          width={40}
          height={40}
        />
        <span className="text-white font-semibold text-lg">
          Equitotal Services
        </span>
      </div>

      {/* Navigation */}
      <nav className="flex items-center gap-8">
        <Link href="/" className="text-white hover:text-gray-300 transition">
          Accueil
        </Link>
        <Link href="/services" className="text-white hover:text-gray-300 transition">
          Services
        </Link>
        <Link href="/a-propos" className="text-white hover:text-gray-300 transition">
          À propos
        </Link>
        <Link href="/contact" className="text-white hover:text-gray-300 transition">
          Contact
        </Link>

        {/* CTA */}
        <Link
          href="/espace-client"
          className="px-4 py-2 rounded-md bg-white text-[#0A0F1F] font-medium hover:bg-gray-200 transition"
        >
          Espace client
        </Link>
      </nav>
    </header>
  );
}
