import { motion } from 'framer-motion'
import Mascot from './Mascot';
import catalog from '../assets/catalog.png'
import { useEffect, useState } from 'react';

function AppMain() {
    const [say, setSay] = useState('WooF!');
    useEffect(() => {
        setTimeout(() => {
            setSay('WooF! WooF!');
        }, 5000)
    }, [])
    return (
        <main className='flex flex-col gap-2'>
            <section
                className='flex flex-col justify-center'
            >
                <motion.div
                initial={{
                    scale: 0.5,
                    y: 100
                }}
                animate={{
                    scale: 1,
                    y: 0
                }}
                transition={{
                    type: "spring",
                    delay: 0.5,
                }}
                className='w-32 self-end relative'>
                    <Mascot/>
                    <motion.div
                    initial={{
                        scale: 0,
                        x: 100
                    }}
                    animate={{
                        scale: 1,
                        x: 0
                    }}
                    transition={{
                        type: "spring",
                        delay: 1.2,
                    }}
                    className='absolute z-20 left-[-8rem] top-0 p-5 bg-white rounded-t-2xl rounded-bl-2xl'>
                        <p>{say}</p>
                    </motion.div>
                </motion.div>
                <div className=" glass relative z-10 gap-4 p-8 mb-2">
                    <motion.p
                        initial={{x: -500}}
                        whileInView={{x: 0}}
                    >Welcome to the official page of Lookovitsa</motion.p>
                    <motion.h1
                        initial={{x: 500}}
                        whileInView={{x: 0}}
                        className=" text-4xl"
                    >Unlock the next generation of fashion with the personal AI-stylist!</motion.h1>
                </div>
            </section>
            <img
            className=' self-center w-1/2 rounded-3xl drop-shadow-2xl'
            src={catalog} alt="" />
            <section
                className='flex flex-col justify-center'
            >
                <div className=" glass relative z-10 gap-4 p-8 mb-2">
                    <motion.p
                        initial={{x: -500}}
                        whileInView={{x: 0}}
                        className=' text-right'
                    >Here we have an catalog collection</motion.p>
                    <motion.h1
                        initial={{x: 500}}
                        whileInView={{x: 0}}
                        className=" text-4xl text-right"
                    >Where u can manually buy clothes</motion.h1>
                </div>
            </section>
            <section
                className='flex flex-col justify-center'
            >
                <div className=" glass relative flex flex-col gap-10 z-10 p-8 mb-2">
                    <motion.h1
                        initial={{x: 500}}
                        whileInView={{x: 0}}
                        className=" text-4xl text-left"
                    >But.</motion.h1>
                    <motion.p
                        initial={{x: -500}}
                        whileInView={{x: 0}}
                        className=' text-2xl text-justify'
                    >
                        By leveraging AI, you can save time, reduce decision fatigue, and discover new styles that you might not have considered before. Embracing AI for clothing selection can enhance your overall shopping experience and help you curate a wardrobe that truly reflects your unique taste and personality.
                    </motion.p>
                </div>
            </section>
        </main>
    );
}

export default AppMain;