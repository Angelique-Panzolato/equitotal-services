"use client";

export default function Proprietaire() {
  return (
    <div className="flex-col">
      {/* Hero / Header Section */}
      <div className="mb-stack-section">
        <div className="header-mutation-block mb-stack-element">
          <div>
            <p className="text-label-bold text-secondary uppercase tracking-widest">Document Certifié SIRE</p>
            <h2 className="font-headline-xl text-primary mt-1">PROPRIÉTAIRES ET MUTATIONS</h2>
          </div>
          <button className="btn-mutation">
            <span className="material-symbols-outlined">add_circle</span> DÉCLARER UNE MUTATION
          </button>
        </div>
        <div className="h-2px w-full bg-primary"></div>
      </div>

      {/* Horse Identity Summary Card */}
      <div className="bg-white border border-outline-variant p-inset-card mb-stack-section identity-summary-card">
        <div className="horse-avatar-container shrink-0 border border-outline-variant">
          <div className="fallback-horse-photo">🐴</div>
        </div>
        <div className="flex-grow grid-identity-summary">
          <div>
            <label className="text-label-bold text-outline-variant uppercase block mb-1">Nom du Cheval</label>
            <p className="font-headline-md text-primary">VULCAIN DE LA COUR</p>
          </div>
          <div>
            <label className="text-label-bold text-outline-variant uppercase block mb-1">N° SIRE</label>
            <p className="font-headline-md text-primary">09123456Z</p>
          </div>
          <div>
            <label className="text-label-bold text-outline-variant uppercase block mb-1">Statut Actuel</label>
            <div className="inline-flex items-center status-badge-validated">
              <span className="material-symbols-outlined font-filled-icon text-16 mr-1">check_circle</span> VALIDÉ IFCE
            </div>
          </div>
        </div>
      </div>

      {/* Ownership Table Section */}
      <section className="bg-white border-t-4 border-primary shadow-sm overflow-hidden rounded-t-sm">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse-table">
            <thead>
              <tr className="bg-surface-container border-b border-outline-variant text-left">
                <th className="p-4 text-label-bold text-on-surface-variant uppercase w-12 text-center">N°</th>
                <th className="p-4 text-label-bold text-on-surface-variant uppercase">Propriétaire & Adresse</th>
                <th className="p-4 text-label-bold text-on-surface-variant uppercase">Date d'Acquisition</th>
                <th className="p-4 text-label-bold text-on-surface-variant uppercase text-right">Validation Officielle</th>
              </tr>
            </thead>
            <tbody className="table-body-divide">
              {/* Current Owner */}
              <tr className="row-current-owner">
                <td className="p-6 font-headline-md text-primary text-center">3</td>
                <td className="p-6">
                  <div className="text-label-bold text-body-lg text-primary uppercase">M. JEAN-PIERRE DUPONT</div>
                  <div className="text-body-md text-on-surface-variant mt-1 italic">
                    Haras des Grands Chênes<br />
                    44000 NANTES, France
                  </div>
                </td>
                <td className="p-6 text-body-lg text-primary align-top">12 / 05 / 2022</td>
                <td className="p-6 text-right relative table-cell-stamp">
                  <div className="digital-stamp text-primary-container border-primary">
                    Cachet Numérique IFCE<br />
                    <span className="font-bold">CERTIFIÉ LE 15/05/2022</span><br />
                    ID-TRANS: 982-AX-32
                  </div>
                  <div className="mt-2 flex justify-end">
                    <button className="text-primary hover-underline text-label-sm link-btn">Télécharger Attestation</button>
                  </div>
                </td>
              </tr>
              {/* Past Owner 2 */}
              <tr className="row-past-owner">
                <td className="p-6 font-headline-md text-on-surface-variant text-center opacity-50">2</td>
                <td className="p-6">
                  <div className="text-label-bold text-body-lg text-on-surface-variant uppercase">ÉLEVAGE DU VAL D'OR</div>
                  <div className="text-body-md text-on-surface-variant mt-1 italic">
                    12 Route du Champ de Foire<br />
                    14000 CAEN, France
                  </div>
                </td>
                <td className="p-6 text-body-lg text-on-surface-variant align-top">04 / 09 / 2015</td>
                <td className="p-6 text-right table-cell-stamp">
                  <div className="digital-stamp border-outline-variant text-on-surface-variant opacity-60">
                    Mutation Validée<br />
                    Service SIRE
                  </div>
                </td>
              </tr>
              {/* Original Owner / Breeder */}
              <tr className="row-past-owner">
                <td className="p-6 font-headline-md text-on-surface-variant text-center opacity-50">1</td>
                <td className="p-6">
                  <div className="text-label-bold text-body-lg text-on-surface-variant uppercase">MME SOPHIE MARTIN (Naisseur)</div>
                  <div className="text-body-md text-on-surface-variant mt-1 italic">
                    Quartier de l'Hippodrome<br />
                    61120 VIMOUTIERS, France
                  </div>
                </td>
                <td className="p-6 text-body-lg text-on-surface-variant align-top">01 / 04 / 2009</td>
                <td className="p-6 text-right table-cell-stamp">
                  <div className="digital-stamp border-outline-variant text-on-surface-variant opacity-60">
                    Enregistrement<br />
                    Initial de Naissance
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Information Box */}
      <div className="mt-stack-section bg-surface-container-low border-l-4 border-secondary p-inset-card flex gap-4 alert-regulatory-box">
        <span className="material-symbols-outlined text-secondary text-32 shrink-0">info</span>
        <div>
          <h4 className="text-label-bold text-primary uppercase">Rappel Réglementaire</h4>
          <p className="text-body-md text-on-surface-variant mt-1">
            Toute mutation de propriété doit être déclarée auprès des services de l'IFCE dans un délai de 30 jours. Le document d'identification doit être mis à jour électroniquement ou par envoi postal pour les livrets anciens formats.
          </p>
        </div>
      </div>
    </div>
  );
}