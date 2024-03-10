import { motion, useAnimation } from 'framer-motion';
import React from 'react';

function Featured() {
    const cards = [useAnimation(), useAnimation()];

    const handleHover = (index) => {
        cards[index].start({ y: "0" });
    };

    return (
        <div className='w-full py-20 bg-gray-700'>
            <div className='w-full px-16 border-b-[2px] border-gray-600 pb-10'>
                <h1 className='text-6xl font-["Neue_Montreal"] tracking-tight'>
                    Featured projects
                </h1>
            </div>
            <div className='px-12'>
                <div className='cards w-full flex gap-12 mt-16'>
                    <div className='card-container relative w-1/2 h-[80vh]'>
                        <h1 className='absolute flex left-full text-[#CDEA68] -translate-x-1/3 top-1/3 -translate-y-1/2 z-[10] text-7xl tracking-tighter font-semibold '>
                            <h1 className='absolute flex right-full text-[#CDEA68] translate-x-1/3 top-1/3 -translate-y-1/2 z-[10] text-7xl tracking-tighter font-semibold '>
                            {"FYDE".split('').map((item, index) => (
                                <span className='inline-block'> {item} </span>
                            ))}
                            </h1>    
                        </h1>
                        <div className='card w-full h-full rounded-2xl overflow-hidden'>
                            <img
                                className='w-full h-full bg-cover'
                                src='https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png'
                                alt=''
                            />
                        </div>
                    </div>
                    <div className='card-container relative w-1/2 h-[80vh]'>
                        <h1 className='absolute flex right-full text-[#CDEA68] translate-x-1/3 top-1/2 -translate-y-1/2 z-[10] text-7xl tracking-tighter font-semibold '>
                            {"VISE".split('').map((item, index) => (
                                <span className='inline-block'> {item} </span>
                            ))}
                        </h1>
                        <div className='card w-full h-full rounded-2xl overflow-hidden'>
                            <img
                                className='w-full h-full bg-cover'
                                src='https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg'
                                alt=''
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Featured;
