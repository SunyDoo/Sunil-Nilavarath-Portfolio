import React from "react";
import { NavigationDots } from "../Components";

const HeaderWrap = (Component, idName, classNames) =>
  function HOC() {
    return (
      <div id={idName} className={`app__container ${classNames}`}>
   
        <div className="app__wrapper app__flex">
          <Component />

          <div className="copyright">
            <p className="p-text">2022 SNilavarath</p>
          </div>
        </div>
        <NavigationDots active={idName} />
      </div>
    );
  };

export default HeaderWrap;
