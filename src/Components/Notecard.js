import React, { useState, useEffect } from "react";
import edit from "../Images/edit2.png";
import dele from "../Images/dele2.svg";
import Prompt from "./Prompt";
const Notecard = ({ title, body, id, date, openEditModal, openViewModal }) => {
  const [showPrompt, setShowPrompt] = useState(false);
  const closePrompt = () => {
    setShowPrompt(false);
  };
  return (
    <>
      <div className="ml-2 my-10  md:m-10 p-5 shadow-md rounded-lg shadow-black h-[72vh] md:h-[62vh] bg-white w-[98%] md:w-[25%] z-0 relative">
        <img
          className="float-right mb-3 ml-2 h-[4.8vh] cursor-pointer active:shadow-none hover:scale-[110%] hover:ease-out hover:delay-100"
          src={dele}
          onClick={() => {
            setShowPrompt(true);
          }}
        />
        <h1 className="text-3xl text-center mb-5 break-words font-bold">
          {title.substring(0, 22)}
          {title.length > 22 ? <span>...</span> : <p></p>}
        </h1>
        <div className="text-2xl mx-2 my-5 break-words">
          {body.substring(0, 175)}
          {body.length > 170 ? <span>...</span> : <p></p>}
        </div>
        {(title.length > 22 || body.length > 175) && (
          <p
            className="m-2 text-lg md:text-xl text-purple-700 font-medium cursor-pointer absolute bottom-16 "
            onClick={() => openViewModal(id)}
          >
            <i className="hover:underline">View More</i>
          </p>
        )}
        <img
          className="float-right m-1 h-[6.5vh] shadow-md shadow-black rounded-full cursor-pointer active:shadow-none hover:scale-[110%] hover:ease-out hover:delay-100 absolute bottom-8 right-4 md:bottom-16 md:right-8"
          src={edit}
          key={id}
          onClick={() => openEditModal(id)}
        />
        <p className="absolute bottom-1 m-2 text-lg font-medium text-gray-500">
          {date.slice(0, 11)}
        </p>
      </div>
      <div className="overflow-hidden fixed">
        {showPrompt && <Prompt closePrompt={closePrompt} id={id} />}
      </div>
    </>
  );
};

export default Notecard;
