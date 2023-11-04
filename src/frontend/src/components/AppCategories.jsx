import { useState, useEffect } from "react";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion"

function AppCategories(props) {
    const [categories, setCategories] = useState([
        {
            id: 0,
            key: 'all',
            name: 'All wears',
        }
    ]);
    const [isLoading, setIsLoading] = useState(false);
    const [show, setShow] = useState(false);

    const itemAnimation = {
        hidden: {
          y: -100,
          opacity: 0,
        },
        visible: {
          y: 0,
          opacity: 1,
        },
    }

    useEffect(() => {
        fetchCategories()
    }, []);

    const fetchCategories = () => {
        setIsLoading(true);
        axios.get('api/v1/categories')
          .then(response => {
            setCategories([...categories, ...response.data])
            setIsLoading(false)
          })
          .catch(error => console.log(error.message + ' :('))
    };

    return (
        <>
        {
        isLoading 
        ?
        <motion.div
        initial={itemAnimation.hidden}
        whileInView={itemAnimation.visible}
        exit={itemAnimation.hidden}
        className="flex justify-center items-center glass py-5 px-5 mb-2">
            <div className="loader2"></div>
        </motion.div>
        :
        <>
        <motion.div
        initial={itemAnimation.hidden}
        whileInView={itemAnimation.visible}
        className="glass relative z-10 flex gap-4 py-2 px-2 mb-2">
            <button
            onClick={() => setShow(!show)}
            className="flex items-center justify-center bg-gradient-to-br from-[#7bd989] via-[#2bbec8] p-2 rounded-xl shadow-xl hover:bg-lime-300 hover:drop-shadow-xl duration-200" type="button">
                filter
            <svg className="w-2.5 h-2.5 ml-2.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
            </svg>
            </button>
            <AnimatePresence>
                { show && 
                    <motion.div
                    initial={{
                        originY: 0,
                        opacity: 0,
                        scaleY: 0,
                    }}
                    animate={{
                        opacity: 1,
                        scaleY: 1,
                    }}
                    exit={{
                        opacity: 0,
                        scaleY: 0,
                    }}
                    transition={{
                        type: "spring",
                    }}
                    className="absolute top-14 z-10 bg-white rounded-lg shadow w-60 ">
                        <ul className="h-48 py-2 overflow-y-auto">
                            {
                            categories.map(item =>(
                                <li
                                key={item.id}
                                >
                                    <span
                                    onClick={() => props.chooseCategory(item.key)}
                                    className="cursor-pointer flex items-center px-4 py-2 hover:bg-slate-100 hover:drop-shadow-xl duration-200">
                                        {item.name}
                                    </span>
                                </li>
                            ))
                            }
                        </ul>
                    </motion.div>
                }
            </AnimatePresence>
        </motion.div>

        </>
        }
        </>
    );
}

export default AppCategories;