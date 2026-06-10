import React, { useRef, useState } from "react";
import FaqData1 from './FaqData';

const Faqitem = ({ question, answer, isOpen, onClick }) => {
    const contentHeight = useRef();
    return (
        <div className="wrapper">
            <button
                className={`question-container ${isOpen ? "active" : ""}`}
                onClick={onClick}
            >
                <p className="question-content">{question}</p>
                <i className={`fa-solid fa-caret-down ${isOpen ? "active" : ""}`}></i>
            </button>

            <div
                ref={contentHeight}
                className="answer-container"
                style={
                    isOpen
                        ? { height: contentHeight.current.scrollHeight }
                        : { height: "0px" }
                }
            >
                <p className="answer-content">{answer}</p>
            </div>
        </div>
    );
};

const Faq = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const handleItemClick = (index) => {
        setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    return (
        <div className="faq-cont">
            {FaqData1.map((item, index) => (
                <Faqitem
                    key={index}
                    question={item.question}
                    answer={item.answer}
                    isOpen={activeIndex === index}
                    onClick={() => handleItemClick(index)}
                />
            ))}
        </div>
    )
}

export default Faq;