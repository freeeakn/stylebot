import { useState } from "react";
import { motion } from "framer-motion";

function AppCatalog() {
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

    let i = -1;
    const [items, setItems] = useState([
        {
            id: i++,
            title: 'Tshort',
            img: 'https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/422992/sub/goods_422992_sub14.jpg?width=750',
            desc: 'lorem ipsum dolor sit amet, consectetur',
            category: 'Tshort',
            price: '12.99',
        },
        {
            id: i++,
            title: 'Tshort2',
            img: 'https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/422992/sub/goods_422992_sub14.jpg?width=750',
            desc: 'lorem ipsum dolor sits amet, consectetur',
            category: 'Tshort',
            price: '11.99',
        },
        {
            id: i++,
            title: 'Tshort3',
            img: 'https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/422992/sub/goods_422992_sub14.jpg?width=750',
            desc: 'lorem ipsum dolor sits amet, consectetur',
            category: 'Tshort',
            price: '10.99',
        },
        {
            id: i++,
            title: 'Sweater',
            img: 'https://www.fjallraven.com/4a1b9e/globalassets/catalogs/fjallraven/f8/f818/f81829/f555/ovik_knit_sweater_m_81829-555_a_main_fjr.jpg?width=2000&height=2000&mode=BoxPad&bgcolor=fff&quality=100',
            desc: 'lorem ipsum dolor sits amet, consectetur',
            category: 'sweater',
            price: '25.99',
        },
        {
            id: i++,
            title: 'Sweater2',
            img: 'https://www.fjallraven.com/4a1b9e/globalassets/catalogs/fjallraven/f8/f818/f81829/f555/ovik_knit_sweater_m_81829-555_a_main_fjr.jpg?width=2000&height=2000&mode=BoxPad&bgcolor=fff&quality=100',
            desc: 'lorem ipdssum dolor sits amet, consectetur',
            category: 'sweater',
            price: '50.99',
        },
        {
            id: i++,
            title: 'Sweater2',
            img: 'https://www.fjallraven.com/4a1b9e/globalassets/catalogs/fjallraven/f8/f818/f81829/f555/ovik_knit_sweater_m_81829-555_a_main_fjr.jpg?width=2000&height=2000&mode=BoxPad&bgcolor=fff&quality=100',
            desc: 'lorem ipdssum dolor sits amet, consectetur',
            category: 'sweater',
            price: '50.99',
        },
        {
            id: i++,
            title: 'Sweater2',
            img: 'https://www.fjallraven.com/4a1b9e/globalassets/catalogs/fjallraven/f8/f818/f81829/f555/ovik_knit_sweater_m_81829-555_a_main_fjr.jpg?width=2000&height=2000&mode=BoxPad&bgcolor=fff&quality=100',
            desc: 'lorem ipdssum dolor sits amet, consectetur',
            category: 'sweater',
            price: '50.99',
        },
        {
            id: i++,
            title: 'Sweater2',
            img: 'https://www.fjallraven.com/4a1b9e/globalassets/catalogs/fjallraven/f8/f818/f81829/f555/ovik_knit_sweater_m_81829-555_a_main_fjr.jpg?width=2000&height=2000&mode=BoxPad&bgcolor=fff&quality=100',
            desc: 'lorem ipdssum dolor sits amet, consectetur',
            category: 'sweater',
            price: '50.99',
        },
        {
            id: i++,
            title: 'Tshort',
            img: 'https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/422992/sub/goods_422992_sub14.jpg?width=750',
            desc: 'lorem ipsum dolor sit amet, consectetur',
            category: 'Tshort',
            price: '12.99',
        },
        {
            id: i++,
            title: 'Tshort2',
            img: 'https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/422992/sub/goods_422992_sub14.jpg?width=750',
            desc: 'lorem ipsum dolor sits amet, consectetur',
            category: 'Tshort',
            price: '11.99',
        },
        {
            id: i++,
            title: 'Tshort3',
            img: 'https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/422992/sub/goods_422992_sub14.jpg?width=750',
            desc: 'lorem ipsum dolor sits amet, consectetur',
            category: 'Tshort',
            price: '10.99',
        },
        {
            id: i++,
            title: 'Sweater',
            img: 'https://www.fjallraven.com/4a1b9e/globalassets/catalogs/fjallraven/f8/f818/f81829/f555/ovik_knit_sweater_m_81829-555_a_main_fjr.jpg?width=2000&height=2000&mode=BoxPad&bgcolor=fff&quality=100',
            desc: 'lorem ipsum dolor sits amet, consectetur',
            category: 'sweater',
            price: '25.99',
        },
        {
            id: i++,
            title: 'Sweater2',
            img: 'https://www.fjallraven.com/4a1b9e/globalassets/catalogs/fjallraven/f8/f818/f81829/f555/ovik_knit_sweater_m_81829-555_a_main_fjr.jpg?width=2000&height=2000&mode=BoxPad&bgcolor=fff&quality=100',
            desc: 'lorem ipdssum dolor sits amet, consectetur',
            category: 'sweater',
            price: '50.99',
        },
        {
            id: i++,
            title: 'Sweater2',
            img: 'https://www.fjallraven.com/4a1b9e/globalassets/catalogs/fjallraven/f8/f818/f81829/f555/ovik_knit_sweater_m_81829-555_a_main_fjr.jpg?width=2000&height=2000&mode=BoxPad&bgcolor=fff&quality=100',
            desc: 'lorem ipdssum dolor sits amet, consectetur',
            category: 'sweater',
            price: '50.99',
        },
        {
            id: i++,
            title: 'Sweater2',
            img: 'https://www.fjallraven.com/4a1b9e/globalassets/catalogs/fjallraven/f8/f818/f81829/f555/ovik_knit_sweater_m_81829-555_a_main_fjr.jpg?width=2000&height=2000&mode=BoxPad&bgcolor=fff&quality=100',
            desc: 'lorem ipdssum dolor sits amet, consectetur',
            category: 'sweater',
            price: '50.99',
        },
        {
            id: i++,
            title: 'Sweater2',
            img: 'https://www.fjallraven.com/4a1b9e/globalassets/catalogs/fjallraven/f8/f818/f81829/f555/ovik_knit_sweater_m_81829-555_a_main_fjr.jpg?width=2000&height=2000&mode=BoxPad&bgcolor=fff&quality=100',
            desc: 'lorem ipdssum dolor sits amet, consectetur',
            category: 'sweater',
            price: '50.99',
        },
        
    ])

    // const category = useState(['all', 'tshort', 'trouser', 'sweater'])

    return (
        <>
        {/* <motion.div
        initial={itemAnimation.hidden}
        whileInView={itemAnimation.visible}
        viewport={{ amount: 0.2}}
        >
            <input type="text" />
        </motion.div> */}

        <motion.main
        className=" grid grid-cols-2 md:grid-cols-3 gap-4 md:px-32"
        >
            {
                items.map(el => (
                    <motion.div
                    initial={itemAnimation.hidden}
                    whileInView={itemAnimation.visible}
                    viewport={{ amount: 0.2}}
                    key={el.id}
                    className="glass flex flex-col justify-center gap-4 p-4 shadow-xl"
                    >
                        <img className=" rounded-xl shadow-2xl"src={el.img} alt="" />
                        <div className="flex justify-around ">
                            <h3 className=" bg-slate-100 p-2 rounded-xl shadow-xl">{el.title}</h3>
                            <p className="font-[600] bg-slate-100 p-2 rounded-xl shadow-xl">Price: {el.price}&#x24;</p>
                            <button className="bg-slate-100 p-2 rounded-xl shadow-xl hover:bg-white hover:drop-shadow-xl duration-200">Buy</button>
                        </div>

                    </motion.div>
                ))
            }
        </motion.main>
        </>
    );
}

export default AppCatalog;