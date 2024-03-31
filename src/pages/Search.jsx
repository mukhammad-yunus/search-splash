import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ApiContext from '../contexts/ApiContext';

const Search = () => {
  const {searchInput} = useParams();
  const {getFromApi, setSearchInputValue, apiKey} = useContext(ApiContext);
  useEffect(() => {
    if (searchInput) {
      const query = "https://api.unsplash.com/photos/?client_id=" + apiKey
      getFromApi(query);
      setSearchInputValue(searchInput);
    }
  }, [searchInput])
  
  return (
    <div className='mt-24 sm:mt-36'>{searchInput}</div>
  )
}

export default Search