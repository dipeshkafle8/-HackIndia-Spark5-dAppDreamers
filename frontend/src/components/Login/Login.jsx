//import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import SessionContext from "./SessionContext";
import Swal from "sweetalert2";

function Login() {
  const navigate = useNavigate();
  const userSession = useContext(SessionContext);
  if (userSession.user) {
    navigate("/");
  }
  async function handleOnSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    let obj = {
      username: formData.get("username"),
      password: formData.get("password"),
    };
    try {
      let response = await axios.post("http://localhost:8001/login", obj);
      if (response.status === 200) {
        userSession.login(obj);
        navigate("/");
      }
    } catch (err) {
      console.log(err);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Invalid User Details",
      });
    }
  }

  return (
    <>
      <div className="bg-black text-white flex min-h-screen flex-col items-center pt-16 sm:justify-center sm:pt-0">
        <a href="#">
          <div className="text-foreground font-semibold text-3xl tracking-tighter mx-auto flex items-center ">
            d<span className="text-green-600">A</span>pp
            <span className="text-green-600 ml-1"> D</span>
            reamers
          </div>
        </a>
        <div className="relative mt-12 w-full max-w-lg sm:mt-10">
          <div className="relative -mb-px h-px w-full bg-gradient-to-r from-transparent via-sky-300 to-transparent"></div>
          <div className="mx-5 border dark:border-b-white/50 dark:border-t-white/50 border-b-white/20 sm:border-t-white/20 shadow-[20px_0_20px_20px] shadow-slate-500/10 dark:shadow-white/20 rounded-lg border-white/20 border-l-white/20 border-r-white/20 sm:shadow-sm lg:rounded-xl lg:shadow-none">
            <div className="flex flex-col p-6">
              <h3 className="text-xl font-semibold leading-6 tracking-tighter">
                Login
              </h3>
              <p className="mt-1.5 text-sm font-medium text-white/50">
                Welcome back, enter your credentials to continue.
              </p>
            </div>
            <div className="p-6 pt-0">
              <form onSubmit={handleOnSubmit}>
                <div>
                  <div>
                    <div className="group relative rounded-lg border focus-within:border-sky-200 px-3 pb-1.5 pt-2.5 duration-200 focus-within:ring focus-within:ring-sky-300/30">
                      <div className="flex justify-between">
                        <label className="text-xs font-medium text-muted-foreground group-focus-within:text-white text-gray-400">
                          Username
                        </label>
                      </div>
                      <input
                        type="text"
                        name="username"
                        placeholder="Username"
                        autoComplete="off"
                        className="block w-full border-0 bg-transparent p-0 text-sm file:my-1 placeholder:text-muted-foreground/90 focus:outline-none focus:ring-0 focus:ring-teal-500 sm:leading-7 text-foreground"
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <div>
                    <div className="group relative rounded-lg border focus-within:border-sky-200 px-3 pb-1.5 pt-2.5 duration-200 focus-within:ring focus-within:ring-sky-300/30">
                      <div className="flex justify-between">
                        <label className="text-xs font-medium text-muted-foreground group-focus-within:text-white text-gray-400">
                          Password
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          type="password"
                          name="password"
                          className="block w-full border-0 bg-transparent p-0 text-sm file:my-1 placeholder:text-muted-foreground/90 focus:outline-none focus:ring-0 focus:ring-teal-500 sm:leading-7 text-foreground"
                          required
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-4 flex items-center justify-end gap-x-2">
                  <a
                    className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:ring hover:ring-white h-10 px-4 py-2 duration-200"
                    href="/register"
                  >
                    Register
                  </a>
                  <button
                    className="font-semibold hover:bg-black hover:text-white hover:ring hover:ring-white transition duration-300 inline-flex items-center justify-center rounded-md text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-white text-black h-10 px-4 py-2"
                    type="submit"
                  >
                    Log in
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Login;
