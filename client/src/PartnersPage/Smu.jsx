import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HeadlogoCard } from "../components/ComparePage/HeadlogoCard";
import { headlogoData } from "../components/Data/CollegeData";
import { EnquiryForm } from "../components/Common/EnquiryForm";
import Modal from "./Modal";
import Carousel from "react-multi-carousel";
import endlogo1 from "../assets/ugc.png";
import endlogo2 from "../assets/AICTE-Logo.png";
import endlogo3 from "../assets/National_Institutional_Ranking_Framework_logo.png";
import endlogo4 from "../assets/naac a+.jpg";
import headerlogo from '../assets/partner/smu.png'

import downlink from "../assets/SMUBrochure.pdf";
import downlink1 from "../assets/SMUBrochure.pdf";
import Collegedata1 from "../components/Data/CollegeData";
import { CourseCarousel } from "./CourseCarousel";
import { OnlineCoursepage } from "../components/Common/OnlineCoursepage";
import AccordionItem from "../components/Common/Accordian";
import { CollegeCarousel } from "./CollegeCarousel";
import img1 from "../assets/smu2.jpg";
import img2 from "../assets/smu1.jpg";
import img3 from "../assets/smu4.jpeg";
import img4 from "../assets/smu1.jpg";
import video1 from "../assets/smuvideo.mp4";

const slides = [img1, img2, img3, img4, video1];
export const Accordata1 = [
    {
        question: "Is Sikkim Manipal University recognized by UGC?",
        answer:
            "Sikkim Manipal University is recognized by University Grants Commission, a statutory body of the Government of India; established for the coordination, determination and maintenance of standards of university education in India. Sikkim Manipal University is included in the list of universities maintained by University Grants Commission under Section – 2(f) of the UGC Act, 1956.",
    },
    {
        question: "What is Online Learning?",
        answer:
            "Online Learning is learning that happens over the internet, using technological tools. Online Learning gives you the perks of attending the University remotely through online mode. It includes video lectures and live lectures, supplemented with reading material, presentations, case studies, assignments, assessments, and so on. Teaching-Learning process and the evaluation is carried out through Online Learning Management system.",
    },
    {
        question:
            "Why Sikkim Manipal University?",
        answer:
            "The Sikkim Manipal University (SMU) is located in Gangtok and established in accordance with the Sikkim Manipal University of Health, Medical and Technological Sciences Act, 1995 (Act No. 9 of 1995) of the Government of Sikkim. It is a unique public-private partnership (PPP) model between Sikkim and Manipal Education and Medical Group (MEMG), the first of its kind in the country. Under this agreement, the Hon’ble Governor of Sikkim is the Chancellor of SMU, while representatives of the Government of Sikkim are a part of the senior management of the University.",
    },
    {
        question: "Are the online programs approved by AICTE and UGC?",
        answer:
            "Since smu has been ranked twice in the NIRF ranking in the year 2020 and 2021, it is Entitled by the UGC to offer programs in Online mode, without prior approval of the UGC. Therefore, smu is duly Entitled by the UGC to offer programs in Online mode.",
    },
    {
        question:
            "Can I take admission if the result of my quailfying examination is awaited or I have backlog/re appear/compartment in the qualifying examination?",
        answer:
            "Applicants who are awaiting their result of qualifying exam are eligible to apply, provided they submit the result of the qualifying examination to the university either by the last date of provisional registration or at the time of admission, or by the last date as specified by the university.",
    },
    {
        question: "What if I fail to submit documents by the stipulated dates?",
        answer:
            "In case an applicant fails to submit proof of fulfilment of the prescribed eligibility criteria or any other document prescribed by the university or fails to provide original documents for verification by the stipulated date(s), he/she shall not be considered eligible for admission, and the admission, in any case, if granted due to any reason, shall be cancelled and the applicant shall have no claim, whatsoever against the university. Fee and other charges, including amount paid for provisional registration by the candidate, if any, shall stand forfeited and the candidate shall further be liable to pay the fee and other charges for the remaining/ entire duration of the program.",
    },
    {
        question: "Who should take admission in SMU Online",
        answer:
            "Anyone who is ambitious, wants to grab the opportunity that Online Learning is offering, wants access to quality University Education or wants to advance his career, should take admission in smu OL. It is suitable for students, professionals, businessmen, home makers or any other individual willing to pursue higher education which offers ample growth opportunities. Students, Professionals, Home makers or any other person who is willing to pursue higher education while continuing with their respective professions.",
    },
];

export const courseproductData = [
    {
        id: 1,
        courseimage: require("../assets/course1.jpg"),
        coursestitle: "SMU ONLINE",
        coursesname: "Online BA",
        coursesdescription: "Some text about the product..",
        coursescardbutton: "Read More",
    },
    {
        id: 2,
        courseimage: require("../assets/course2.jpg"),
        coursestitle: "SMU ONLINE",
        coursesname: "Online MA",
        coursesdescription: "Some text about the product..",
        coursescardbutton: "Read More",
    },
    {
        id: 3,
        courseimage: require("../assets/caps.jpg"),
        coursestitle: "SMU ONLINE",
        coursesname: "Online MCA",
        coursesdescription: "Some text about the product..",
        coursescardbutton: "Read More",
    },
    {
        id: 4,
        courseimage: require("../assets/course4.jpg"),
        coursestitle: "SMU ONLINE",
        coursesname: "Online B.COM",
        coursesdescription: "Some text about the product..",
        coursescardbutton: "Read More",
    },
    {
        id: 5,
        courseimage: require("../assets/course5.jpg"),
        coursestitle: "SMU ONLINE",
        coursesname: "Online M.COM",

        coursesdescription: "Some text about the product..",
        coursescardbutton: "Read More",
    },
   
];
export const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 2000, min: 1000 },
        items: 4,
        slidesToSlide: 1,
    },
    desktop: {
        breakpoint: { max: 1000, min: 800 },
        items: 3,
    },
    tablet: {
        breakpoint: { max: 800, min: 464 },
        items: 2,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
    },
};
export const Smu = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const handleItemClick = (index) => {
        setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
    };
    const [partnersitem1, setPartnersitem1] = useState(Collegedata1);
    const onButtonClick = () => {
        // using Java Script method to get PDF file
        fetch(downlink).then((response) => {
            response.blob().then((blob) => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);

                // Setting various property values
                let smulink1 = document.createElement("a");
                smulink1.href = fileURL;
                smulink1.download = "PROSPECTUS.pdf";
                smulink1.click();
            });
        });
    };
    const onButtonClick1 = () => {
        // using Java Script method to get PDF file
        fetch(downlink1).then((response) => {
            response.blob().then((blob) => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);

                // Setting various property values
                let smulink2 = document.createElement("a");
                smulink2.href = fileURL;
                smulink2.download = "SYLLABUS.rar";
                smulink2.click();
            });
        });
    };
    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [toggleState, setToggleState] = useState(1);
    const toggleTab = (index) => {
        setToggleState(index);
    };

    const courseproduct = courseproductData.map((item) => (
        <CourseCarousel key={item.id} item={item} />
    ));

    return (
        <div className="container">
            <div className="partners-header">
                <div className="partners-title">
                <div className="header-logo">
            <img src={headerlogo} alt="Header Logo" />
            <h1>SMU Online</h1>
          </div>
                    <p>Accredited with NAAC A+ grade</p>
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
                        <p
                            className="prospectusbtn"
                            onClick={onButtonClick}
                            value="download"
                        >
                            <i className="fa-solid fa-download"></i>Prospectus
                        </p>
                        <p
                            className="prospectusbtn"
                            onClick={onButtonClick1}
                            value="download"
                        >
                            <i className="fa-solid fa-book"></i>Syllabus
                        </p>
                    </div>
                    <p className="partners-ques">Not sure what you are looking for?</p>
                    <button className="connect-form">
                        <Link to="/contact">
                            <i className="fa-solid fa-arrow-right"></i>Connect Us
                        </Link>
                    </button>
                </div>
                <div className="image-container">
                    <CollegeCarousel autoSlide="false" autoSlideInterval="5000">
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
                                <h5>
                                    Sikkim Manipal University was born to with the basic objective of strengthening the close link of education to skill development and the making the youth of Sikkim educated, skilled and employable, giving them the capacity to harness diverse opportunities both within and outside Sikkim. This will also create more job opportunities for our youth, thus solving the growing unemployment in the State.
                                </h5>
                                <h5>
                                    The Sikkim Manipal University was established in 1995. It is the first government-private initiative in the region. SMU is recognized by the University Grants Commission and approved by the Government of India. It is the first ever Public Private Partnership (PPP) in the country for higher Education and Health Care services.
                                </h5>
                                <h5>
                                    Sikkim Manipal University offers quality education to the students from North and North Eastern parts of India and latest health care facilities at affordable costs to the people of Sikkim.
                                </h5>
                                <h5>
                                    Since its inception, Sikkim Manipal University has crossed several miles stones. The University is all set to expand its educational campus to new horizons highly qualified, competent and dedicated faculty members of SMU are committed to the task of ensuring that the students graduating from the University are well trained to meet the demanding challenges of their chosen profession in this competitive world. The University plays a significant role in contributing to the nation’s talent pool. Transparent procedures, merit based intake criteria and efforts to provide the best of facilities have been marked features.
                                </h5>
                                <h5>
                                    All courses run by SMU are approved by the regulatory bodies like Medical Council of India (MCI), Nursing Council of India, Indian Association of Physiotherapy, All India Council for Technical Education (AICTE) ,UGC and the Distance Education Council.
                                </h5>

                                < h3>Why Choose Sikkim Manipal University?</h3>
                                <h5>
                                    <i class="fas fa-check-square"></i>UGC-Entitled Degrees: Access UGC-entitled degrees from world-class universities accredited by NAAC, ensuring that your online degree holds the same prestige as traditional on-campus degrees, recognized by governments, corporations, and higher education institutions.
                                </h5>
                                <h5>
                                    <i class="fas fa-check-square"></i>Attractive Scholarships: Benefit from attractive scholarships tailored for defense personnel, government employees, differently-abled individuals, meritorious students, and alumni of Manipal universities.
                                </h5>
                                <h5>
                                    <i class="fas fa-check-square"></i>Placement Assistance: Enhance your employability with dedicated career and placement assistance services, including career-readiness sessions, resume building workshops, webinars by experts, and virtual placement drives.
                                </h5>
                                <h5>
                                    <i class="fas fa-check-square"></i>Industry Webinars & Simulations: Stay updated with industry trends through webinars conducted by experts and participate in hands-on workshops to gain certification in emerging technologies.
                                </h5>
                                <h5>
                                    <i class="fas fa-check-square"></i>Holistic Development: smu places a strong emphasis on holistic development, nurturing well-rounded individuals who possess not only academic prowess but also strong ethical values, leadership skills, and a sense of social responsibility.
                                </h5>
                                <h5>
                                    <i class="fas fa-check-square"></i>Global Classroom: Engage with learners from diverse backgrounds across various industries, domains, geographies, and experience levels, fostering a rich learning environment.</h5>

                                {/* <h5><i class="fas fa-check-square"></i>Holistic Development: smu places a strong emphasis on holistic development, nurturing well-rounded individuals who possess not only academic prowess but also strong ethical values, leadership skills, and a sense of social responsibility.</h5> */}
                                <OnlineCoursepage />
                                <h3>Courses wise fees 2024 updated</h3>
                                <table>
                                    <tr>
                                        <th>Courses</th>
                                        <th>Program Fee (per semester) </th>
                                        <th>Program Fee (per Year) </th>
                                        <th>Course Duration</th>
                                    </tr>
                                    <tr>
                                        <td>Online BA</td>
                                        <td>12,500</td>
                                        <td>25,000</td>
                                        
                                        <td>3 Years</td>
                                    </tr>
                                    <tr>
                                        <td>Online MA</td>
                                        <td>18,750</td>
                                        <td>37,500</td>
                                        
                                        <td>2 Years</td>
                                    </tr>
                     
                                    <tr>
                                        <td>Online MCA</td>
                                        <td>24,500</td>
                                        <td>49,000</td>
                                        
                                        <td>2 Years</td>
                                    </tr>
                                    <tr>
                                        <td>Online B.COM</td>
                                        <td>12,500</td>
                                        <td>25,000</td>
                                        
                                        <td>3 Years</td>
                                    </tr>
                                    <tr>
                                        <td>Online M.COM</td>
                                        <td>22,500</td>
                                        <td>45,000</td>
                                        
                                        <td>2 Years</td>
                                    </tr>
                                    
                                </table>
                                <p>

                                </p>
                                <h3>SPECIAL FEATURES</h3>
                                <h5>
                                    <i class="fas fa-check-square"></i>Globally recognized UGC-approved NAAC A+ accredited the online degrees offered by SMU are at par with on-campus degrees.
                                </h5>
                                <h5>
                                    <i class="fas fa-check-square"></i>It opens door to grab better professional opportunities.
                                </h5>
                                <h5>
                                    <i class="fas fa-check-square"></i>The free Coursera access and choose from over 10,000+ professional certifications and courses from leading global universities while completing your degree. Additionally, BCA and MCA learners will be given free access to Google Cloud Computing Foundations curriculum.
                                </h5>
                                <h5>
                                    <i class="fas fa-check-square"></i>Flexi-payment options allow students to pay fees in hassle-free installments. No-cost EMIs, let students learning take the spotlight without the stress of financing.
                                </h5>
                                <h5>
                                    <i class="fas fa-check-square"></i>Exclusive scholarships designed for defense personnel, government employees, differently-disabled people & meritorious students.
                                </h5>
                                <h3>Approvals</h3>
                                <div className="end-logos">
                                    <div className="approval-card">
                                        <img src={endlogo1} alt="" />
                                    </div>
                                    <div className="approval-card">
                                        <img src={endlogo2} alt="" />
                                    </div>
                                    <div className="approval-card">
                                        <img src={endlogo3} alt="" />
                                    </div>
                                    <div className="approval-card">
                                        <img src={endlogo4} alt="" />
                                    </div>

                                </div>

                                <h3>Courses</h3>

                                <Carousel responsive={responsive}>{courseproduct}</Carousel>
                            </div>

                            <div
                                className={
                                    toggleState === 2 ? "content active-content" : "content"
                                }
                            >
                                <div className="admission-container">
                                    <h3>Our Admission Process</h3>
                                    {/* <h5><i class="fas fa-check-square"></i>
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

                                        Upload all required documents and submit your application.
                                    </h5>

                                    <li>Step 3: </li>
                                    <h5>
                                        Pay the application fees.
                                    </h5>

                                    <li>Step 4: </li>
                                    <h5>

                                        An admission counselor will contact you to guide you through
                                        any additional procedures and assist you until the entire
                                        process is complete.
                                    </h5>

                                    <button className="partners-applybtn" onClick={openModal}>
                                        View Full Exam Pattern
                                    </button>
                                    <Modal isOpen={isModalOpen} onClose={closeModal}>
                                        <h2>Examination Pattern</h2>

                                        <table cellPadding={10} className="exam-pattern">
                                            <tr></tr>
                                            <tr>
                                                <td>University</td>
                                                <td>SMU</td>
                                            </tr>
                                            <tr>
                                                <td>Exam Pattern</td>
                                                <td>Online</td>
                                            </tr>
                                            <tr>
                                                <td>MCQ Questions</td>
                                                <td>40</td>
                                            </tr>
                                            <tr>
                                                <td>Mark/ Question</td>
                                                <td>1</td>
                                            </tr>
                                            <tr>
                                                <td>Subjective Questions</td>
                                                <td>4, To be attempted 3</td>
                                            </tr>
                                            <tr>
                                                <td>Projects (Last Sem)</td>
                                                <td>100</td>
                                            </tr>
                                            <tr>
                                                <td>Mark/Question</td>
                                                <td>10</td>
                                            </tr>
                                            <tr>
                                                <td>Assignment Marks</td>
                                                <td>30</td>
                                            </tr>
                                            <tr>
                                                <td>Passing Marks</td>
                                                <td>40%</td>
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
                                <div className="wrapper">
                                    <div className="acoord">
                                        <div className="container">
                                            {Accordata1.map((item, index) => (
                                                <AccordionItem
                                                    key={index}
                                                    question={item.question}
                                                    answer={item.answer}
                                                    isOpen={activeIndex === index}
                                                    onClick={() => handleItemClick(index)}
                                                />
                                            ))}
                                        </div>
                                    </div>
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
        </div>
    );
};
