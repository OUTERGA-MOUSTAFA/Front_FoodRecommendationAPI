import { useContext } from "react";
import PlateCard from "./PlateCard";
import { AppContext } from "../context/AppContext";

export default function Plates() {

    const { plats, availableCount } = useContext(AppContext);
  return (
    <>
      <header className="header">
        <h1> Resterant Plats Gallery</h1>
        <p>Total: {plats.length}</p>
        <p>Available: {availableCount}</p>
      </header>

      <div className="plats-container">
        {plats.map((plat) => (
          <PlateCard key={plat.id} {...plat} />
        ))}
      </div>
    </>
  );
}