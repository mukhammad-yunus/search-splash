import { createContext, useEffect, useState } from "react";
const getFromApi = async (url) => {
  const controller = new AbortController();
  const signal = controller.signal;
  try {
    const response = await fetch(url, { signal });
    const result = await response.json();
    console.log(result);
    return result;
  } catch (error) {
    if (error.name === "AbortError") {
      console.log("Fetch aborted");
      return null;
    } else {
      throw error;
    }
  } finally {
    controller.abort();
  }
};
const ApiContext = createContext();
export const ApiContextProvider = ({ children }) => {
  const apiKey = import.meta.env.VITE_API_KEY;
  const [searchInputValue, setSearchInputValue] = useState("");
  /*
  the things I have to do:
    - make an api request for random images when home page is loaded
    - implement virtual scrolling to reduce memory use
  */
  return (
    <ApiContext.Provider
      value={{ searchInputValue, setSearchInputValue, getFromApi, apiKey }}
    >
      {children}
    </ApiContext.Provider>
  );
};

export default ApiContext;
