import { useState, useEffect } from 'react';
import React from 'react';
import { toast } from 'react-toastify';
import { Searchbar } from '../Searchbar/Searchbar';
import { ImageGallery } from '../ImageGallery/ImageGallery';
import { Button } from '../Button/Button';
import { Loader } from "../Loader/Loader"
import {fetchHits} from "../../Api/FetchHits"

const App = () => {
  
  const [searchValue, setSearchValue] = useState(null);
  const [hits, setHits] = useState([]);
  const [page, setPage] = useState(1);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!searchValue) {
      return
    }
setLoading(true)
    try {   
      fetchHits(searchValue, page).then(response => {
        if (response.data.totalHits === 0) { toast.error("Sorry, nothing found!", {
        position: toast.POSITION.TOP_CENTER
      }); }
        setHits(PrevState => [...PrevState, ...response.data.hits])
      }).finally(() => setLoading(false)); 
    }
    catch (e) {
      return setError(e)
    }  
  },[searchValue , page])

const formSubmitHandler = value => {
  setSearchValue(value)
  setHits([])
  setPage(1)
  };

  const  handleButtonLoadMore = () => {setPage(PrevState =>  PrevState + 1);};

  return (
      <>
        <Searchbar onSubmit={formSubmitHandler} />
        {loading && <Loader />}
        {error && <h1>Not found</h1>}

        {hits && (
          <ImageGallery hits={hits}/>
        )}

      {hits.length > 0 && <Button onClick={handleButtonLoadMore} />}
      </>
    );
}

export default App;


