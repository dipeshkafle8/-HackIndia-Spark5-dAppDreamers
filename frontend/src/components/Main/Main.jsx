import { useContext, useEffect, useState  } from "react";
import Navbar from "../Navbar/Navbar";
import {SessionContext} from "../Login/SessionContext";
function Main() {
  const {user} = useContext(SessionContext);

  const [walletAddress, setWalletAddress] = useState("");

  useEffect(() => {
    console.log(user.walletAddress)
    setWalletAddress(user.walletAddress)
  }, []);

  return (
    <>
      <Navbar />

    </>
  );
}

export default Main;
