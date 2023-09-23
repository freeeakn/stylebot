import { motion } from "framer-motion";

function AppCart(props) {
    return (
        <motion.div
        initial={{
            y: -100,
            x: 100,
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
            y: -100,
            x: 100,
            opacity: 0,
            scale: 0,
        }}
        transition={{
            type: "spring",
        }}
        className="absolute top-14 right-0 flex flex-col justify-between rounded-2xl bg-white p-4 drop-shadow-xl w-[20rem] min-h-[10rem]">
            <div  className="pl-1 font-semibold">
                <h3>
                    Items in the cart
                </h3>
            </div>
            {props.cart.map(item => (
                <div key={item.id}
                className=" shadow-xl"
                >
                    {item.title}
                    {item.count}
                </div>
            ))}
            <div>
                hello
            </div>
        </motion.div>
    );
}

export default AppCart;