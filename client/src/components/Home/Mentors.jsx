import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { EnquiryModal } from '../Common/EnquiryModal';
import { MentorsModal } from './MentorsModal';

const slides = [
    {
        image: require('../../assets/course-3.jpg'),
        name: "cwds Singh",
        role: "Education expert",
        qual: "MBA",
        exper: "7 Year of Experience",
        consultnow: "Consult Now",
    },
    {
        image: require('../../assets/course-2.jpg'),
        name: "Pooja Singh",
        role: "Education expert",
        qual: "MBA",
        exper: "7 Year of Experience",
        consultnow: "Consult Now",
    },
    {
        image: require('../../assets/course-3.jpg'),
        name: "Pooja Singh",
        role: "Education expert",
        qual: "MBA",
        exper: "7 Year of Experience",
        consultnow: "Consult Now",
    },
    {
        image: require('../../assets/course-2.jpg'),
        name: "Pooja Singh",
        role: "Education expert",
        qual: "MBA",
        exper: "7 Year of Experience",
        consultnow: "Consult Now",
    },
    {
        image: require('../../assets/course-3.jpg'),
        name: "Pooja Singh",
        role: "Education expert",
        qual: "MBA",
        exper: "7 Year of Experience",
        consultnow: "Consult Now",
    },
    {
        image: require('../../assets/course-2.jpg'),
        name: "Pooja Singh",
        role: "Education expert",
        qual: "MBA",
        exper: "7 Year of Experience",
        consultnow: "Consult Now",
    },
    {
        image: require('../../assets/course-3.jpg'),
        name: "Pooja Singh",
        role: "Education expert",
        qual: "MBA",
        exper: "7 Year of Experience",
        consultnow: "Consult Now",
    },

]
export const Mentors = () => {
    const [open, setOpen] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const closeModal = () => setShowModal(false);
    // show modal in 1 sec after mounted
   
    const [menuOpen, setMenuOpen] = useState(false);
    const duplicatedSlides = [...slides, ...slides];
    return (

        <>
            <div className='conatiner'>
                <div className='mentors'>
                    <div className='mentors-header'>
                        <h5>Say Goodbye to faceless call centers</h5>
                        <h2>Get Right guidance from our Mentors</h2>
                        <p>
                            Collezers has a team of 100+ experts who are assissting you since 2010 and providing you the right guidance for your successful career
                        </p>
                    </div>
                    <div className='mentors-area'>
                        <div>


                            <motion.div
                                className="flex"
                                animate={{
                                    x: ['0%', '-100%'],
                                    transition: {
                                        ease: 'linear',
                                        duration: 90,
                                        repeat: Infinity,
                                    }
                                }}
                            >
                                {duplicatedSlides.map((slide, index) => (
                                    <div key={index} className="mentors-slider" style={{ width: `${100 / slides.length}%` }}>
                                        <div className="mentors-slide">
                                            <div className='slider-image'>

                                                <img src={slide.image} alt='Slider Image' />

                                                <div className="mentors-content">
                                                    <h3 className='slide-name' >{slide.name}</h3>
                                                    <span className='slide-span'>
                                                        <h5 className='slide-role'>{slide.role}</h5>
                                                        <h5 className='slide-qual'>{slide.qual}</h5>
                                                    </span>
                                                    <h4 className='slide-exper'>{slide.exper}</h4>
                                                    <button className='btn-appoint'
                                                        onClick={() => {
                                                            setShowModal(true);
                                                        }}>{slide.consultnow}</button>

                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                ))}
                            </motion.div>
                        </div>
                        {showModal && <MentorsModal closeModal={closeModal} open={open} />}

                    </div>
                </div >
            </div >
        </>
    )
}
