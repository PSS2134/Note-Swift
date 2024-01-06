import React, { useState, useEffect } from "react";
import cross from "../Images/cross.png";
import { useDispatch, useSelector } from "react-redux";
import { getAllNotes } from "../noteslice";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

const ViewModal = ({ closeViewModal, id }) => {
  useEffect(() => {
    document.body.style.overflowY = "hidden";
    return () => {};
  }, []);
  const notes = useSelector(getAllNotes);
  let tempEditNote = notes.filter((note) => note.Id === id);

  //   console.log(id);

  return (
    <div className="flex justify-center items-center fixed top-0 right-0 left-0 backdrop-blur-sm h-screen">
      <div className="h-[98vh] w-[96%] p-5 md:w-[60%] md:p-[2vh] md:px-[5vh] m-5 bg-slate-100 rounded-md shadow-md shadow-black backdrop-blur-3xl">
        <img
          src={cross}
          onClick={() => {
            closeViewModal();
            document.body.style.overflowY = "scroll";
          }}
          className="float-right block mb-1 cursor-pointer hover:bg-slate-300 hover:scale-105"
        />
        <h1 className="text-center m-3 text-4xl font-semibold text-slate-800 break-words">
          <i>{tempEditNote[0].Title}</i>
        </h1>

        <p className="pt-5 rounded-b-md p-2 w-[100%] text-2xl break-words">
          {tempEditNote[0].Body}
        </p>
      </div>
    </div>
  );
};

export default ViewModal;
