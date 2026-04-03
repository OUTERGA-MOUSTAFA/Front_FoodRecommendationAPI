import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

function Layout() {
  const { user, setUser } = useContext(AppContext);

  const navigate = useNavigate(); // component
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.clear();
    setUser(null);
    navigate("/login"); // redirect l login page
  };

  return (
    <>
      <nav style={{ background: "orange", padding: "10px" }}>
        <NavLink to="/">Home</NavLink> |{" "}

        {user ? (
          <>
            <NavLink to="/plat">Plates</NavLink> |{" "}
            <NavLink to="/profile">Profile</NavLink> |{" "}
            <button onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <>
            <NavLink to="/login">Login</NavLink> |{" "}
            <NavLink to="/register">Register</NavLink>
          </>
        )}
      </nav>

      <hr />
      <Outlet />
    </>
  );
}

export default Layout;