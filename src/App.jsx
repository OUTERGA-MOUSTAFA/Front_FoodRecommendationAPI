import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Plates from "./componants/Plates";
import Layout from "./componants/Layout";
import Profile from "./componants/Profile";
import Home from "./componants/Home";
import { AppContext } from "./context/AppContext";
import { Users } from "./componants/users";
import PlateDetail from "./componants/PlateDetail";
import api from "./api/axios";
import Login from "./pages/login";
import Register from "./pages/register";
import ProtectedRoute from "./componants/ProtectedRoute";

function App() {

    const [plats, setPlats] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [search, setSearch] = useState("");
    const [user, setUser] = useState(
        JSON.parse(localStorage.getItem("user")) || null
    );

    //  fetch data
    useEffect(() => {
        if (!user) return;

        const fetchPlats = async () => {
            try {
                const res = await api.get("/plat");
                setPlats(res.data.data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchPlats();
    }, [user]);
    const availableCount = plats.filter(p => p.is_available).length;
   if (user && loading) return <p>Loading plats...</p>;
    if (error) return <p> {error}</p>;

    return (
        <AppContext.Provider
           value={{ user, setUser, plats, availableCount, search, setSearch }}
        >
            <Routes>

                <Route path="/" element={<Layout />}>

                    <Route index element={<Home />} />

                    <Route
                        path="plat"
                        element={
                            <ProtectedRoute user={user}>
                                <Plates />
                            </ProtectedRoute>
                        }
                    />

                    <Route
                        path="plat/:id"  element={
                            <ProtectedRoute user={user}>
                                <PlateDetail />
                            </ProtectedRoute>
                        }
                    />
                    <Route path="profile" element={<Profile />} />
                    <Route path="users" element={<Users />} />
                    <Route path="login" element={<Login />} />
                    <Route path="register" element={<Register />} />
                </Route>
            </Routes>
        </AppContext.Provider>
    );
}

export default App;