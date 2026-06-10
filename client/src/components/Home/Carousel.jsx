import React, { useState, useEffect } from "react";
import { EnquiryModal } from "../Common/EnquiryModal";
import TrackVisibility from "react-on-screen";

const Carousel = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["250+ Courses", "1100+ Colleges", "10000+ Students"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };
  
  return (
    <>
      <section className="home-carousel">
        {/* <div className="home-content"> */}
        <div className="carousel-img">
          <TrackVisibility>
            {({ isVisible }) => (
              <div
                className={isVisible ? "animate__animated animate__fadeIn" : ""}
              >
                <span className="tagline"></span>
                <h1 className="name font-weight-bold">
                  {`Find Over  `}
                  <span
                    className="txt-rotate"
                    data-rotate='[ 2500+ Courses", "1100+ Colleges", "10000+ Students", ]'
                  >
                    <span className="wrap">{text}</span>
                  </span>
                </h1>
                <div className="search-container">
                  <form action="/action_page.php" className="home-search">
                    <input type="text" placeholder="Search.." name="search" />
                    <button type="submit">Submit</button>
                  </form>
                </div>

                {/* <a href={{}} className="btn-box">
                  Need Counselling
                </a> */}
              
              </div>
            )}
          </TrackVisibility>
        </div>
      </section>
    </>
  );
};
export default Carousel;
