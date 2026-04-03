import { useNavigate } from "react-router-dom";
export default function PlateCard({
  id,
  title,
  price,
  is_available,
  image,
  categories,
  label,
}) {
  const navigate = useNavigate();

  return (
    <div className={`plate-card ${!is_available ? "unavailable" : ""}`}>
      <div className="plate-image">
        <span>{image || "🍽️"}</span>
      </div>

      <h3>Titre: {title || "No title"}</h3>
      <span>{categories?.join(", ")}</span>
      {/* price */}
      <p>Price: {price} MAD</p>
      {/* recomendation */}
      <p>Sugestion: {label || "No recomendation..."}</p>
      {/* Navigate */}
      <button onClick={() => navigate(`/plat/${id}`)}>
        Voir details
      </button>
    </div>
  );
}