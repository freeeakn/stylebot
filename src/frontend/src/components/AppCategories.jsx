import { useState, useEffect } from "react";
import axios from "axios";
import { motion } from "framer-motion"

function AppCategories(props) {
    const [categories, setCategories] = useState([
        {
            id: 0,
            key: 'all',
            name: 'All wears',
        }
    ]);
    const [isLoading, setIsLoading] = useState(false);

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

    const fetchCategories = async () => {
        setIsLoading(true);
        const {data} = await axios.get('http://127.0.0.1:8000/api/v1/categories')
        setCategories([...categories, ...data])
        setIsLoading(false);
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
        className="flex justify-center items-center glass py-5 px-5 gap-8 mb-4">
            <div className="loader2"></div>
        </motion.div>
        :
        <motion.div
        initial={itemAnimation.hidden}
        whileInView={itemAnimation.visible}
        className="glass flex py-2 px-2 gap-8 mb-4">
            {
            categories.map(item =>(
                <div
                onClick={() => props.chooseCategory(item.key)}
                key={item.id}
                className="cursor-pointer p-2 rounded-xl hover:bg-slate-100 hover:drop-shadow-xl duration-200">
                    {item.name}
                </div>
            ))
            }
        </motion.div>
        }
        </>
    );
}

export default AppCategories;