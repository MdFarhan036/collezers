import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
const collegeslides1 = [
    {
        image: require('../assets/partner/lpu-logo.png'),
    },
    {
        image: require('../assets/partner/manipal-logo.png'),
    },
    {
        image: require('../assets/partner/GLA-U-logo.jpg'),
    },
    {
        image: require('../assets/partner/jain-logo.png'),
    },
    {
        image: require('../assets/partner/dypu.png'),
    },
    
]
const collegeslides2 = [
    {
        image: require('../assets/partner/smu.png'),
    },
    {
        image: require('../assets/partner/chandigarh-university-logo.png'),
    },
    {
        image: require('../assets/partner/vgu_logo.jpg'),
    },
    {
        image: require('../assets/partner/maharishi.png'),
    },
    {
        image: require('../assets/partner/jnu-logo1.png'),
    },

    
]

export const CollegeSlider = () => {
    const duplicatedcollegeSlides1 = [...collegeslides1, ...collegeslides1];
    const duplicatedcollegeSlides2 = [...collegeslides2, ...collegeslides2];
    return (
        <>
            <div className='collegepage-area'>
                <motion.div
                    className="flex"
                    animate={{
                        x: ['0%', '-100%'],
                        transition: {
                            duration: 10,
                            repeat: Infinity,
                        }
                    }}
                >
                    {duplicatedcollegeSlides1.map((collgeslide1, index) => (
                        <div key={index} className="colleges-slider" style={{ width: `${100 / collegeslides1.length}%` }}>
                            <div className="colleges-slide">
                                <div className='collegesslider-image'>

                                    <img src={collgeslide1.image} alt='Slider Image' />


                                </div>
                            </div>

                        </div>
                    ))}
                </motion.div>
            </div>
            <div className='collegepage-area'>
                <motion.div
                    className="flex"
                    animate={{
                        x: ['0%', '-100%'],
                        transition: {
                            ease: 'linear',
                            
                            duration: 10,
                            repeat: Infinity,
                        }
                    }}
                >
                    {duplicatedcollegeSlides2.map((collgeslide2, index) => (
                        <div key={index} className="colleges-slider" style={{ width: `${100 / collegeslides2.length}%` }}>
                            <div className="colleges-slide">
                                <div className='collegesslider-image'>

                                    <img src={collgeslide2.image} alt='Slider Image' />


                                </div>
                            </div>

                        </div>
                    ))}
                </motion.div>
            </div>
        </>
    )
}
