"use client";

export default function Signalement({ id }) {
  return (
    <div className="bg-white paper-shadow border border-outline-variant p-6 md-p-12 min-h-1100 relative">
      {/* Official Header Section */}
      <div className="flex-col md-flex-row justify-between items-start md-items-center mb-10 gap-6 border-b-2 border-primary pb-8">
        <div className="w-full md-w-auto flex justify-center md-justify-start">
          <div className="brand-logo-fallback">IFCE / SIRE</div>
        </div>
        <div className="text-right md-max-w-xs path-mobile-center">
          <h1 className="font-headline-lg text-primary uppercase leading-tight mb-2">Livret Signalétique</h1>
          <p className="text-label-bold text-secondary uppercase tracking-widest">Document d'Identification Officiel</p>
          <p className="text-label-sm text-on-surface-variant mt-1">Émis par l'Institut Français du Cheval et de l'Équitation</p>
        </div>
      </div>

      {/* IDENTIFICATION DU CHEVAL */}
      <section className="mb-stack-section">
        <div className="border-t-4 border-primary-container pt-4 mb-6">
          <h2 className="font-headline-md text-primary tracking-tight">IDENTIFICATION DU CHEVAL</h2>
        </div>
        <div className="grid-fields-2">
          <div className="flex-col gap-1">
            <label className="text-label-bold text-on-surface-variant uppercase">Nom du cheval</label>
            <div className="field-box font-bold text-primary text-body-lg">-- DONNÉE API (ID: {id}) --</div>
          </div>
          <div className="flex-col gap-1">
            <label className="text-label-bold text-on-surface-variant uppercase">Sexe</label>
            <div className="field-box text-body-md">-- DONNÉE API --</div>
          </div>
          <div className="flex-col gap-1">
            <label className="text-label-bold text-on-surface-variant uppercase">Robe</label>
            <div className="field-box text-body-md">-- DONNÉE API --</div>
          </div>
          <div className="flex-col gap-1">
            <label className="text-label-bold text-on-surface-variant uppercase">Date de naissance</label>
            <div className="field-box text-body-md">-- DONNÉE API --</div>
          </div>
          <div className="flex-col gap-1">
            <label className="text-label-bold text-on-surface-variant uppercase">N° SIRE</label>
            <div className="field-box font-bold tracking-wider text-primary">-- DONNÉE API --</div>
          </div>
          <div className="flex-col gap-1">
            <label className="text-label-bold text-on-surface-variant uppercase">N° UELN</label>
            <div className="field-box text-body-md">-- DONNÉE API --</div>
          </div>
          <div className="flex-col md-col-span-2 gap-1">
            <label className="text-label-bold text-on-surface-variant uppercase">Micro-puce (Transpondeur)</label>
            <div className="field-box flex-justify-between items-center bg-surface-container-low">
              <span className="font-mono text-primary">-- DONNÉE API --</span>
              <span className="material-symbols-outlined text-secondary font-filled-icon">verified</span>
            </div>
          </div>
        </div>
      </section>

      {/* SIGNALEMENT LITTÉRAIRE */}
      <section className="mb-stack-section">
        <div className="border-t-4 border-primary-container pt-4 mb-6 flex-justify-between items-end">
          <h2 className="font-headline-md text-primary tracking-tight">SIGNALEMENT LITTÉRAIRE</h2>
          <div className="text-label-sm text-secondary uppercase italic">Description morphologique précise</div>
        </div>
        <div className="space-y-6">
          <div className="grid-literary">
            <label className="text-label-bold text-primary md-mt-3">TÊTE</label>
            <div className="literary-box text-on-surface-variant text-body-md italic">
              Description des marques en tête, listes, et particularités...
            </div>
          </div>
          <div className="grid-literary">
            <label className="text-label-bold text-primary md-mt-3 uppercase">Antérieur gauche</label>
            <div className="literary-box text-on-surface-variant text-body-md">-- À compléter --</div>
          </div>
          <div className="grid-literary">
            <label className="text-label-bold text-primary md-mt-3 uppercase">Antérieur droit</label>
            <div className="literary-box text-on-surface-variant text-body-md">-- À compléter --</div>
          </div>
          <div className="grid-literary">
            <label className="text-label-bold text-primary md-mt-3 uppercase">Postérieur gauche</label>
            <div className="literary-box text-on-surface-variant text-body-md">-- À compléter --</div>
          </div>
          <div className="grid-literary">
            <label className="text-label-bold text-primary md-mt-3 uppercase">Postérieur droit</label>
            <div className="literary-box text-on-surface-variant text-body-md">-- À compléter --</div>
          </div>
          <div className="grid-literary">
            <label className="text-label-bold text-primary md-mt-3 uppercase">Corps</label>
            <div className="literary-box text-on-surface-variant text-body-md">
              Description des marques sur le corps, épis, et autres caractéristiques...
            </div>
          </div>
        </div>
      </section>

      {/* Stamp */}
      <div className="official-stamp shadow-stamp">
        <div className="stamp-ring text-secondary border-secondary">
          <span className="stamp-text-mini">Institut Français du Cheval</span>
          <span className="material-symbols-outlined stamp-icon-size">approval</span>
          <span className="stamp-text-mini">Certifié conforme</span>
        </div>
        <p className="stamp-sire-tag text-secondary">S.I.R.E. Registry</p>
      </div>
    </div>
  );
}