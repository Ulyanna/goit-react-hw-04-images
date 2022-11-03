import  { useState } from 'react';
import PropTypes from 'prop-types';
import { FaSearch } from 'react-icons/fa';
 import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import css from "../Searchbar/Searchbar.module.css"

export const Searchbar = ({onSubmit}) => {
  const [value, setValue] = useState("")

  const handlerChange = event => {
    setValue(event.currentTarget.value)
  };
  
const handlerOnSubmit = event => {
    event.preventDefault();
    if (value.trim() === '') {
      toast.info("Please enter something !", {
        position: toast.POSITION.TOP_CENTER
      });
      return;
    }
    onSubmit(value);
    setValue("");
    
  };

 return (
      <header className={css.searchbar}>
        <form className={css.searchForm} onSubmit={handlerOnSubmit}>
          <button className={css.searchFormBtn} type="submit">
            <FaSearch />
          </button>
          <input className={css.searchFormInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={value}
            onChange={handlerChange}
          />
     </form>
     <ToastContainer />
      </header>
    );

}


Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,

};