import { useState, useEffect } from "react";
import { motion } from "framer-motion"
import { NavLink, Outlet } from 'react-router-dom';
import useResize from "./hooks/useResize.jsx"

const AppHeader = () => {
  const [width, isScreenSm, isScreenMd, isScreenLg, isScreenXl, isScreenXxl] = useResize();
  const logo = [
    'text.svg',
    'text_2.svg'
  ]

  const [path, setPath] = useState('text.svg');

  const [temp, setTemp] = useState(
    <>
        <motion.NavLink
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{ duration: 2 }}
        to="/" className="w-1/2 ">
          <img
          className="w-full"
          src={path} alt="" />
        </motion.NavLink>

        <NavLink to="/" className="w-1/3">
          <img
          className="w-full"
          src="sub_text.svg" alt="" />
        </NavLink>
    </>
  )

  useEffect(() => {
    if (!isScreenSm) {
      setTemp(
        <>
        <NavLink to="/" className="h-16">
          <img
          className="h-full"
          src="lookovitsa.svg" alt="" />
        </NavLink>
        </>
      )
    } else {
      setTemp(
      <>
        <motion.NavLink
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{ duration: 2 }}
        to="/" className="w-1/2 ">
          <img
          className="w-full"
          src={path} alt="" />
        </motion.NavLink>

        <NavLink to="/" className="w-1/3">
          <img
          className="w-full"
          src="sub_text.svg" alt="" />
        </NavLink>
      </>
      )
    }
  }, [isScreenSm, path])
  
    return (
      <>
      <motion.header
      className=" text-xs fixed top-0 z-10 w-full md:text-base"
      initial={{y:-100}}
      animate={{y:0}}
      >
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

              <motion.div
              className="flex flex-col justify-center items-center"
              initial={{y:-100}}
              animate={{y:0}}
              transition={{ delay: 0.2 }}
              >
                {temp}
              </motion.div>

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
      </motion.header>
      <Outlet />
      </>
    )
};

export default AppHeader;