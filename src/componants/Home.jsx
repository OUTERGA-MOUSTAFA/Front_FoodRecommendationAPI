import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <button onClick={() => navigate("/plat")}>
      Go to Plates
    </button>
  );
}

export default Home;