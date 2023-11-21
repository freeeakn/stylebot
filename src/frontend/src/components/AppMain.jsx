import { motion } from 'framer-motion'
import Mascot from './mascot';

function AppMain() {
    return (
        <main className='flex flex-col justify-center items-center'>
            <section
                className='flex flex-col justify-center'
            >
                <div className=' w-32'>
                    <Mascot/>
                </div>
                <motion.p
                    initial={{x: -500}}
                    animate={{x: 0}}
                >Welcome to the official page of Lookovitsa</motion.p>
                <motion.h1
                    initial={{x: 500}}
                    animate={{x: 0}}
                    className=" text-4xl"
                >Unlock the next generation of fashion with the personal AI-stylist!</motion.h1>
            </section>
        </main>
    );
}

export default AppMain;