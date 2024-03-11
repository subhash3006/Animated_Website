import { motion, useAnimation } from 'framer-motion';
import React from 'react';

function Featured() {
    const cards = [useAnimation(), useAnimation()];

    const handleHover = (index) => {
        cards[index].start({ y: "0" });
    };

    const handleHoverEnd = (index) => {
        cards[index].start({ y: "100%" });
    };

    return (
        <div className='w-full py-20 bg-gray-700'>
            <div className='w-full px-16 border-b-2 border-gray-600 pb-8'>
                <h1 className='text-6xl font-["Neue_Montreal"] tracking-tight'>
                    Featured projects
                </h1>
            </div>
            <div className='px-12'>
                <div className='cards w-full flex gap-8 mt-8'>
                    <motion.div
                        onHoverStart={() => handleHover(0)}
                        onHoverEnd={() => handleHoverEnd(0)}
                        className='card-container relative w-1/2 h-[80vh]'>
                        <li className="text-2xl font-semibold mb-1">FYDE</li>
                        <h1 className='absolute overflow-hidden flex left-full text-[#74872d] -translate-x-[40%] top-[55%] -translate-y-1/2 z-[10] text-7xl tracking-tighter font-semibold '>
                            {"FYDE".split('').map((item, index) => (
                                <motion.span
                                    key={index}
                                    initial={{ y: '100%' }}
                                    animate={cards[0]}
                                    transition={{ ease: [0.22, 2, 0.36, 1], delay: index * 0.05 }}
                                    className='inline-block'>
                                    {item}
                                </motion.span>
                            ))}
                        </h1>
                        <motion.div
                            className='card w-full h-full rounded-2xl overflow-hidden'
                            whileHover={{ scale: 0.97 }}
                            transition={{ ease: 'easeInOut', duration: 0.3 }}>
                            <motion.img
                                className='w-full h-full bg-cover'
                                whileHover={{ scale: 1.12 }}
                                transition={{ ease: 'easeInOut', duration: 0.5 }}
                                src='https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png'
                                alt=''
                            />
                        </motion.div>
                    </motion.div>
                    <motion.div
                        onHoverStart={() => handleHover(1)}
                        onHoverEnd={() => handleHoverEnd(1)}
                        className='card-container relative w-1/2 h-[80vh]'>
                        <li className="text-2xl font-semibold mb-1">VISE</li>
                        <h1 className='absolute overflow-hidden flex right-full text-[#74872d] translate-x-[30%] top-[55%] -translate-y-1/2 z-[10] text-7xl tracking-tighter font-semibold '>
                            {"VISE".split('').map((item, index) => (
                                <motion.span
                                    key={index}
                                    initial={{ y: '100%' }}
                                    animate={cards[1]}
                                    transition={{ ease: [0.22, 2, 0.36, 1], delay: index * 0.05 }}
                                    className='inline-block'>
                                    {item}
                                </motion.span>
                            ))}
                        </h1>
                        <motion.div
                            className='card w-full h-full rounded-2xl overflow-hidden'
                            whileHover={{ scale: 0.97 }}
                            transition={{ ease: 'easeInOut', duration: 0.3 }}>
                            <motion.img
                                whileHover={{ scale: 1.12 }}
                                transition={{ ease: 'easeInOut', duration: 0.5 }}
                                className='w-full h-full bg-cover'
                                src='https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg'
                                alt=''
                            />
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}

export default Featured;
