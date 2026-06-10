import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HeadlogoCard } from "../components/ComparePage/HeadlogoCard";
import { headlogoData } from "../components/Data/CollegeData";
import { EnquiryForm } from "../components/Common/EnquiryForm";
import Modal from "./Modal";
import headerlogo from '../assets/partner/jecrc--university1.png'

import Carousel from "react-multi-carousel";
import endlogo1 from "../assets/ugc.png";
import endlogo2 from "../assets/AICTE-Logo.png";
import endlogo3 from "../assets/Association_of_Indian_Universities_Logo.png.png";
import endlogo4 from "../assets/National_Institutional_Ranking_Framework_logo.png";
import endlogo5 from "../assets/wes.png";
import endlogo6 from "../assets/partner/naac a++.png";
import endlogo7 from "../assets/partner/sacs-short-logo.jpg";
import downlink from "../assets/JU-InformationBrochure.pdf";
import downlink1 from "../assets/LPUsyllabus.rar";
import Collegedata1 from "../components/Data/CollegeData";
import { CourseCarousel } from "./CourseCarousel";
import { OnlineCoursepage } from "../components/Common/OnlineCoursepage";
import AccordionItem from "../components/Common/Accordian";
import { CollegeCarousel } from "./CollegeCarousel";
import img1 from "../assets/lpu1.jpg";
import img2 from "../assets/lpu2.jpg";
import img3 from "../assets/lpu3.jpg";
import img4 from "../assets/lpu4.jpg";
import video1 from "../assets/lpuvideo.mp4";

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
        question: "Are the online programs approved by AICTE and UGC?",
        answer:
            "Since LPU has been ranked twice in the NIRF ranking in the year 2020 and 2021, it is Entitled by the UGC to offer programs in Online mode, without prior approval of the UGC. Therefore, LPU is duly Entitled by the UGC to offer programs in Online mode.",
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
        question: "Who should take admission in LPU OL",
        answer:
            "Anyone who is ambitious, wants to grab the opportunity that Online Learning is offering, wants access to quality University Education or wants to advance his career, should take admission in LPU OL. It is suitable for students, professionals, businessmen, home makers or any other individual willing to pursue higher education which offers ample growth opportunities. Students, Professionals, Home makers or any other person who is willing to pursue higher education while continuing with their respective professions.",
    },
];

export const courseproductData = [
    {
        id: 1,
        courseimage: require("../assets/course1.jpg"),
        coursestitle: "LPU ONLINE",
        coursesname: "Online BA",
        coursesdescription: "Some text about the product..",
        coursescardbutton: "Read More",
    },
    {
        id: 2,
        courseimage: require("../assets/course2.jpg"),
        coursestitle: "LPU ONLINE",
        coursesname: "Online MA",
        coursesdescription: "Some text about the product..",
        coursescardbutton: "Read More",
    },
    {
        id: 3,
        courseimage: require("../assets/caps.jpg"),
        coursestitle: "LPU ONLINE",
        coursesname: "Online BCA",
        coursesdescription: "Some text about the product..",
        coursescardbutton: "Read More",
    },
    {
        id: 4,
        courseimage: require("../assets/course4.jpg"),
        coursestitle: "LPU ONLINE",
        coursesname: "Online MCA",
        coursesdescription: "Some text about the product..",
        coursescardbutton: "Read More",
    },
    {
        id: 5,
        courseimage: require("../assets/course5.jpg"),
        coursestitle: "LPU ONLINE",
        coursesname: "Online MBA",

        coursesdescription: "Some text about the product..",
        coursescardbutton: "Read More",
    },
    {
        id: 6,
        courseimage: require("../assets/course6.jpg"),
        coursestitle: "LPU ONLINE",
        coursesname: "Online M.COM",
        coursesdescription: "Some text about the product..",
        coursescardbutton: "Read More",
    },
    {
        id: 7,
        courseimage: require("../assets/course-2.jpg"),
        coursestitle: "LPU ONLINE",
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
        items: 2,
    },
};
export const Jecrc = () => {
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
                let lpulink1 = document.createElement("a");
                lpulink1.href = fileURL;
                lpulink1.download = "PROSPECTUS.pdf";
                lpulink1.click();
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
                let lpulink2 = document.createElement("a");
                lpulink2.href = fileURL;
                lpulink2.download = "SYLLABUS.rar";
                lpulink2.click();
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
                        <h1>LPU Online</h1>
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
                                    JECRC University – Driven by a Culture of Excellence, Research & Innovation.
                                </h5>
                                <h5>
                                    JECRC University has its campus in Jaipur the capital city of Rajasthan and the famous tourist and business city in north-western India.
                                </h5>
                                <h5>
                                    The 32-acre JU campus combines unique classical architecture and thoughtful layout and landscaping to create a perfect learning ecosystem. The campus is located around the prime industrial and institutional hub of Jaipur and is well connected with all parts of the city.

                                </h5>
                                <h5>

                                    JECRC University is driven by the spirit of innovation-led research. This is spelt out in infrastructure as well as practices. The multifaceted research encompasses subject-specific exploration as well as the contexts of the business environment in which our students will operate and perform. JECRC is known for a strong research culture and close industry linkages.
                                </h5>
                                <h5>
                                    In order to empower the students with the latest & prevailing technological skills, we have collaborated with industry leaders like Google Cloud, Microsoft, Amazon Web Services, Hewlett Packard Enterprise, Adobe, Tech Mahindra, TCS, IBM, Kalvium, Collegedunia, Cisco, Salesforce, Automation Anywhere, UiPath, Alibaba, EC Council, DXC Technology, International Skill Development Corporation (ISDC), Xebia, Samatrix, Sunstone Eduversity, ICT Academy, Bajaj Finserv, ASSOCHAM, Manipal Hospital, Narayana Hrudayalaya Hospital, and NASSCOM etc. Through these alliances, we could not only get the industry experts on board, which is otherwise difficult to deploy for the education ecosystems, but also attained augmented innovation through knowledge exchange.
                                </h5>
                                <h5>
                                    JU aims at creating valuable resources for industry and society through its interventions in creation of research and innovative culture, academic and professional enhancement and cultural enrichment.
                                </h5>
                                <h5>
                                    JU Edge:

                                    <p>
                                        Academic integrity and accountability
                                    </p>
                                    <p>
                                        Respect and tolerance for the views of every individual
                                    </p>
                                    <p>
                                        Attention to issues of national relevance as well as of global concern

                                    </p>
                                    <p>
                                        Breadth of understanding, including knowledge of the human sciences
                                    </p>
                                    <p>
                                        An unfettered spirit of exploration, rationality and enterprise
                                    </p>
                                    <p>
                                        Strong research orientation and culture based foundation
                                    </p>
                                    <p>
                                        Sustainable development and responsible education
                                    </p>
                                    <p>
                                        Internationally accepted pedagogy
                                    </p>
                                </h5>


                                <h3>Why Choose Lovely Professional University?</h3>
                                <h5>
                                    <i class="fas fa-check-square"></i>Academic Excellence: JECRC is known for its strong academic programs and faculty expertise. It offers a wide range of courses in engineering, management, applied sciences, and more, ensuring you have diverse options to pursue your interests.
                                </h5>
                                <h5>
                                    <i class="fas fa-check-square"></i>Infrastructure: The college provides modern infrastructure and facilities, including well-equipped laboratories, libraries, computer centers, and sports amenities, which create a conducive environment for learning and holistic development.
                                </h5>
                                <h5>
                                    <i class="fas fa-check-square"></i>Industry Connections: JECRC often fosters strong ties with industries through collaborations, internships, and guest lectures. This can provide valuable exposure to real-world challenges and opportunities, enhancing your practical knowledge and employability.
                                </h5>
                                <h5>
                                    <i class="fas fa-check-square"></i>Placements and Career Support: The college typically has a robust placement cell dedicated to assisting students in securing internships and job placements. They may offer career counseling, resume workshops, and networking opportunities to help students transition smoothly into the workforce.
                                </h5>
                                <h5>
                                    <i class="fas fa-check-square"></i>Research Opportunities: If you're inclined towards research, JECRC may offer opportunities to engage in cutting-edge research projects under the guidance of experienced faculty members. This can be particularly beneficial if you plan to pursue higher studies or a career in research and development.
                                </h5>
                                <h5>
                                    <i class="fas fa-check-square"></i>Student Life: Apart from academics, JECRC often promotes a vibrant campus life with various extracurricular activities, clubs, and cultural events. This can help you develop soft skills, build friendships, and create lasting memories during your college years.
                                </h5>
                                <h5>
                                    <i class="fas fa-check-square"></i>Location: The college's location might be advantageous depending on your preferences. Whether it's situated in a bustling city with ample job opportunities or in a serene environment conducive to focused studying, the location can play a significant role in your overall college experience.
                                </h5>

                                {/* <h5><i class="fas fa-check-square"></i>Holistic Development: LPU places a strong emphasis on holistic development, nurturing well-rounded individuals who possess not only academic prowess but also strong ethical values, leadership skills, and a sense of social responsibility.</h5> */}
                                <OnlineCoursepage />
                                {/* <h3>Courses wise fees 2024 updated</h3>
                                <table>
                                    <tr>
                                        <th>Courses</th>
                                        <th>Program Fee (per semester) </th>
                                        <th>Program Fee (per Year) </th>
                                        <th>Examination Fee (per semester)</th>
                                        <th>Course Duration</th>
                                    </tr>
                                    <tr>
                                        <td>Online BA</td>
                                        <td>18,000</td>
                                        <td>36,000</td>
                                        <td>2,000</td>
                                        <td>3 Years</td>
                                    </tr>
                                    <tr>
                                        <td>Online MA</td>
                                        <td>18,000</td>
                                        <td>36,000</td>
                                        <td>2,000</td>
                                        <td>2 Years</td>
                                    </tr>
                                    <tr>
                                        <td>Online MBA</td>
                                        <td>43,000</td>
                                        <td>86,000</td>
                                        <td>2,000</td>
                                        <td>2 Years</td>
                                    </tr>
                                    <tr>
                                        <td>Online BCA</td>
                                        <td>28,000</td>
                                        <td>56,000</td>
                                        <td>2,000</td>
                                        <td>3 Years</td>
                                    </tr>
                                    <tr>
                                        <td>Online MCA</td>
                                        <td>33,000</td>
                                        <td>66,000</td>
                                        <td>2,000</td>
                                        <td>2 Years</td>
                                    </tr>
                                    <tr>
                                        <td>Online M.COM</td>
                                        <td>23,000</td>
                                        <td>46,000</td>
                                        <td>2,000</td>
                                        <td>2 Years</td>
                                    </tr>
                                    <tr>
                                        <td>Online MSC</td>
                                        <td>18,000</td>
                                        <td>36,000</td>
                                        <td>2,000</td>
                                        <td>2 Years</td>
                                    </tr>
                                </table>
                                <p>
                                    Please refer to lpu website www.lpuonline.com to get
                                    information about fee benefits related to Lumpsum Fee payment
                                    & Student Grant. The above fee is exclusive of the Initial
                                    Registration Fee of `600/- (non-refundable) for Indian
                                    Applicants and International Applicants from Sri Lanka,
                                    Bhutan, Nepal & Bangladesh and US$ 10 for other International
                                    Applicants
                                </p> */}
                                <h3>SPECIAL FEATURES</h3>
                                <h5>
                                    <i class="fas fa-check-square"></i>Multidisciplinary Approach: JECRC University often emphasizes a multidisciplinary approach to education, offering a wide range of programs across various disciplines such as engineering, management, law, design, humanities, and more. This allows students to explore diverse fields and customize their learning paths according to their interests and career aspirations.
                                </h5>
                                <h5>
                                    <i class="fas fa-check-square"></i>Industry Integration: The university often focuses on bridging the gap between academia and industry by fostering strong collaborations with leading companies and organizations. This can include industry-sponsored projects, internships, guest lectures by industry experts, and campus recruitment drives, ensuring that students gain practical exposure and relevant skills sought after by employers.
                                </h5>
                                <h5>
                                    <i class="fas fa-check-square"></i>Innovative Teaching Methods: JECRC University may employ innovative teaching methods such as project-based learning, case studies, workshops, seminars, and experiential learning activities to enhance the learning experience and foster critical thinking, problem-solving, and creativity among students.
                                </h5>
                                <h5>
                                    <i class="fas fa-check-square"></i>Research and Innovation: The university often encourages research and innovation through dedicated research centers, laboratories, and funding opportunities. Students and faculty members may engage in collaborative research projects, publish papers in reputed journals, and participate in conferences, thereby contributing to the advancement of knowledge and technology.
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
                                    <div className="approval-card">
                                        <img src={endlogo5} alt="" />
                                    </div>
                                    <div className="approval-card">
                                        <img src={endlogo6} alt="" />
                                    </div>
                                    <div className="approval-card">
                                        <img src={endlogo7} alt="" />
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
                                                <td>LPU</td>
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
        </div >
    );
};
