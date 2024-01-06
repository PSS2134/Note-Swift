import React, { useEffect } from "react";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { removeNote } from "../noteslice";
const Prompt = ({ closePrompt, id }) => {
  useEffect(() => {
    document.body.style.overflowY = "hidden";
    return () => {};
  }, []);
  const dispatch = useDispatch();
  return (
    <div className="h-screen justify-center items-center fixed top-10 right-0 left-0 bottom-0">
      <div className="w-[80%] md:w-[25%] h-fit mx-auto my-5 shadow-md shadow-black rounded-md p-5 backdrop-blur-md">
        <h1 className="text-xl md:text-3xl text-center m-2 font-semibold">
          Confirm to Delete?
        </h1>
        <div className="p-3 w-fit mx-auto">
          <button
            className="text-lg md:text-xl p-2 bg-red-500 text-white rounded-md shadow-md shadow-stone-700 hover:bg-red-700 active:shadow-none mx-2"
            onClick={() => {
              dispatch(removeNote(id));
              toast.success("Deleted Successfully");
              document.body.style.overflowY = "scroll";
              closePrompt();
            }}
          >
            Confirm
          </button>
          <button
            className="text-lg md:text-xl p-2 border-1 md:border-2 border-black text-black rounded-md shadow-md shadow-stone-700 active:shadow-none mx-2 hover:bg-slate-100"
            onClick={() => {
              closePrompt();
              document.body.style.overflowY = "scroll";
            }}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default Prompt;
