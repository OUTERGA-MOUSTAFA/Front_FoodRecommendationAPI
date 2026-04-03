import PlateCard from "./PlateCard";
import { AppContext } from "../context/AppContext";
import { useContext } from "react";

export default function FilterPlats() {
    const { filteredPlats, search, setSearch } = useContext(AppContext)
    return (
        <>
            {/* input */}
            <input
                placeholder="Name plat..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />

            {/* filteredPlats */}
            <div>
                {search && filteredPlats.length === 0 && <p>No plat found</p>}
                {
                    filteredPlats.length > 0 ? (
                        filteredPlats.map((plat) => <PlateCard key={plat.id} {...plat} />)
                    ) : (
                        search && <p>No plats found</p>
                    )
                }
            </div>
        </>
    );
}