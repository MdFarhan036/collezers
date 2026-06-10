import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
// import { Corousel } from "./Corousel";

import { CourseCarousel } from "./CourseCarousel";
import { courseproductData, responsive } from "../PartnersPage/courseData";
import { headlogoData } from "../components/Data/CollegeData";
import EmptyFile from "../components/Empty/EmptyFile";
import prospectuslink from "../assets/CDOEProspectus.pdf";
// import "slick-carousel/slick/slick.css";
import { coursecarouselData } from "../components/Data/CollegeData";
// import "slick-carousel/slick/slick-theme.css";
import Modal from "./Modal";
import { carouselImageData } from "../components/Data/CollegeData";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
// import { SliderData } from "./SliderData";
import carouselImg1 from "../assets/course1.jpg";
import carouselImg2 from "../assets/course2.jpg";
import carouselImg3 from "../assets/caps.jpg";
import carouselImg4 from "../assets/course4.jpg";
import carouselImg5 from "../assets/course5.jpg";
import imgIcon from "../assets/check.png";
import imgIcon1 from "../assets/male.png";
import imgIcon2 from "../assets/female.png";
import CarouselCollege from "../components/ComparePage/CarouselCollege";
import Collegedata1 from "../components/Data/CollegeData";
import { HeadlogoCard } from "../components/ComparePage/HeadlogoCard";
import img1 from "../assets/lpu1.jpg";
import img2 from "../assets/lpu2.jpg";
import img3 from "../assets/lpu3.jpg";
import img4 from "../assets/lpu3.jpg";
import video1 from "../assets/lpu3.jpg";
import "./Partnerspage.css";
import Accordion from "../components/Home/Accordion";
import { EnquiryForm } from "../components/Common/EnquiryForm";
import { CollegeCarousel } from "./CollegeCarousel";

const slides = [
  img1,
  img2,
  img3,
  img4,
  video1,
];

export const Partnerspage = () => {
  const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch({ prospectuslink }).then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);

        // Setting various property values
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "CDOE Prospectus.pdf";
        alink.click();
      });
    });
  };
  const courseproduct = courseproductData.map((item) => (
    <CourseCarousel key={item.id} item={item} />
  ));
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [enquiry, setEnquiry] = useState({
    fullname: "",
    email: "",
    phone: "",
    city: "",
    state: "",
    gender: "",
    specialization: "",
  });
  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setEnquiry({
      ...enquiry,
      [name]: value,
    });
  };
  const formSubmit = (e) => {
    e.preventDefault();
    console.log(enquiry);
  };
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  // const [courseData, setCourseData] = useState(CollegecoursesData);
  const { id } = useParams();
  const [partnersitem1, setpartnersItem1] = useState(null);
  useEffect(() => {
    let partnersitem1 = Collegedata1.find(
      (partnersitem1) => partnersitem1.id === parseInt(id)
    );
    if (partnersitem1) {
      setpartnersItem1(partnersitem1);
    }
  }, [id]);
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  };
  // const [imageIndex, setImageIndex] = useState(0);

  // function showNextImage() {
  //   setImageIndex((index) => {
  //     if (index === coursecarouselData.length - 1) return 0;
  //     return index + 1;
  //   });
  // }

  // function showPrevImage() {
  //   setImageIndex((index) => {
  //     if (index === 0) return coursecarouselData.length - 1;
  //     return index - 1;
  //   });
  // }

  return (
    <>
      {partnersitem1 ? (
        <div className="container">
          <div className="partners-header">
            <div className="partners-title">
              <h1>{partnersitem1.collegename}</h1>

              <p>{partnersitem1.collegedesc}</p>
              <div className="reviews">
                <div className="collegepage-icon">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
              </div>

              <div className="head-logos">
                {headlogoData.map((item) => (
                  <HeadlogoCard key={item.id} item={item} />
                ))}
              </div>
              <div className="">
                <button className="partners-applybtn" onClick={openModal}>
                  Apply University<i className="fa-solid fa-arrow-right"></i>
                </button>
                <Modal isOpen={isModalOpen} onClose={closeModal}>
                  <EnquiryForm />
                </Modal>
              </div>
              <div className="partners-compareitem">
                <p>
                  <i className="fa-solid fa-plus"></i>Add to compare
                </p>
                <p className="prospectusbtn" onClick={onButtonClick}>
                  <i className="fa-solid fa-download"></i>Prospectus
                </p>
                <p>
                  <i className="fa-solid fa-book"></i>Syllabus
                </p>
              </div>
              <p className="partners-ques">
                Not sure what you are looking for?
              </p>
              <button className="connect-form">
                <Link to="/contact">
                  {" "}
                  <i className="fa-solid fa-arrow-right"></i>Connect Us
                </Link>
              </button>
            </div>

            <div className="image-container">
              <CollegeCarousel>
                {[
                  ...slides.map((imgs) => <img src={imgs} />),
                  <video src={video1} autoPlay muted loop />,
                ]}
              </CollegeCarousel>
            </div>
          </div>
          <div className="college-mainbody">
            <div className="colleges-content">
              <div className="explore-colleges">
                <div className="collegepage-tabs ">
                  <div
                    onClick={() => toggleTab(1)}
                    className={
                      toggleState === 1
                        ? "collegetab active-collegetabs"
                        : "collegetab"
                    }
                  >
                    About University
                  </div>
                  <div
                    onClick={() => toggleTab(2)}
                    className={
                      toggleState === 2
                        ? "collegetab active-collegetabs"
                        : "collegetab"
                    }
                  >
                    Admissions
                  </div>
                  <div
                    onClick={() => toggleTab(3)}
                    className={
                      toggleState === 3
                        ? "collegetab active-collegetabs"
                        : "collegetab"
                    }
                  >
                    FAQ
                  </div>
                  <div
                    onClick={() => toggleTab(4)}
                    className={
                      toggleState === 4
                        ? "collegetab active-collegetabs"
                        : "collegetab"
                    }
                  >
                    Other universities
                  </div>
                </div>
                <div className="college-content">
                  <div
                    className={
                      toggleState === 1 ? "content active-content" : "content"
                    }
                  >
                    <h3>UNIVERSITY PREVIEW:</h3>
                    <h5>{partnersitem1.univprev1}</h5>
                    <h5>{partnersitem1.univprev2}</h5>
                    <h5>{partnersitem1.univprev4}</h5>
                    <h5>{partnersitem1.univprev5}</h5>
                    <h5>{partnersitem1.univprev6}</h5>
                    <h5>{partnersitem1.univprev7}</h5>
                    <h5>{partnersitem1.univprev8}</h5>

                    <h3>{partnersitem1.whyus}</h3>
                    <h5>{partnersitem1.whyusdesc1}</h5>
                    <h5>{partnersitem1.whyusdesc2}</h5>
                    <h5>{partnersitem1.whyusdesc3}</h5>
                    <h5>{partnersitem1.whyusdesc4}</h5>
                    <h5>{partnersitem1.whyusdesc5}</h5>
                    <h5>{partnersitem1.whyusdesc6}</h5>
                    <h5>{partnersitem1.whyusdesc7}</h5>
                    <h5>{partnersitem1.whyusdesc8}</h5>
                    {/* <h5>Holistic Development: LPU places a strong emphasis on holistic development, nurturing well-rounded individuals who possess not only academic prowess but also strong ethical values, leadership skills, and a sense of social responsibility.</h5> */}

                    <h3>Courses wise fees 2024 updated</h3>
                    <table>
                      <tr>
                        <th>Courses</th>
                        <th>Full Fees</th>
                      </tr>
                      <tr>
                        <td>{partnersitem1.coursenames1}</td>
                        <td>{partnersitem1.coursefees1}</td>
                      </tr>
                      <tr>
                        <td>{partnersitem1.coursenames2}</td>
                        <td>{partnersitem1.coursefees2}</td>
                      </tr>
                      <tr>
                        <td>{partnersitem1.coursenames3}</td>
                        <td>{partnersitem1.coursefees3}</td>
                      </tr>
                      <tr>
                        <td>{partnersitem1.coursenames4}</td>
                        <td>{partnersitem1.coursefees4}</td>
                      </tr>
                      <tr>
                        <td>{partnersitem1.coursenames5}</td>
                        <td>{partnersitem1.coursefees5}</td>
                      </tr>
                      <tr>
                        <td>{partnersitem1.coursenames6}</td>
                        <td>{partnersitem1.coursefees6}</td>
                      </tr>
                      <tr>
                        <td>{partnersitem1.coursenames7}</td>
                        <td>{partnersitem1.coursefees7}</td>
                      </tr>
                      <tr>
                        <td>{partnersitem1.coursenames8}</td>
                        <td>{partnersitem1.coursefees8}</td>
                      </tr>
                      <tr>
                        <td>{partnersitem1.coursenames9}</td>
                        <td>{partnersitem1.coursefees9}</td>
                      </tr>
                    </table>
                    <h3>SPECIAL FEATURES</h3>
                    <h5>{partnersitem1.specialfeatures1}</h5>
                    <h5>{partnersitem1.specialfeatures2}</h5>
                    <h5>{partnersitem1.specialfeatures3}</h5>
                    <h5>{partnersitem1.specialfeatures4}</h5>
                    <h5>{partnersitem1.specialfeatures5}</h5>
                    <h3>Approvals</h3>
                    <div className="end-logos">
                      <div className="approval-card">
                        <img src={partnersitem1.endlogo1} alt="" />
                      </div>
                      <div className="approval-card">
                        <img src={partnersitem1.endlogo2} alt="" />
                      </div>
                      <div className="approval-card">
                        <img src={partnersitem1.endlogo3} alt="" />
                      </div>
                      <div className="approval-card">
                        <img src={partnersitem1.endlogo4} alt="" />
                      </div>
                      <div className="approval-card">
                        <img src={partnersitem1.endlogo5} alt="" />
                      </div>
                      <div className="approval-card">
                        <img src={partnersitem1.endlogo6} alt="" />
                      </div>
                      <div className="approval-card">
                        <img src={partnersitem1.endlogo7} alt="" />
                      </div>
                      <div className="approval-card">
                        <img src={partnersitem1.endlogo8} alt="" />
                      </div>
                      <div className="approval-card">
                        <img src={partnersitem1.endlogo9} alt="" />
                      </div>
                    </div>

                    <h3>Courses</h3>
                    <div className="course-container">
                      <Carousel responsive={responsive}>
                        {courseproduct}
                      </Carousel>
                    </div>
                  </div>

                  <div
                    className={
                      toggleState === 2 ? "content active-content" : "content"
                    }
                  >
                    <div className="admission-container">
                      <h3>Our Admission Process</h3>
                      {/* <h5>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Eaque hic, deleniti voluptates, alias, consequatur
                        velit sit minus labore ipsum harum quasi iste placeat
                        quam tempore sapiente delectus molestias ipsa. Dolorem!
                      </h5> */}
                      <li>Step 1: </li>
                      <h5>
                        Visit your chosen university's website and click on the
                        Enroll Now button to apply online.
                      </h5>

                      <li>Step 2: </li>
                      <h5>
                        Upload all required documents and submit your
                        application.
                      </h5>

                      <li>Step 3: </li>
                      <h5>Pay the application fees.</h5>

                      <li>Step 4: </li>
                      <h5>
                        An admission counselor will contact you to guide you
                        through any additional procedures and assist you until
                        the entire process is complete.
                      </h5>

                      <button className="partners-applybtn" onClick={openModal}>
                        View Full Exam Pattern
                      </button>
                      <Modal isOpen={isModalOpen} onClose={closeModal}>
                        <h2>Examination Pattern</h2>

                        <table cellPadding={10} className="exam-pattern">
                          <tr></tr>
                          <tr>
                            <td>{partnersitem1.names1}</td>
                            <td>{partnersitem1.fees1}</td>
                          </tr>
                          <tr>
                            <td>{partnersitem1.names2}</td>
                            <td>{partnersitem1.fees2}</td>
                          </tr>
                          <tr>
                            <td>{partnersitem1.names3}</td>
                            <td>{partnersitem1.fees3}</td>
                          </tr>
                          <tr>
                            <td>{partnersitem1.names4}</td>
                            <td>{partnersitem1.fees4}</td>
                          </tr>
                          <tr>
                            <td>{partnersitem1.names5}</td>
                            <td>{partnersitem1.fees5}</td>
                          </tr>
                          <tr>
                            <td>{partnersitem1.names6}</td>
                            <td>{partnersitem1.fees6}</td>
                          </tr>
                          <tr>
                            <td>{partnersitem1.names7}</td>
                            <td>{partnersitem1.fees7}</td>
                          </tr>
                          <tr>
                            <td>{partnersitem1.names8}</td>
                            <td>{partnersitem1.fees8}</td>
                          </tr>
                          <tr>
                            <td>{partnersitem1.names9}</td>
                            <td>{partnersitem1.fees9}</td>
                          </tr>
                        </table>
                      </Modal>
                    </div>
                  </div>
                  <div
                    className={
                      toggleState === 3 ? "content active-content" : "content"
                    }
                  >
                    <Accordion />
                  </div>
                  <div
                    className={
                      toggleState === 4 ? "content active-content" : "content"
                    }
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <EmptyFile />
      )}
    </>
  );
};
