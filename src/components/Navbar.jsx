import React from "react";
import logo from "../assets/logo.svg";
import { IoSearch } from "react-icons/io5";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Navbar = () => {
  //I have to replace below with the actual topic array from the api
  const topicArr = new Array(20).fill(0);
  const renderTopics = (array) => {
    return array.map((arr) => <p>Hello</p>);
  };
  return (
    <nav className="flex flex-col fixed pt-3 px-3 top-0 left-0 right-0 bg-white border-b">
      <section className="flex gap-2 items-center">
        <div>
          <img
            src={logo}
            alt="Searchsplash logo; original version of Unsplash logo"
          />
        </div>
        {/* For below search-input, I have to implement:
                - div's flex-direction should be reversed when the input is active
                - change in div's bg when the input is active
                - search function for Enter keyboard and search icon
                - search terms should be stored into localStorage and the history of search be displayed as a floating element when input is active
        */}
        <div className="w-full flex items-center gap-2 bg-zinc-100 rounded-full p-2">
          <div>
            <IoSearch className=" text-gray-400" />
          </div>
          <input
            type="text"
            className="w-full bg-transparent placeholder:text-gray-400 focus:outline-none"
            placeholder="Search images"
          />
        </div>
      </section>
      <section className="flex gap-3 w-full relative py-5">
        {/* Below is the arrow to move the topic bars.
        The things i have to apply to arrows:
          - moving functionality
          - disappearing the left/right arrow when the first/last item is on the screen.
         */}
        <div className="pr-40 bg-gradient-to-r from-white from-15% to-transparent absolute left-0 top-0 bottom-0 flex items-center">
          <IoIosArrowBack />
        </div>
        <div className="flex gap-3 w-full overflow-x-scroll no-scrollbar">
          {renderTopics(topicArr)}
        </div>
        <div className=" pl-40 bg-gradient-to-r from-transparent to-white to-85% absolute right-0 top-0 bottom-0 flex items-center">
          <IoIosArrowForward />
        </div>
      </section>
    </nav>
  );
};

export default Navbar;
