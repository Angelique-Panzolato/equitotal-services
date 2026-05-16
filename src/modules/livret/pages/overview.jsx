import { horse } from "../data/horse";

export default function Overview() {
  return (
    <div>
      <h1>Vue d’ensemble du cheval</h1>

      <div>
        <img src={horse.photo} alt={horse.nom} width="150" />
        <h2>{horse.nom}</h2>
        <p>Race : {horse.race}</p>
        <p>Âge : {horse.age} ans</p>
        <p>Propriétaire : {horse.proprietaire}</p>
      </div>
    </div>
  );
}
