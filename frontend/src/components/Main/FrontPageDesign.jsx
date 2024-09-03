import bitcoin from "../../assets/bitcoin.png";
import { SessionContext } from "../Login/SessionContext";
import { useContext, useState } from "react";
import { useEffect } from "react";
import Modal from "../../Modal";
function FrontPageDesign() {
  const [showModal, setShowModal] = useState(null);
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
      <div className="button text-white ml-52">
        <button
          className="border-2  border-[rgb(17,5,245)] px-8 py-2 bg-[rgb(107,100,241)] hover:bg-[rgb(56,51,156)] rounded-full font-semibold text-xl"
          onClick={() => setShowModal(true)}
        >
          Let&rsquo;s Start..
        </button>
      </div>

      {showModal ? (
        <Modal>
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-8 rounded-lg shadow-lg text-black w-[40%] h-[50%]">
              <h2 className="text-2xl font-bold mb-4">This is the Modal</h2>
              <button
                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
                onClick={() => setShowModal(false)}
              >
                Close
              </button>
            </div>
          </div>
        </Modal>
      ) : null}
    </>
  );
}

export default FrontPageDesign;
