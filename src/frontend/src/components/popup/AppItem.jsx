import { motion } from "framer-motion";

function AppItem(props) {
    const itemAnimation = {
        hidden: {
          scale: 0,
          opacity: 0,
        },
        visible: {
          scale: 1,
          opacity: 1,
        },
    }

    return (
        <motion.div
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}
        className="flex justify-center items-center fixed top-0 left-0 right-0 bottom-0 bg-black/50 z-20 overflow-auto overflow-y-scroll"
        >
            <motion.div
                initial={itemAnimation.hidden}
                animate={itemAnimation.visible}
                exit={itemAnimation.hidden}
                transition={{
                    type: "spring",
                }}
                key={props.item.id}
                className="bg-white mt-16 rounded-2xl relative lg:w-1/3 flex flex-col gap-4 justify-center p-4 shadow-xl"
            >
                <div className="flex flex-row">
                    <h3 className=" bg-slate-100 py-2 p-4 rounded-xl shadow-xl">{props.item.title}</h3>
                </div>
                <div
                onClick={() => props.onShowItem(props.item)}
                className=" cursor-pointer absolute top-2 right-2 lg:right-[-3rem] bg-white rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-7 h-7">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z" clipRule="evenodd" />
                    </svg>
                </div>
                <img className="load rounded-xl shadow-2xl" src={props.item.img} alt="" />
                <div className="flex flex-row items-center gap-2">
                {
                    props.item.categories.map((category) => (
                        <h3 key={category.name} className=" bg-gradient-to-br from-[#7bd989] via-[#2bbec8] p-2 rounded-xl shadow-xl text-xs">#{category.name}</h3>
                    ))
                }
                </div>
                <p className=" bg-slate-100 py-2 p-4 rounded-xl shadow-xl text-sm">{props.item.desc}</p>
                <div className="flex flex-col gap-2 md:flex-row md:gap-0 justify-between ">
                    <p className="font-[600] bg-slate-100 p-2 rounded-xl shadow-xl">Price: {props.item.price}&#x24;</p>
                    <button onClick={() => props.onAdd(props.item)} className="flex items-center justify-center bg-slate-100 p-2 rounded-xl shadow-xl hover:bg-white hover:drop-shadow-xl duration-200">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                <path d="M1 1.75A.75.75 0 011.75 1h1.628a1.75 1.75 0 011.734 1.51L5.18 3a65.25 65.25 0 0113.36 1.412.75.75 0 01.58.875 48.645 48.645 0 01-1.618 6.2.75.75 0 01-.712.513H6a2.503 2.503 0 00-2.292 1.5H17.25a.75.75 0 010 1.5H2.76a.75.75 0 01-.748-.807 4.002 4.002 0 012.716-3.486L3.626 2.716a.25.25 0 00-.248-.216H1.75A.75.75 0 011 1.75zM6 17.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15.5 19a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                        </svg>
                    </button>
                </div>
            </motion.div>
        </motion.div>
    );
}

export default AppItem;