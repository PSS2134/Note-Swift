import React, { useState, useEffect } from "react";
import bold from "../Images/bold.png";
import italic from "../Images/italics.png";
import underline from "../Images/underline.png";
import cross from "../Images/cross.png";
import { useDispatch } from "react-redux";
import { addNewNote } from "../noteslice";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

const Modal = ({ closeModal }) => {
  useEffect(() => {
    document.body.style.overflowY = "hidden";
    return () => {};
  }, []);
  const dispatch = useDispatch();
  const [note, setNote] = useState({
    Title: "",
    Body: "",
    bold: false,
    italic: false,
    underline: false,
  });

  const handleNote = (e) => {
    e.preventDefault();
    setNote((prevData) => {
      return {
        ...prevData,
        [e.target.name]: e.target.value,
      };
    });
  };

  const toggleStyle = (style) => {
    setNote((prevData) => {
      return {
        ...prevData,
        [style]: !prevData[style],
      };
    });
  };

  const handleSave = () => {
    if (!note.Title.length || !note.Body.length) {
      toast.error("Please fill the empty fields!");
    } else {
      dispatch(addNewNote(note));
      toast.success("Note Added Successfully");
      setNote({
        Title: "",
        Body: "",
        bold: false,
        italic: false,
        underline: false,
      });
      closeModal();
      document.body.style.overflowY = "scroll";
    }
  };

  return (
    <div className="flex justify-center items-center fixed top-0 right-0 left-0 backdrop-blur-sm h-screen">
      <div className="h-[98vh] w-[60%] p-[2vh] px-[5vh] m-2 bg-teal-200 rounded-md shadow-md shadow-black backdrop-blur-3xl">
        <img
          src={cross}
          onClick={() => {
            closeModal();
            document.body.style.overflowY = "scroll";
          }}
          className="float-right block mb-1 cursor-pointer hover:bg-teal-100 hover:scale-105"
        />
        <h1 className="text-center m-3 text-4xl font-semibold text-teal-500">
          <i>NOTE</i>
        </h1>
        <p className="text-3xl mt-10 font-semibold ">Title</p>
        <input
          className="mt-2 rounded-md p-2 w-[100%] text-2xl  focus:outline-teal-400"
          placeholder="A Beautiful Day..."
          name="Title"
          maxLength={30}
          value={note.Title}
          onChange={handleNote}
        />
        <p className="text-lg font-semibold m-1 text-gray-600">
          {note.Title.length}/30 characters
        </p>

        <p className="text-3xl mt-6 mb-2 font-semibold">Body</p>
        <div>
          <div className="flex p-1 bg-white border-b-2 border-teal-400">
            <img
              src={bold}
              className={`h-[5vh] mx-2 hover:bg-teal-200 cursor-pointer p-1 rounded-sm ${
                note.bold && "bg-teal-200"
              }`}
              onClick={() => toggleStyle("bold")}
            />
            <img
              src={italic}
              className={`h-[5vh] mx-2 hover:bg-teal-200 cursor-pointer p-1 rounded-sm ${
                note.italic && "bg-teal-200"
              }`}
              onClick={() => toggleStyle("italic")}
            />
            <img
              src={underline}
              className={`h-[5vh] mx-2 hover:bg-teal-200 cursor-pointer p-1 rounded-sm ${
                note.underline && "bg-teal-200"
              }`}
              onClick={() => toggleStyle("underline")}
            />
          </div>
          <textarea
            rows={8}
            className="pt-2 rounded-b-md p-2 w-[100%] text-2xl  focus:outline-teal-400"
            placeholder="Today was an awesome day and it was........"
            name="Body"
            maxLength={650}
            value={note.Body}
            onChange={handleNote}
            style={{
              fontWeight: note.bold ? "bold" : "normal",
              fontStyle: note.italic ? "italic" : "normal",
              textDecoration: note.underline ? "underline" : "none",
            }}
          />
          <p className="text-lg font-semibold m-1 text-gray-600">
            {note.Body.length}/650 characters
          </p>
        </div>
        <button
          className="text-2xl p-2 px-10 bg-blue-600 text-white rounded-md shadow-md shadow-stone-700 hover:bg-blue-700 active:shadow-none block mx-auto"
          onClick={handleSave}
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default Modal;
