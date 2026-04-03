import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { useParams } from "react-router-dom";

function PlateDetail() {
  const { plats } = useContext(AppContext);
  const { id } = useParams();

  const plat = plats.find(p => p.id === Number(id));

  if (!plat) return <p>Plat not found</p>;

  return (
    <div>
      <h2>Plat title: {plat.title}</h2>
      <h2>Plat name: {plat.name || "N/A"}</h2>
      {plat.image && <img src={plat.image} alt={plat.title} />}
      <h3>Price: {plat.price} MAD</h3>
      <p>Description: {plat.description}</p>
      <p>Disponible: {plat.is_available ? 'Oui' : 'No'}</p>
      <p className="warning">
        Ingredients: [
        {plat.ingredients.map((p, index) => (
          <span key={index}>
            {p}{index < plat.ingredients.length - 1 ? ', ' : ''}
          </span>
        ))}
        ]
      </p>
      <p className="warning">Recommendation: {plat.label}</p>
      <p className="warning">Score: {plat.score}</p>
      <p className="warning">Message: {plat.warning_message}</p>
    </div>
  );
}

export default PlateDetail;