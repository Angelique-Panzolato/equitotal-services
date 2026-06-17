"use client";

export default function Identite({ id, cheval }) {
  // Sécurité au cas où les données mettraient du temps à charger
  if (!cheval) {
    return <div className="p-8 text-center">Chargement des données d'identification...</div>;
  }

  // Sécurité : on vérifie si la race contient "ANGLO-ARABE" (gère les majuscules/minuscules)
  const isAngloArabe = cheval.race?.toUpperCase().includes("ANGLO-ARABE");

  return (
    <div className="max-w-[1000px] w-full bg-white border border-outline-variant relative overflow-hidden shadow-none mx-auto">
      {/* Header Officiel */}
      <header className="w-full px-6 py-4 flex flex-col md:flex-row justify-between items-center border-b border-outline-variant bg-surface">
        <div className="flex items-center gap-4">
          <img 
            alt="Logo République Française" 
            className="h-16 w-auto" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBksUYcrb2RoJrwlZHN7q0zsm6h7AXD4fuVDFsjkFijIlyJudaBgF6GuHCsC2xbnp9FX6G_GwlpwMcgolWVuFwAgsQ-cc-gOS1N_N_dt8NhxzwYZ9qizj-GV08nGFA_3Gj81VkPMc4AIoS9AqSxGxAUO1r5EhCR1C3CvlExvkmOLr7IZxQQBYfkzsk-LRDUITu4GqbF0QaeQJ0en5g8SlBCkWszcPA0NExTXzWB49GsVT5v6hsaIMqTv_1_Fagx2LlgTfx-lmlStkDg"
          />
          <div className="flex flex-col">
            <span className="font-bold text-primary tracking-wide text-[14px]">DOCUMENT D'IDENTIFICATION</span>
            <span className="text-[12px] italic opacity-70">IDENTIFICATION DOCUMENT</span>
          </div>
        </div>
        <div className="mt-4 md:mt-0 flex gap-6 items-center">
          <div className="text-right">
            <p className="uppercase text-primary font-bold text-[14px]">IFCE - SIRE</p>
            <p className="text-[11px]">Institut français du cheval et de l'équitation</p>
          </div>
          <span className="material-symbols-outlined text-primary text-4xl">description</span>
        </div>
      </header>

      {/* Contenu Principal */}
      <main className="p-8 space-y-8">
        <div className="text-center space-y-2 border-b-2 border-primary pb-4">
          <h1 className="text-[20px] font-bold text-primary uppercase tracking-wide">DOCUMENT D'IDENTIFICATION d'un équidé</h1>
          <p className="text-[12px] italic opacity-70">Part A : Identification details</p>
        </div>

        {/* Le layout s'adapte : si c'est un AA, grid avec le logo à droite. Sinon, l'info prend toute la largeur */}
        <div className={isAngloArabe ? "grid grid-cols-1 md:grid-cols-12 gap-8 items-start" : "w-full"}>
          
          {/* Section Infos SIRE */}
          <div className={isAngloArabe ? "md:col-span-8 space-y-6" : "w-full space-y-6"}>
            <div className="space-y-4">
              <div className="flex flex-col md:flex-row md:items-end gap-2 border-b border-outline-variant pb-1">
                <h2 className="text-[20px] font-bold text-primary uppercase whitespace-nowrap">
                  {cheval.nom}
                </h2>
              </div>
              
              <div className="grid grid-cols-1 gap-4 mt-6">
                {/* N° SIRE */}
                <div className="flex justify-between items-end border-b border-outline-variant py-2">
                  <div>
                    <span className="text-primary font-bold text-[14px]">N° SIRE : </span>
                    <span className="text-[18px] font-semibold text-on-background">{cheval.sire}</span>
                  </div>
                  <div className="hidden sm:block text-center px-4">
                    <div className="h-8 bg-black w-32 flex items-center justify-center text-white text-[8px] tracking-widest px-1">||| || | ||| || ||| | |||</div>
                    <span className="text-[10px] font-mono">* {cheval.sire} *</span>
                  </div>
                </div>

                {/* N° UELN */}
                <div className="flex justify-between items-end border-b border-outline-variant py-2">
                  <div>
                    <span className="text-primary font-bold text-[14px]">N° UELN : </span>
                    <span className="text-[18px] font-semibold text-on-background">{cheval.ueln}</span>
                  </div>
                  <div className="hidden sm:block text-center px-4">
                    <div className="h-8 bg-black w-48 flex items-center justify-center text-white text-[8px] tracking-widest px-1">||| || | ||| || ||| | ||| || | |||</div>
                    <span className="text-[10px] font-mono">* {cheval.ueln} *</span>
                  </div>
                </div>

                {/* Code Transpondeur */}
                <div className="flex justify-between items-end border-b border-outline-variant py-2">
                  <div>
                    <span className="text-primary font-bold text-[14px]">Code transpondeur : </span>
                    <span className="text-[18px] font-semibold text-on-background">{cheval.transpondeur}</span>
                    <p className="text-[12px] italic opacity-60">transponder code :</p>
                  </div>
                  <div className="hidden sm:block text-center px-4">
                    <div className="h-8 bg-black w-48 flex items-center justify-center text-white text-[8px] tracking-widest px-1">|| ||| || | || ||| | || ||| || | ||</div>
                    <span className="text-[10px] font-mono">* {cheval.transpondeur} *</span>
                  </div>
                </div>
              </div>

              {/* Race & Condition pour le Sang Arabe */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                <div className="bg-surface-container-low p-3 border border-outline-variant">
                  <label className="text-primary font-bold text-[14px] block">Race - <span className="italic font-normal">breed</span></label>
                  <span className="text-[18px] font-semibold uppercase text-on-background">{cheval.race}</span>
                </div>
                
                {/* On affiche le pourcentage de sang UNIQUEMENT si c'est un Anglo-Arabe */}
                {isAngloArabe && (
                  <div className="bg-surface-container-low p-3 border border-outline-variant">
                    <label className="text-primary font-bold text-[14px] block">% Sang Arabe</label>
                    <span className="text-[18px] font-semibold text-on-background">{cheval.pourcentageArabe}</span>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Section Droite Conditionnelle : Logo ANAA */}
          {isAngloArabe && (
            <div className="md:col-span-4 flex flex-col items-center justify-center p-6 border-2 border-primary border-dashed rounded-lg bg-white">
              <img 
                alt="Logo ANAA" 
                className="w-48 h-48 object-contain mb-4 mix-blend-multiply" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB1kGMr8hxh-oDBahddo3G9lT6ko0ODfAb8w5eGkrKVBzRRi4oGsoGp-s59n3tfRlG9Bwo4kJifHpDkzejcoARnP_v4XwfwzigYABvkvC4tBTpA8GLi328ayIQNSLY9Ko4P-seheDaqWOko1bXo8HxcMQqqHQk_jXbFH00OQDVvPjIh9NK_Q0eWGaNA2-aaFiwo_Af-FzLGmMFbOMwbW-W4wvHSMkHvCMqOCm7vEtPyQNlL81KxUuOjCSCxo3SQdFiOKvLN18ThAI3Q"
              />
              <div className="text-center">
                <p className="text-[20px] font-bold text-primary">ANAA</p>
                <p className="text-[14px] font-bold uppercase text-secondary">ANGLO-ARABE</p>
                <p className="text-[18px] font-semibold text-primary mt-2">AA</p>
              </div>
            </div>
          )}
        </div>

        {/* Footer de la Certification */}
        <div className="mt-12 pt-6 border-t border-primary">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full border border-primary flex items-center justify-center">
                  <span className="text-[10px] font-bold text-primary">H</span>
                </div>
                <span className="text-[14px] font-bold text-primary">SIRE - IFCE</span>
              </div>
              <p className="text-[11px] opacity-70">Document établi conformément à la réglementation en vigueur</p>
            </div>

            <div className="bg-white p-4 border border-outline-variant relative">
              <div className="absolute -top-3 left-4 bg-white px-2 text-[10px] uppercase font-bold text-primary">Organisme émetteur</div>
              <p className="text-[12px] font-bold">IFCE - SIRE BP3</p>
              <p className="text-[12px]">Route de troche</p>
              <p className="text-[12px]">19231 Arnac - Pompadour Cedex</p>
              <p className="text-[12px] text-primary underline mt-1">www.ifce.fr</p>
            </div>

            <div className="flex flex-col items-end gap-4">
              <div className="stamp-effect px-4 py-2 flex flex-col items-center border-2 border-primary rounded-full opacity-80 rotate-[-5deg]">
                <span className="text-[12px] font-bold uppercase text-primary">IFCE - SIRE</span>
                <span className="text-[10px] font-mono">JEAN-ROCH GAILLET</span>
                <span className="text-[8px] opacity-60 italic">Document édité le 11/12/2025</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[20px] font-bold text-primary">SIRE</span>
                <span className="italic text-[11px] self-end pb-1">ifce</span>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer Mentions */}
      <footer className="w-full px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4 border-t border-primary bg-surface-container-highest">
        <p className="text-[11px] text-on-surface-variant">Document établi conformément à la réglementation en vigueur - IFCE / SIRE</p>
        <div className="flex gap-4">
          <a className="text-[12px] text-on-surface-variant hover:text-primary transition-colors" href="#">Mentions Légales</a>
          <a className="text-[12px] text-on-surface-variant hover:text-primary transition-colors" href="#">Contact</a>
          <a className="text-[12px] text-on-surface-variant hover:text-primary transition-colors" href="#">RGPD</a>
        </div>
      </footer>
    </div>
  );
}