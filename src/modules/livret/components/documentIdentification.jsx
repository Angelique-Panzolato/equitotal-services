import "./documentIdentification.css";
import logoIfce from "../../../assets/logos/logo-ifce.png";
import logoSire from "../../../assets/logos/logo-sire.png";
import logoAnaa from "../../../assets/logos/logo-anaa.png";

export default function DocumentIdentification({ data }) {
  return (
    <div className="livret-page page01">

      {/* TITRE OFFICIEL */}
      <header className="docid-header">
        <h1>DOCUMENT D’IDENTIFICATION d’un équidé</h1>
        <h2>IDENTIFICATION DOCUMENT for equidae</h2>
      </header>

      {/* IDENTITÉ DU CHEVAL */}
      <section className="docid-identite">
        <p><strong>Nom - Name :</strong> {data.nom}</p>
        <p><strong>N° SIRE :</strong> {data.sire}</p>
        <p><strong>N° UELN :</strong> {data.ueln}</p>
        <p><strong>Code transpondeur :</strong> {data.transpondeur}</p>
        <p><strong>Race - breed :</strong> {data.race}</p>
        <p><strong>% Sang Arabe :</strong> {data.pourcentageSangArabe}%</p>
      </section>

      {/* LOGOS */}
      <section className="docid-logos">
        <img src={logoIfce} alt="Logo IFCE" />
        <img src={logoSire} alt="Logo SIRE" />
        <img src={logoAnaa} alt="Logo ANAA" />
      </section>

      {/* ORGANISMES */}
      <section className="docid-organismes">
        <div className="docid-org">
          <h3>Organisme émetteur :</h3>
          <p>
            {data.organismeEmetteur.nom}<br />
            {data.organismeEmetteur.adresse}<br />
            {data.organismeEmetteur.mail}<br />
            {data.organismeEmetteur.site}
          </p>
        </div>

        <div className="docid-org">
          <h3>Association de race :</h3>
          <p>
            {data.associationRace.nom}<br />
            {data.associationRace.adresse}
          </p>
        </div>
      </section>

    </div>
  );
}
