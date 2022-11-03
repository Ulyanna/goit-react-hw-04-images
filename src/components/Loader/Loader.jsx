import { MutatingDots  } from 'react-loader-spinner'
import css from "../Loader/Loader.module.css"
import React from 'react';

export const Loader = () => {
    return (<div className={css.loaderWrapper}><MutatingDots 
  height="100"
  width="100"
  color="#3f51b5"
  secondaryColor= '#3f51b5'
  radius='18.5'
  ariaLabel="mutating-dots-loading"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
 /></div>)
}