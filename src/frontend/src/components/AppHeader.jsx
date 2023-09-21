// import { useState, useEffect } from "react";
// import { motion } from "framer-motion"
import { NavLink, Outlet } from 'react-router-dom';
import useResize from "./hooks/useResize.jsx"
import './header.css';

const AppHeader = () => {
  const [width, isScreenSm, isScreenMd, isScreenLg, isScreenXl, isScreenXxl] = useResize();

  const switchLogo = () => {
    if (isScreenSm) {
      return (
        <>
        <NavLink to="/" className="w-1/2 ">
          <img
          className="w-full"
          src="text.svg" alt="" />
        </NavLink>

        <NavLink to="/" className="w-1/3">
          <img
          className="w-full"
          src="sub_text.svg" alt="" />
        </NavLink>
        </>
      )
    } else {
      return (
        <>
        <a href="" className="h-10 ">
          <img
          className="h-full"
          src="lookovitsa.svg" alt="" />
        </a>
        </>
      )
    }
  };
  
    return (
      <>
      <header className=" text-xs fixed top-0 z-10 w-full md:text-base">
        <div className=" relative mt-4 mx-4">
          <nav className="wrapper rounded-2xl">

              <div className="flex basis-1/2 p-2">
                <ul className="flex w-auto justify-center gap-5">
                  <li>
                    <NavLink to="/"
                    className="p-2 rounded-xl hover:bg-slate-100 hover:drop-shadow-xl duration-200"
                    >
                      Catalog
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/ai" className="p-2 rounded-xl hover:bg-slate-100 hover:drop-shadow-xl duration-200">
                      AI
                    </NavLink>
                  </li>
                </ul>
              </div>

              <div className="flex flex-col justify-center items-center">
                {switchLogo()}
              </div>

              <div className="flex justify-end basis-1/2 p-2">
                <ul className="flex w-auto justify-center gap-5">
                  <li>
                    <a href="#" className="p-2 rounded-xl hover:bg-slate-100 hover:drop-shadow-xl duration-200">
                      Bot
                    </a>
                  </li>
                  <li>
                    <NavLink to="/cart" className="p-2 rounded-xl hover:bg-slate-100 hover:drop-shadow-xl duration-200">
                      Cart
                    </NavLink>
                  </li>
                </ul>
              </div>

          </nav>
        </div>
      </header>
      <Outlet />
      </>
    )
};

export default AppHeader;