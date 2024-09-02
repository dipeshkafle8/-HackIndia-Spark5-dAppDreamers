import SessionContext from "../Login/SessionContext";
import { useContext } from "react";
//import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
function Navbar() {
  const sessionUser = useContext(SessionContext);
  const [isLoggedIn, setLogInAndLogout] = useState("login");
  const [displayText, setDisplayText] = useState("");
  useEffect(() => {
    console.log(sessionUser.user);
    if (sessionUser.user) {
      setLogInAndLogout("logout");
      setDisplayText("Logout");
    } else {
      setLogInAndLogout("login");
      setDisplayText("Login");
    }
  }, [sessionUser.user]);

  return (
    <>
      <nav className="flex justify-between  bg-black text-white mt-2">
        <div className="logo text-2xl text-white font-bold ml-2">
          d<span className="text-3xl text-green-600">A</span>pp{" "}
          <span className="text-3xl text-green-600">D</span>reamers
        </div>
        <ul className="flex w-[35%] justify-evenly text-white mr-2 mt-2">
          <li>
            <a
              className="px-12 border-2 py-2 bg-[rgb(18,18,18)] rounded-full"
              href="#"
            >
              Home
            </a>
          </li>
          <li>
            <a
              className="px-12 border-2 py-2 bg-[rgb(18,18,18)] rounded-full"
              href="#"
            >
              About Platform
            </a>
          </li>
          <li>
            <a
              className="px-12 border-2 py-2 bg-[rgb(18,18,18)] rounded-full"
              href="#"
            >
              Blog
            </a>
          </li>
        </ul>
        <ul className="flex mr-6">
          <li className="px-12 py-2 border-2 bg-white text-black font-semibold rounded-full">
            <a href={`/${isLoggedIn}`}>{displayText}</a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
