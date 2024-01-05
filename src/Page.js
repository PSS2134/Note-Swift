import React, { useState } from "react";
import Banner from "./Components/Banner";
import Notecard from "./Components/Notecard";
import Modal from "./Components/Modal";
import EditModal from "./Components/EditModal";
import ViewModal from "./Components/ViewModal";
import { useSelector } from "react-redux";
import { getAllNotes } from "./noteslice";
import Prompt from "./Components/Prompt";
const Page = () => {
  const [search, setSearch] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showViewModal, setShowViewModal] = useState(false);
  const [editId, setEditId] = useState("");
  const [viewId, setViewId] = useState("");
  const closeModal = () => {
    setShowModal(false);
  };
  const openModal = () => {
    setShowModal(true);
  };
  const closeEditModal = () => {
    setShowEditModal(false);
    setEditId("");
  };
  const openEditModal = (id) => {
    setShowEditModal(true);
    setEditId(id);
  };
  const closeViewModal = () => {
    setShowViewModal(false);
    setViewId("");
  };
  const openViewModal = (id) => {
    setShowViewModal(true);
    setViewId(id);
  };
  const Searching = (val) => {
    setSearch(val);
  };

  const notes = useSelector(getAllNotes);
  const filteredNotes = notes.filter((note) => {
    return note.Title.toLowerCase().includes(search.toLowerCase());
  });
  // console.log(notes);
  return (
    <div>
      <Banner openModal={openModal} Searching={Searching} />
      {!filteredNotes[0] ? (
        <h1 className="text-[3rem] text-center mt-[30vh] pb-[10vh] font-semibold bg-slate-50">
          No Notes Found !
        </h1>
      ) : (
        <>
          {" "}
          <div className="pt-[35vh] bg-slate-50 flex justify-between flex-wrap  px-10">
            {filteredNotes.map((note) => (
              <Notecard
                title={note.Title}
                body={note.Body}
                id={note.Id}
                date={note.noteDate}
                openEditModal={openEditModal}
                openViewModal={openViewModal}
              />
            ))}
          </div>
        </>
      )}

      {showModal && <Modal closeModal={closeModal} />}
      {showEditModal && (
        <EditModal closeEditModal={closeEditModal} id={editId} />
      )}
      {showViewModal && (
        <ViewModal closeViewModal={closeViewModal} id={viewId} />
      )}
    </div>
  );
};

export default Page;
