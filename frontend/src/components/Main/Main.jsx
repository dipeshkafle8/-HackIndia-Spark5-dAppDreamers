import { useContext, useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import { SessionContext } from "../Login/SessionContext";
import { useNavigate } from "react-router-dom";
import FrontPageDesign from "./FrontPageDesign";
function Main() {
  const { user } = useContext(SessionContext);

  const [walletAddress, setWalletAddress] = useState("");

  useEffect(() => {
    console.log(user.walletAddress);
    setWalletAddress(user.walletAddress);
  }, []);

  return (
    <>
      <Navbar />

      <FrontPageDesign />
    </>
  );
}

export default Main;
