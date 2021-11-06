import React from "react";
import cl from './Preloader.module.scss'

const Preloader = (props) => {
  return (
    <div className={cl.loadingIcon}>
      <div className={cl.animation}>
        Loading
        <span className={cl.dot}>.</span>
        <span className={cl.dot}>.</span>
        <span className={cl.dot}>.</span>
      </div>
    </div>
  );
};

export default Preloader;
