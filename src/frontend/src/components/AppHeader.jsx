import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion"
import { NavLink, Outlet } from 'react-router-dom';
import useResize from "./hooks/useResize.jsx"
import AppCart from "./popup/AppCart.jsx";

const AppHeader = (props) => {
  const [width, isScreenSm, isScreenMd, isScreenLg, isScreenXl, isScreenXxl] = useResize();
  const logo = [
    'text.svg',
    'text_2.svg'
  ]

  const [visiblity, setVisiblity] = useState(false);
  const [path, setPath] = useState('text.svg');
  const [sum, setSum] = useState(0);

  const [temp, setTemp] = useState(
    <>
        <NavLink
        to="/" className="w-1/2 ">
          <img
          className="w-full"
          src={path} alt="lookotitsa" />
        </NavLink>

        <NavLink to="/" className="w-1/3">
          <img
          className="w-full"
          src="sub_text.svg" alt="" />
        </NavLink>
    </>
  )

  useEffect(() => {
    let temp = 0;
    for(let i = 0; i < props.cartArr.length; i++)
      temp += props.cartArr[i].count;
    setSum(temp);
  }, [props.cartArr])

  useEffect(() => {
    if (!isScreenSm) {
      setTemp(
        <>
        <NavLink to="/" className="h-16">
          <img
          className="h-full"
          src="lookovitsa.svg" alt="lookovitsa" />
        </NavLink>
        </>
      )
    } else {
      setTemp(
      <>
        <NavLink
        to="/" className="w-1/2 ">
          <img
          className="w-full"
          src={path} alt="" />
        </NavLink>

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

              <div className="flex basis-1/2 ">
                <ul className="flex w-auto justify-center gap-5">
                  <li>
                    <NavLink to="/catalog"
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
              to="/"
              className="flex flex-col justify-center items-center"
              initial={{y:-100, opacity:0}}
              animate={{y:0, opacity:1}}
              transition={{ delay: 0.2 }}
              >
                {temp}
              </motion.div>

              <div className="flex justify-end basis-1/2">
                <ul className="flex w-auto justify-center items-center gap-5">
                  <li>
                    <a href="https://t.me/LookovitsaBot" className="p-2 rounded-xl hover:bg-slate-100 hover:drop-shadow-xl duration-200">
                      Bot
                    </a>
                  </li>
                  <AnimatePresence>
                    { props.cartArr.length > 0 &&
                      <motion.span
                      initial={{
                        scale: 0,
                        opacity: 0,
                      }}
                      animate={{
                          scale: 1,
                          opacity: 1,
                      }}
                      exit={{
                          scale: 0,
                          opacity: 0,
                      }}
                      transition={{
                          type: "spring",
                      }}
                      className="fixed right-0 top-0 z-20 bg-red-600 text-white px-2 rounded-full text-sm">
                        {sum}
                      </motion.span>
                    }
                  </AnimatePresence>
                    <a onClick={() => setVisiblity(!visiblity)} className="cursor-pointer p-2 rounded-xl hover:bg-slate-100 hover:drop-shadow-xl duration-200">
                      {visiblity ? (
                        <span className=" mx-[0.175rem]">
                          &#9650;
                        </span>
                      ) : (
                        <>
                        {!props.login ?
                        <>Cart</> :
                        <img
                        className="h-6 rounded-full"
                        src={props.login.photo_url} alt="avatar" />
                        }
                        </>
                      )}
                    </a>
                    <AnimatePresence>
                      {visiblity && (
                        <AppCart cart={props.cartArr} rmItem={props.rmItem} sumCart={props.sumCart} login={props.login} setLogin={props.setLogin}/>
                      )}
                    </AnimatePresence>
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