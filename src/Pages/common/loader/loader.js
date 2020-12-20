import React from "react";
import "./loader.css";
import loader from './spinner.gif';

const Loader = () => {

  return (
    <div class="page-loader">
        <img src={loader} alt="LOADING..."/>
    </div>
  );
};

export default Loader;