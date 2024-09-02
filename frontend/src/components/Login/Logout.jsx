import SessionContext from "./SessionContext";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Logout() {
  const navigate = useNavigate();
  const SessionData = useContext(SessionContext);

  useEffect(() => {
    if (SessionData) {
      SessionData.logout();
      console.log("SessionData after logout:", SessionData);
      navigate("/login");
    } else {
      console.error("SessionData is not available");
    }
  }, [SessionData, navigate]);

  return (
    <>
      <p>Logging out...</p>
    </>
  );
}

export default Logout;
