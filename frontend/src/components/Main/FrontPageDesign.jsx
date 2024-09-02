import bitcoin from "../../assets/bitcoin.png";
import { SessionContext } from "../Login/SessionContext";
import { useContext, useState } from "react";
import { useEffect } from "react";
function FrontPageDesign() {
  const values = useContext(SessionContext);
  const [Address, setwalletAddress] = useState(values.user.walletAddress);
  useEffect(() => {
    let tokenData = values.user.walletAddress;
    console.log(tokenData.length);
    tokenData =
      tokenData.substring(0, 8) +
      "........." +
      tokenData.substring(tokenData.length - 8);
    setwalletAddress(tokenData);
  }, [values.user.walletAddress]);

  return (
    <>
      <div className=" flex justify-between mt-16">
        <div className="ml-52 text-white mt-40">
          <span className="text-6xl font-semibold">
            Here!,
            <br />
            <span className="text-4xl">We are dApp Dreamers</span>
          </span>
          <br />
          <br />
          <span>
            We are creating real time payment system using SmartContract
          </span>
        </div>
        <div className="w-[34%] h-64 mr-8 text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  rounded-xl mt-36">
          <img
            src={bitcoin}
            alt="bitcoin_logo"
            className=" inline-block relative w-[70px] left-4 top-4"
          />
          <span className="inline-block relative text-black top-40 right-9 tracking-wider font-semibold">
            {" "}
            {Address}
          </span>
          <span className="inline-block relative top-[12.5rem] right-52 font-bold text-xl">
            CRYPTO
          </span>
          <h2 className="relative top-[9rem] text-right right-8 text-xl text-black font-semibold z-10">
            Amount:XXXXXXXX
          </h2>
        </div>
      </div>
    </>
  );
}

export default FrontPageDesign;
