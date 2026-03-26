import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative w-full h-[80vh] flex items-center justify-center">
        {/* Image de bannière */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/banner.jpg')" }}
        />

        {/* Overlay bleu nuit */}
        <div className="absolute inset-0 bg-[#0A0F1F]/70" />

        {/* Contenu */}
        <div className="relative z-10 text-center px-6 max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            La solution digitale dédiée aux professionnels du secteur équin
          </h1>

          <p className="text-lg md:text-xl text-gray-200 mb-8">
            Simplifiez la gestion, optimisez vos services et offrez une expérience moderne à vos clients.
          </p>

          <div className="flex items-center justify-center gap-4">
            <a
              href="/contact"
              className="px-6 py-3 bg-white text-[#0A0F1F] font-semibold rounded-md hover:bg-gray-200 transition"
            >
              Demander une démo
            </a>

            <a
              href="/services"
              className="px-6 py-3 border border-white text-white font-semibold rounded-md hover:bg-white hover:text-[#0A0F1F] transition"
            >
              Découvrir nos services
            </a>
          </div>
        </div>
      </section>

      {/* SECTION CARTES */}
      <section className="w-full py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-[#0A0F1F] text-center mb-12">
            Nos Services Principaux
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            
            {/* Carte Transport & Location */}
            <div className="bg-[#0A0F1F] text-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition cursor-pointer">
              <h3 className="text-2xl font-semibold mb-4">
                Transport & Location de Véhicules
              </h3>
              <p className="text-gray-300 mb-6">
                Gérez vos transports, vos locations de vans et camions, et suivez vos trajets en toute simplicité.
              </p>
              <a
                href="/services"
                className="inline-block px-5 py-2 bg-white text-[#0A0F1F] font-medium rounded-md hover:bg-gray-200 transition"
              >
                En savoir plus
              </a>
            </div>

            {/* Carte Prestataires de Santé Équin */}
            <div className="bg-[#0A0F1F] text-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition cursor-pointer">
              <h3 className="text-2xl font-semibold mb-4">
                Prestataires de Santé Équin
              </h3>
              <p className="text-gray-300 mb-6">
                Un espace dédié aux vétérinaires, ostéopathes, maréchaux et autres professionnels du bien-être équin.
              </p>
              <a
                href="/services"
                className="inline-block px-5 py-2 bg-white text-[#0A0F1F] font-medium rounded-md hover:bg-gray-200 transition"
              >
                En savoir plus
              </a>
            </div>

          </div>
        </div>
      </section>
      {/* FOOTER */}
<footer className="w-full bg-[#0A0F1F] text-white py-10 mt-20">
  <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">

    {/* Logo + Nom */}
    <div className="flex items-center gap-3">
      <Image
        src="/Equitruck Services Logo.png"
        alt="Equitotal Services Logo"
        width={40}
        height={40}
      />
      <span className="text-lg font-semibold">Equitotal Services</span>
    </div>

    {/* Liens */}
    <div className="flex gap-6 text-gray-300">
      <a href="/a-propos" className="hover:text-white transition">À propos</a>
      <a href="/services" className="hover:text-white transition">Services</a>
      <a href="/contact" className="hover:text-white transition">Contact</a>
    </div>

    {/* Copyright */}
    <div className="text-gray-400 text-sm">
      © {new Date().getFullYear()} Equitotal Services. Tous droits réservés.
    </div>
  </div>
</footer>

    </>
  );
}
