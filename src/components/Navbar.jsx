import React, { useEffect, useRef, useState } from "react";
import logo from "../assets/logo.svg";
import { IoSearch } from "react-icons/io5";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";

const getHistory = () => {
  const searchArr = JSON.parse(localStorage.getItem("history"));
  if (searchArr?.length) {
    const filteredArray = searchArr.filter((item) => typeof item !== "object");
    return [...new Set(filteredArray)];
  } else {
    return [];
  }
};

const Navbar = () => {
  const inputRef = useRef(null);
  const [inputVal, setInputVal] = useState("");
  const [searchHistory, setSearchHistory] = useState(getHistory());

  const [isInputFocused, setIsInputFocused] = useState(false);
  const inputParentCName = `w-full relative flex items-center gap-4 border border-zinc-100 rounded-full px-2 p-1 transition-all ease-in-out sm:px-5 sm:p-2 ${
    isInputFocused ? "bg-white" : "bg-zinc-100"
  }`;

  const handleSearch = (e) => {
    if (!inputVal) return;
    if (e?.key === "Enter" || e === "search") {
      inputRef.current.blur();
      setIsInputFocused(false)
      setSearchHistory((prev) => [...new Set([inputVal, ...prev])]);
    }
  };
  const handleHistorySearch = (item)=>{
    setInputVal(item);
    const filteredArray = searchHistory.filter(itm => itm !== item);
    setSearchHistory([item, ...filteredArray]);
  }

  useEffect(() => {
    const searchHistoryAsStr = JSON.stringify(searchHistory);
    localStorage.setItem("history", searchHistoryAsStr);
  }, [searchHistory]);
  useEffect(() => {
    const handleClick = (e) => {
      const purpose = e.target.dataset.purpose
      if (purpose !== 'not-blur' && purpose !=='clear-history') {
        setIsInputFocused(false);
      } else if(purpose === 'clear-history'){
        const isEmpty = !((getHistory()).length) // Checks if the local storage is empty
        setIsInputFocused(false)
        if(isEmpty) return;
        localStorage.removeItem('history');
        setSearchHistory([]);

      }
    };
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  //I have to replace below with the actual topic array from the api
  const topicArr = new Array(20).fill(0);
  const renderTopics = (array) => {
    return array.map((arr) => (
      <p className="text-neutral-600 cursor-pointer px-2 box-content hover:shadow hover:text-neutral-950">
        Hello
      </p>
    ));
  };
  return (
    <nav className="flex flex-col fixed pt-2 px-2 md:pt-3 md:px-3 top-0 left-0 right-0 bg-white border-b z-20">
      <section className="flex gap-2 items-center sm:gap-4">
        <div>
          <img
            src={logo}
            alt="Searchsplash logo; original version of Unsplash logo"
            className="w-6 sm:w-10"
          />
        </div>
        <div className={inputParentCName}>
          <div>
            <IoSearch
              data-purpose="not-blur"
              className={` text-gray-400 cursor-pointer hover:text-gray-950 ${
                isInputFocused && "text-gray-500"
              }`}
              onClick={() => handleSearch("search")}
            />
          </div>
          <input
            data-purpose="not-blur"
            type="text"
            className="w-full bg-transparent placeholder:text-gray-400 focus:outline-none"
            placeholder="Search images"
            onFocus={() => setIsInputFocused(true)}
            // onBlur={() => setIsInputFocused(false)}
            onKeyDown={handleSearch}
            onChange={(e) => setInputVal(e.target.value)}
            value={inputVal}
            ref={inputRef}
          />
          {isInputFocused && searchHistory.length && (
            <div
              data-purpose="not-blur"
              className="absolute left-0 right-0 w-full min-h-32 z-20 px-3 border translate-y-3/4 bg-white rounded-md"
            >
              <div
                data-purpose="not-blur"
                className="flex flex-wrap gap-1 py-3 sm:gap-4"
              >
                <h3 data-purpose="not-blur">Recent searches</h3>
                <p
                  data-purpose="clear-history"
                  className="underline text-neutral-300 cursor-pointer hover:text-neutral-950"
                >
                  clear
                </p>
              </div>
              <div
                data-purpose="not-blur"
                className="flex flex-wrap gap-2 pb-3"
              >
                {searchHistory?.map((item) => {
                  return (
                    <p
                      className="p-2 border rounded text-neutral-500 cursor-pointer transition-all hover:text-neutral-700 hover:bg-neutral-100"
                      onClick={()=> handleHistorySearch(item)}
                    >
                      {item}
                    </p>
                  );
                })}
              </div>
            </div>
          )}
          {inputVal && isInputFocused && (
            <RxCross2
              data-purpose="not-blur"
              className="cursor-pointer hover:text-red-500"
              onClick={() => {
                setInputVal("");
                inputRef.current.focus();
              }}
              size={20}
            />
          )}
        </div>
      </section>
      <section className="flex gap-3 w-full relative py-2 sm:py-4 md:py-5">
        {/* Below is the arrow to move the topic bars.
        The things i have to apply to arrows:
          - moving functionality
          - disappearing the left/right arrow when the first/last item is on the screen.
         */}
        <div className="pr-16 bg-gradient-to-r from-white from-20% to-transparent absolute left-0 top-0 bottom-0 flex items-center">
          <IoIosArrowBack />
        </div>
        <div className="flex gap-3 w-full overflow-x-scroll no-scrollbar">
          {renderTopics(topicArr)}
        </div>
        <div className=" pl-16 bg-gradient-to-r from-transparent to-white to-80% absolute right-0 top-0 bottom-0 flex items-center">
          <IoIosArrowForward />
        </div>
      </section>
    </nav>
  );
};

export default Navbar;
