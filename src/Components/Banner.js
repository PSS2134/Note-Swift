import React from "react";
import bannerimg from "../Images/bannerimg2.svg";
import plus from "../Images/plus3.svg";

const Banner = ({ openModal, Searching }) => {
  return (
    <div className="bg-slate-50 m-0 p-0 min-h-screen">
      <div className="flex flex-col-reverse md:flex-row w-[95%] mx-auto justify-between items-center pt-0 md:pt-10 ">
        <div>
          <h1 className="text-[3rem] md:text-[5rem] text-purple-600 text-center font-semibold font-sans">
            <i>Note-Swift</i>
          </h1>
          <p className="sm:text-[1.75rem] md:text-[2rem] text-black text-center font-semibold font-sans mt-5 md:my-5 w-[80%] mx-auto">
            <i>Crafting Your Thoughts, We Care for Your Notes!</i>
          </p>
        </div>
        <div className="">
          <img className="h-[50vh] mt-9 md:h-[60vh] md:mt-10" src={bannerimg} />
        </div>
      </div>

      <div className="text-[2.5rem] md:text-[3rem] text-black text-center font-semibold font-sans pt-[26vh]  mx-auto bg-slate-50">
        <i>My Notes</i>
      </div>
      <div className="flex md:flex-row md:justify-between items-center mx-auto bg-slate-50 md:p-10 ">
        <button
          className="ml-4 md:ml-[5vh] mt-10 px-2 md:px-5 py-2 text-xl md:text-3xl bg-black text-white shadow-lg rounded-full shadow-slate-900 active:shadow-none hover:bg-gray-900 block mx-auto"
          onClick={openModal}
        >
          {" "}
          <img src={plus} className="h-[5vh]" />
        </button>

        <form>
          <div class="flex">
            <div class="relative w-full mr-[5vh] mt-10">
              <input
                type="search"
                id="search-dropdown"
                class="block p-2.5 w-full z-20 text-xl text-gray-900 rounded-lg border-black border-2 ml-4 md:ml-0 px-2 md:px-5 focus:outline-none mx-auto"
                placeholder="Search Notes..."
                required
                onChange={(e) => Searching(e.target.value)}
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Banner;
