/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import AppCategories from "./AppCategories";

function AppCatalog(props) {
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

    return (
        <>
        <motion.div
        initial={itemAnimation.hidden}
        whileInView={itemAnimation.visible}
        className=" flex justify-center py-8">
        
            <h2 className="h-text text-5xl">
                Catalog
            </h2>
        </motion.div>

        {/* <motion.div
        initial={itemAnimation.hidden}
        whileInView={itemAnimation.visible}
        viewport={{ amount: 0.2}}
        >
            <input type="text" />
        </motion.div> */}

        <AppCategories chooseCategory={props.chooseCategory}/>

        <motion.main
        className=" grid lg:text-sm md:grid-cols-2 lg:grid-cols-4 gap-4  "
        >
            {
                props.items.length ?
                props.items.map(el => (
                    <motion.div
                    initial={itemAnimation.hidden}
                    whileInView={itemAnimation.visible}
                    // viewport={{ amount: 0.2 }}
                    key={el.id}
                    className="glass flex flex-col justify-center gap-4 p-4 shadow-xl"
                    >
                        <div className="flex flex-row ">
                            <h3 className=" bg-slate-100 py-2 p-4 rounded-xl shadow-xl">{el.title}</h3>
                        </div>
                        <img onClick={() => props.onShowItem(el)} className=" cursor-pointer load rounded-xl shadow-2xl h-80" src={el.img} alt="" />
                        <div className="flex flex-col gap-2 md:flex-row md:gap-0 justify-between ">
                            <p className="font-[600] bg-slate-100 p-2 rounded-xl shadow-xl">Price: {el.price}&#x24;</p>
                            <button onClick={() => props.onAdd(el)} className="flex items-center justify-center bg-slate-100 p-2 rounded-xl shadow-xl hover:bg-white hover:drop-shadow-xl duration-200">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                <path d="M1 1.75A.75.75 0 011.75 1h1.628a1.75 1.75 0 011.734 1.51L5.18 3a65.25 65.25 0 0113.36 1.412.75.75 0 01.58.875 48.645 48.645 0 01-1.618 6.2.75.75 0 01-.712.513H6a2.503 2.503 0 00-2.292 1.5H17.25a.75.75 0 010 1.5H2.76a.75.75 0 01-.748-.807 4.002 4.002 0 012.716-3.486L3.626 2.716a.25.25 0 00-.248-.216H1.75A.75.75 0 011 1.75zM6 17.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15.5 19a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                            </svg>
                            </button>
                        </div>

                    </motion.div>
                )) :
                props.allItems.map(el => (
                    <motion.div
                    initial={itemAnimation.hidden}
                    whileInView={itemAnimation.visible}
                    // viewport={{ amount: 0.2 }}
                    key={el.id}
                    className="glass flex flex-col justify-center gap-4 p-4 shadow-xl"
                    >
                        <div className="flex flex-row ">
                            <h3 className=" bg-slate-100 py-2 p-4 rounded-xl shadow-xl">{el.title}</h3>
                        </div>
                        <img onClick={() => props.onShowItem(el)} className=" cursor-pointer load rounded-xl shadow-2xl h-80" src={el.img} alt="" />
                        <div className="flex flex-col gap-2 md:flex-row md:gap-0 justify-between ">
                            <p className="font-[600] bg-slate-100 p-2 rounded-xl shadow-xl">Price: {el.price}&#x24;</p>
                            <button onClick={() => props.onAdd(el)} className="flex items-center justify-center bg-slate-100 p-2 rounded-xl shadow-xl hover:bg-white hover:drop-shadow-xl duration-200">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                <path d="M1 1.75A.75.75 0 011.75 1h1.628a1.75 1.75 0 011.734 1.51L5.18 3a65.25 65.25 0 0113.36 1.412.75.75 0 01.58.875 48.645 48.645 0 01-1.618 6.2.75.75 0 01-.712.513H6a2.503 2.503 0 00-2.292 1.5H17.25a.75.75 0 010 1.5H2.76a.75.75 0 01-.748-.807 4.002 4.002 0 012.716-3.486L3.626 2.716a.25.25 0 00-.248-.216H1.75A.75.75 0 011 1.75zM6 17.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15.5 19a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                            </svg>
                            </button>
                        </div>

                    </motion.div>
                )) 
            }
        </motion.main>
        </>
    );
}

export default AppCatalog;