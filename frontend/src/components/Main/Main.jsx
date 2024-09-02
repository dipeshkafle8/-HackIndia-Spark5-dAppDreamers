import Navbar from "../Navbar/Navbar";
import { useNavigate } from "react-router-dom";
import FrontPageDesign from "./FrontPageDesign";
function Main() {
  return (
    <>
      <Navbar />
      <FrontPageDesign />
    </>
  );
}

export default Main;
