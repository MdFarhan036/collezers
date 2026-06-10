import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HeadlogoCard } from "../components/ComparePage/HeadlogoCard";
import { headlogoData } from "../components/Data/CollegeData";
import { EnquiryForm } from "../components/Common/EnquiryForm";
import Modal from "./Modal";
import Carousel from "react-multi-carousel";
import endlogo1 from "../assets/ugc.png";
import endlogo2 from "../assets/AICTE-Logo.png";
import endlogo3 from "../assets/Association_of_Indian_Universities_Logo.png.png";
import endlogo4 from "../assets/naac a+.jpg";
import headerlogo from '../assets/partner/vgu_logo.jpg'

import downlink from "../assets/VGUProspectus.pdf";
import downlink1 from "../assets/VGUProspectus.pdf";
import Collegedata1 from "../components/Data/CollegeData";
import { CourseCarousel } from "./CourseCarousel";
import { OnlineCoursepage } from "../components/Common/OnlineCoursepage";
import AccordionItem from "../components/Common/Accordian";
import { CollegeCarousel } from "./CollegeCarousel";
import img1 from "../assets/vgu1.jpeg";
import img2 from "../assets/vgu2.jpeg";
import img3 from "../assets/vgu3.jpeg";
import img4 from "../assets/vgu4.jpeg";
import video1 from "../assets/vguvideo.mp4";

const slides = [img1, img2, img3, img4, video1];
export const Accordata1 = [
    {
        question: "Is Lovely Professional University recognized by UGC?",
        answer:
            "Lovely Professional University is recognized by University Grants Commission, a statutory body of the Government of India; established for the coordination, determination and maintenance of standards of university education in India. Lovely Professional University is included in the list of universities maintained by University Grants Commission under Section – 2(f) of the UGC Act, 1956.",
    },
    {
        question: "What is Online Learning?",
        answer:
            "Online Learning is learning that happens over the internet, using technological tools. Online Learning gives you the perks of attending the University remotely through online mode. It includes video lectures and live lectures, supplemented with reading material, presentations, case studies, assignments, assessments, and so on. Teaching-Learning process and the evaluation is carried out through Online Learning Management system.",
    },
    {
        question:
            "Will my qualification acquired through online mode be valued? Will it make me eligible for jobs and higher studies?",
        answer:
            "Yes, University Degree in Online mode is treated at par with regular mode Degree. You will be eligible for State and Central Government jobs, Private jobs, Higher Education like Ph.D. Education or jobs abroad.",
    },
    {
        question: "Is Vivekananda Global University a member of the Association of Indian Universities (AIU)?",
        answer:
            "Yes, Vivekananda Global University is a member of the AIU.",
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

];

export const courseproductData = [
    {
        id: 1,
        courseimage: require("../assets/course1.jpg"),
        coursestitle: "vgu ONLINE",
        coursesname: "Online BA",
        coursesdescription: "Some text about the product..",
        coursescardbutton: "Read More",
    },
    {
        id: 2,
        courseimage: require("../assets/course2.jpg"),
        coursestitle: "vgu ONLINE",
        coursesname: "Online MA",
        coursesdescription: "Some text about the product..",
        coursescardbutton: "Read More",
    },
    {
        id: 3,
        courseimage: require("../assets/caps.jpg"),
        coursestitle: "VGU ONLINE",
        coursesname: "Online BBA",
        coursesdescription: "Some text about the product..",
        coursescardbutton: "Read More",
    },
    {
        id: 4,
        courseimage: require("../assets/course4.jpg"),
        coursestitle: "VGU ONLINE",
        coursesname: "Online MBA",
        coursesdescription: "Some text about the product..",
        coursescardbutton: "Read More",
    },
    {
        id: 5,
        courseimage: require("../assets/course5.jpg"),
        coursestitle: "VGU ONLINE",
        coursesname: "Online BCA",

        coursesdescription: "Some text about the product..",
        coursescardbutton: "Read More",
    },
    {
        id: 6,
        courseimage: require("../assets/course6.jpg"),
        coursestitle: "VGU ONLINE",
        coursesname: "Online MCA",
        coursesdescription: "Some text about the product..",
        coursescardbutton: "Read More",
    },
    {
        id: 7,
        courseimage: require("../assets/course-2.jpg"),
        coursestitle: "VGU ONLINE",
        coursesname: "Online MSC",
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
export const Vgu = () => {
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
                let vgulink1 = document.createElement("a");
                vgulink1.href = fileURL;
                vgulink1.download = "PROSPECTUS.pdf";
                vgulink1.click();
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
                let vgulink2 = document.createElement("a");
                vgulink2.href = fileURL;
                vgulink2.download = "SYLLABUS.rar";
                vgulink2.click();
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
            <h1>VGU Online</h1>
          </div>
                    <p>Accredited with NAAC A++ grade</p>
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
                                    Online VIVEKANANDA GLOBAL University, Jaipur, a premier institution committed to providing quality education through digital platforms. Located in the vibrant city of Jaipur, Rajasthan, VGU University has established itself as a center of academic excellence and innovation. With Online VGU University, the institution extends its mission of accessible and flexible education to learners worldwide.
                                </h5>
                                <h5>
                                    Online VGU University offers a diverse range of undergraduate, and postgraduate programmes. Through online platform, students have access to the same rigorous curriculum, esteemed faculty members, and modern teaching methodologies as their on-campus counterparts.
                                </h5>
                                <h5>
                                    Flexibility is a key advantage of Online VGU University, enabling students to pursue their studies at their own pace and convenience. Whether you're a working professional, a busy parent, or someone with other commitments, our online programs empower you to balance your education with your personal and professional life.
                                </h5>
                                <h5>
                                    Accessibility is another hallmark of Online VGU University. Our online platform transcends geographical boundaries, allowing learners from diverse backgrounds and locations to access quality education. Regardless of where you are, you can embark on your academic journey with VGU University from the comfort of your own home.
                                </h5>
                                <h5>
                                    At Online VGU University, students benefit from interactive learning experiences facilitated by engaging lectures, multimedia content, and collaborative discussions. Our virtual classrooms provide a dynamic environment where students can interact with faculty members and peers, fostering a rich learning experience.
                                </h5>
                                <h5>
                                    We understand that support is essential for success in online learning. That's why Online VGU University offers comprehensive support services, including academic guidance, technical assistance, and counseling. Our dedicated team is committed to ensuring that students have a seamless and enriching learning experience.
                                </h5>
                                <h5>
                                    By choosing Online VGU University, students gain access to a future-ready education that equips them with the skills and knowledge needed to thrive in today's rapidly evolving world. With our emphasis on innovation, industry relevance, and holistic development, Online VGU University empowers learners to achieve their academic and professional aspirations.
                                </h5>
                                <h5>
                                    Join us at Online VGU University and embark on a transformative educational journey that will shape your future and open doors to endless opportunities for growth and success.</h5>

                                <h3>Why Choose Vivekananda Global University?</h3>
                                <h5>
                                    <i class="fas fa-check-square"></i>High-quality Education And Research: As a student of VGU, you’ll have an excellent learning eperience. VGU offers quality higher education qualifications that are respected by employers and academics worldwide. Quality research underlines an innovative learning and teaching environment, with the faculty leading from the front in terms of internationally acclaimed research. Moreover, such cutting edge infrastructure that drives the research culture is available at few other places in the country.
                                </h5>
                                <h5>
                                    <i class="fas fa-check-square"></i>A Strong Focus On Graduate Employability: VGU has a concrete relationship with some of the world’s leading companies. More than 130 companies, including the likes of Amazon, Wipro, JP Morgan Chase, Dell, Hewlett-Packard (hp), Accenture, Infosys, Intel, Samsung, Mahindra, Bosch, TCS and so forth, hire from VGU every year. All recruiters so far have been very happy with the attitude and skills of students, which can be partly credited to the teaching faculty, partly to the highly active innovations and incubation hub, which gives a platform for students to play around with ideas.
                                </h5>
                                <h5>
                                    <i class="fas fa-check-square"></i>A Wide Range of Extracurricular Activities: Students of VGU stand head and shoulders above their peers because of the campus life that grooms them, improves soft skills and instills a sense of social responsibility. A highly active chapter of IEEE raises the caliber of students, strengthens ambition, explores managerial skills, nurtures technical interests, accelerates career goals and contributes productive and socially committed engineers to the society. The ISTE chapter of VGU is a vibrant body that organizes fresher’s orientation programs, industrial visits, career guidance courses, mock tests of CAT, GATE etc. The Cultural and Theatre Association of VGU works with the mission to promote cultural, educational and arts based activities and to develop skills and abilities in the fields of music, dance and theatre.
                                </h5>
                                <h5>
                                    <i class="fas fa-check-square"></i>An International Outlook and Community: VGU is proud of its international outlook and the variety of nationalities that can be found on the campus, including academic staff from across the globe. As an international student, you will be a valued member of our university community and you will find outstanding support.
                                </h5>
                                <h5>
                                    <i class="fas fa-check-square"></i>Stunning Surroundings and Historic Sites: The awe-inspiring natural landscapes of Rajasthan makes the student experience very special. Historic forts, breath taking palaces and their architecture, local crafts like gem cutting, the Old City's Jewel Bazaar and the never ending festivals make the VGU student experience all the more special.
                                </h5>
                                <h5>
                                    <i class="fas fa-check-square"></i>Holistic Development: SGVU places a strong emphasis on holistic development, nurturing well-rounded individuals who possess not only academic prowess but also strong ethical values, leadership skills, and a sense of social responsibility.
                                </h5>
                                <h5>
                                    <i class="fas fa-check-square"></i>Global Classroom: Engage with learners from diverse backgrounds across various industries, domains, geographies, and experience levels, fostering a rich learning environment.
                                </h5>
                                <h5>
                                    <i class="fas fa-check-square"></i>In-Person Campus Immersion: Experience an exclusive in-person event, Ekam, to connect with peers and faculty members of your online program, participate in interactive sessions, and create lasting memories.
                                </h5>
                                {/* <h5><i class="fas fa-check-square"></i>Holistic Development: vgu places a strong emphasis on holistic development, nurturing well-rounded individuals who possess not only academic prowess but also strong ethical values, leadership skills, and a sense of social responsibility.</h5> */}
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
                                        <td>10,000</td>
                                        <td>20,000</td>

                                        <td>3 Years</td>
                                    </tr>
                                    <tr>
                                        <td>Online MA</td>
                                        <td>16,000</td>
                                        <td>32,000</td>

                                        <td>2 Years</td>
                                    </tr>
                                    <tr>
                                        <td>Online BBA</td>
                                        <td>19,000</td>
                                        <td>38,000</td>

                                        <td>3 Years</td>
                                    </tr>
                                    <tr>
                                        <td>Online MBA</td>
                                        <td>32,500</td>
                                        <td>65,000</td>

                                        <td>2 Years</td>
                                    </tr>
                                    <tr>
                                        <td>Online BCA</td>
                                        <td>19,000</td>
                                        <td>38,000</td>

                                        <td>3 Years</td>
                                    </tr>
                                    <tr>
                                        <td>Online MCA</td>
                                        <td>32,500</td>
                                        <td>65,000</td>

                                        <td>2 Years</td>
                                    </tr>

                                    <tr>
                                        <td>Online MSC</td>
                                        <td>16,000</td>
                                        <td>32,000</td>

                                        <td>2 Years</td>
                                    </tr>
                                </table>
                                <p>
                                    The above fee is exclusive of the Initial
                                    Registration Fee of `1000/- (non-refundable)
                                </p>
                                <h3>SPECIAL FEATURES</h3>
                                <h5>
                                    <i class="fas fa-check-square"></i>Globally recognized
                                    UGC-approved NAAC A+ accredited the online degrees offered by
                                    lovely professional university
                                </h5>
                                <h5>
                                    <i class="fas fa-check-square"></i>Flexi-payment options allow
                                    students to pay fees in hassle-free installments. No-cost
                                    EMIs, let students learning take the spotlight without the
                                    stress of financing.
                                </h5>
                                <h5>
                                    <i class="fas fa-check-square"></i>It opens door to grab
                                    better professional opportunities.
                                </h5>
                                <h5>
                                    <i class="fas fa-check-square"></i>The shortcomings of
                                    physical distances by providing 24X7 accessibility through its
                                    various useful features.
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
                                                <td>VGU</td>
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
        </div >
  
            );
};
