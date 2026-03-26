import Image from "next/image";

export function Header() {
  return (
    <header className="w-full bg-[#0A1A2F] text-white py-4 px-6 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <Image
          src="/logo.png" // adapte le nom si besoin
          alt="Equitotal Services Logo"
          width={40}
          height={40}
          priority
        />
      </div>

      <nav className="flex gap-6 text-sm font-medium">
        <a href="#services" className="hover:text-yellow-300 transition">
          Nos services
        </a>
        <a href="#contact" className="hover:text-yellow-300 transition">
          Contact
        </a>
      </nav>
    </header>
  );
}
