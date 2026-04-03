import { useState } from "react";
import api from "../api/axios";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";
export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useContext(AppContext);
  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // await api.get('/sanctum/csrf-cookie');
      const res = await api.post("/login", {
        email,
        password,
      });

      // save token الصحيح
      localStorage.setItem("token", res.data.access_token);

      // save user
      localStorage.setItem("user", JSON.stringify(res.data.user));

      setUser(res.data.user);

      navigate("/plat");
      
    } catch (err) {
      console.log(err.response);
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <h2>Login</h2>

      <input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button type="submit">Login</button>
    </form>
  );
}