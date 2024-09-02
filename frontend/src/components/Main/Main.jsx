import Navbar from "../Navbar/Navbar";
import { useNavigate } from "react-router-dom";

function Main() {
  const navigate = useNavigate();
  navigate("/login");
  return (
    <>
      <Navbar />
    </>
  );
}

export default Main;
