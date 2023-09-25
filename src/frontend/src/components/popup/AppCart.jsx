import { motion } from "framer-motion";

function AppCart(props) {
    return (
        <motion.div
        initial={{
            y: -150,
            x: 150,
            opacity: 0,
            scale: 0,
        }}
        animate={{
            y: 0,
            x: 0,
            opacity: 1,
            scale: 1,
        }}
        exit={{
            y: -150,
            x: 150,
            opacity: 0,
            scale: 0,
        }}
        transition={{
            type: "spring",
        }}
        className="absolute top-14 right-0 flex flex-col justify-between gap-4 rounded-2xl bg-white p-4 drop-shadow-xl w-[20rem] min-h-[10rem]">
            <div  className="pl-1 font-semibold">
                <h3>
                    Items in the cart
                </h3>
            </div>
            {
                props.cart.length != 0 ?
                <>
                {
                props.cart.map(item => (
                <motion.div
                initial={{
                    y: -10,
                    opacity: 0,
                }}
                animate={{
                    y: 0,
                    opacity: 1,
                }}
                exit={{
                    x: 50,
                    scale: 0,
                    opacity: 0,
                }}
                transition={{
                    type: "spring",
                }}
                key={item.id}
                className="flex items-center justify-between text-sm"
                >
                    <div className="flex items-center gap-4">
                        <img className=" rounded-xl shadow-2xl h-10"src={item.img} alt="" />
                        <p>
                            {item.title}
                        </p>
                    </div>
                    <div className="flex items-center gap-4">
                        <p>
                            {item.count}x
                        </p>
                        <p>
                            {(item.price * item.count).toFixed(2)}$
                        </p>
                        <button onClick={() => props.rmItem(item)} className="flex items-center justify-center bg-slate-100 p-2 rounded-xl shadow-xl hover:bg-white hover:drop-shadow-xl duration-200">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                            <path fillRule="evenodd" d="M8.75 1A2.75 2.75 0 006 3.75v.443c-.795.077-1.584.176-2.365.298a.75.75 0 10.23 1.482l.149-.022.841 10.518A2.75 2.75 0 007.596 19h4.807a2.75 2.75 0 002.742-2.53l.841-10.52.149.023a.75.75 0 00.23-1.482A41.03 41.03 0 0014 4.193V3.75A2.75 2.75 0 0011.25 1h-2.5zM10 4c.84 0 1.673.025 2.5.075V3.75c0-.69-.56-1.25-1.25-1.25h-2.5c-.69 0-1.25.56-1.25 1.25v.325C8.327 4.025 9.16 4 10 4zM8.58 7.72a.75.75 0 00-1.5.06l.3 7.5a.75.75 0 101.5-.06l-.3-7.5zm4.34.06a.75.75 0 10-1.5-.06l-.3 7.5a.75.75 0 101.5.06l.3-7.5z" clipRule="evenodd" />
                        </svg>
                        </button>
                    </div>
                </motion.div>
            ))}
            <div className="flex items-center justify-between text-sm">
                <p>Sub-Total:</p>
                <div className="flex items-center gap-4">
                    <h4>
                        {props.sumCart()}$
                    </h4>
                    <button className="flex items-center justify-center bg-gradient-to-br from-[#7bd989] via-[#2bbec8] p-2 rounded-xl shadow-xl hover:bg-lime-300 hover:drop-shadow-xl duration-200">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                            <path fillRule="evenodd" d="M1 4a1 1 0 011-1h16a1 1 0 011 1v8a1 1 0 01-1 1H2a1 1 0 01-1-1V4zm12 4a3 3 0 11-6 0 3 3 0 016 0zM4 9a1 1 0 100-2 1 1 0 000 2zm13-1a1 1 0 11-2 0 1 1 0 012 0zM1.75 14.5a.75.75 0 000 1.5c4.417 0 8.693.603 12.749 1.73 1.111.309 2.251-.512 2.251-1.696v-.784a.75.75 0 00-1.5 0v.784a.272.272 0 01-.35.25A49.043 49.043 0 001.75 14.5z" clipRule="evenodd" />
                        </svg>
                    </button>
                </div>
            </div>
            </> :
                <>
                Cart is empty
                </>
            }
        </motion.div>
    );
}

export default AppCart;