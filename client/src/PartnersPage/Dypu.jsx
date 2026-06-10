import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HeadlogoCard } from "../components/ComparePage/HeadlogoCard";
import { headlogoData } from "../components/Data/CollegeData";
import { EnquiryForm } from "../components/Common/EnquiryForm";
import Modal from "./Modal";
import headerlogo from '../assets/partner/dypu.png'
import Carousel from "react-multi-carousel";
import endlogo1 from "../assets/partner/ugcdeb.webp";
import endlogo2 from "../assets/AICTE-Logo.png";
import endlogo3 from "../assets/Association_of_Indian_Universities_Logo.png.png";
import endlogo4 from "../assets/National_Institutional_Ranking_Framework_logo.png";
import endlogo5 from "../assets/wes.png";
import endlogo6 from "../assets/partner/naac a++.png";
import endlogo7 from "../assets/ISO-Logo.png";
import downlink from "../assets/DPUprospectus.pdf";
import downlink1 from "../assets/dypatilsyllabus.rar";
import Collegedata1 from "../components/Data/CollegeData";
import { CourseCarousel } from "./CourseCarousel";
import { OnlineCoursepage } from "../components/Common/OnlineCoursepage";
import AccordionItem from "../components/Common/Accordian";
import { CollegeCarousel } from "./CollegeCarousel";
import img1 from "../assets/dypatil1.jpeg";
import img2 from "../assets/dypatil2.jpeg";
import img3 from "../assets/dyoatil3.jpeg";
import img4 from "../assets/dypatil4.jpeg";
import video1 from "../assets/dypatilvideo.mp4";
const slides = [img1, img2, img3, img4, video1];
export const Accordata1 = [
  {
    question: "Is Dy Patil University recognized by UGC?",
    answer:
      "Dy Patil University is recognized by University Grants Commission, a statutory body of the Government of India; established for the coordination, determination and maintenance of standards of university education in India. Dy Patil University is included in the list of universities maintained by University Grants Commission under Section – 2(f) of the UGC Act, 1956.",
  },
  {
    question: "What is Online Learning?",
    answer:
      "Online Learning is learning that happens over the internet, using technological tools. Online Learning gives you the perks of attending the University remotely through online mode. It includes video lectures and live lectures, supplemented with reading material, presentations, case studies, assignments, assessments, and so on. Teaching-Learning process and the evaluation is carried out through Online Learning Management system.",
  },
  {
    question:
      "Why should one choose Dr. D. Y. Patil Vidyapeeth, Pune?",
    answer:
      "Dr. D. Y. Patil Vidyapeeth, Pune (DPU) is a Category-I Deemed to be university and has been providing quality education since last 14 years. DPU had been re-accredited by NAAC with a CGPA of 3.64 on a four point scale at ‘A++’ grade and is ranked as one of the top 50 Universities across India by NIRF",
  },
  {
    question: "Is the Online MBA degree recognized by statutory bodies?",
    answer:
      "All programmes are approved and recognized by University Grants Commission UGC, DEB & AICTE.",
  },
  {
    question:
      "How do I apply for DPU COL - Online programmes?",
    answer:
      "You can apply for DPU COL - Online programmes through the following link:  https://idladmissions.dpu.edu.in/Login.aspx",
  },
  {
    question: "Is the Online degree globally accepted?",
    answer:
      "Yes, DPU Online degree is globally recognized. It is valid for points-based visa evaluation as well.",
  },
  {
    question: "Will there be LIVE lectures conducted?",
    answer:
      "Learners are able to attend a live online classroom and interact with an expert faculty via internet. Learners can ask questions, have interaction and even replay an archived lecture.",
  },
];

export const courseproductData = [
  {
    id: 1,
    courseimage: require("../assets/course1.jpg"),
    coursestitle: "Dy Patil ONLINE",
    coursesname: "Online BBA",
    coursesdescription: "Some text about the product..",
    coursescardbutton: "Read More",
  },
  {
    id: 2,
    courseimage: require("../assets/course2.jpg"),
    coursestitle: "Dy Patil ONLINE",
    coursesname: "Online MBA",
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
export const Dypu = () => {
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
        let dypulink1 = document.createElement("a");
        dypulink1.href = fileURL;
        dypulink1.download = "PROSPECTUS.pdf";
        dypulink1.click();
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
        let dypulink2 = document.createElement("a");
        dypulink2.href = fileURL;
        dypulink2.download = "SYLLABUS.rar";
        dypulink2.click();
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
            <h1>Dy Patil Online</h1>
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
                  DY Patil University Online, a prestigious institution offering quality education through its online platform. Situated in Pune, Maharashtra, DY Patil University Online is part of the esteemed DY Patil Group, known for its commitment to academic excellence and innovation.
                </h5>
                <h5>
                  As an online platform, it caters to the educational needs of students worldwide, offering accessible and flexible learning opportunities.
                </h5>
                <h5>
                  Recognizing the importance of flexibility in today's fast-paced world, DY Patil University Online ensures that its programs accommodate the busy schedules of working professionals, stay-at-home parents, and learners seeking to advance their education without disrupting their daily lives. With 24/7 access to course materials, interactive lectures, and online resources, students can pursue their studies at their own pace, from any location.
                </h5>
                <h5>
                  The faculty at DY Patil University Online comprises experienced educators and industry experts who are dedicated to providing a high-quality education that is both relevant and practical. Through a blend of theoretical knowledge and hands-on learning experiences, students are equipped with the skills and knowledge needed to excel in their chosen field.
                </h5>
                <h5>
                  In addition to academic excellence, DY Patil University Online emphasizes holistic development, fostering well-rounded individuals who are socially responsible and ethically sound. Through extracurricular activities, virtual events, and community engagement initiatives, students have the opportunity to develop leadership skills, build connections, and make a positive impact on society.
                </h5>
                <h5>
                  Whether students aim to advance their careers, switch industries, or pursue their passion for learning, DY Patil University Online offers the flexibility, accessibility, and support needed to achieve their goals. Join DY Patil University Online on a journey of discovery, growth, and transformation, and unlock your full potential in the digital age.
                </h5>


                <h3>Why Choose Dy Patil University (DyPU)?</h3>
                <h5>
                  <i class="fas fa-check-square"></i>Excellence in Education: DyPU is renowned for its commitment to academic excellence. With a diverse range of programs and a faculty comprising experienced educators and industry experts, DyPU provides students with a world-class learning experience that prepares them for success in their chosen fields.
                </h5>
                <h5>
                  <i class="fas fa-check-square"></i>State-of-the-Art Infrastructure: The university boasts modern infrastructure and facilities that create an ideal environment for learning and growth. From well-equipped classrooms and laboratories to sports facilities and student accommodation, DyPU ensures that students have access to everything they need to excel academically and personally.
                </h5>
                <h5>
                  <i class="fas fa-check-square"></i>Global Exposure: DyPU offers various international collaborations, exchange programs, and study abroad opportunities, providing students with global exposure and perspectives. These initiatives help students broaden their horizons, enhance their intercultural competencies, and prepare them for success in a globalized world.
                </h5>
                <h5>
                  <i class="fas fa-check-square"></i>Industry Partnerships and Placements: DyPU has strong ties with leading companies and organizations, facilitating internships, placements, and industry collaborations for students. The university's robust placement cell works tirelessly to connect students with job opportunities and prepare them for the competitive job market.
                </h5>
                <h5>
                  <i class="fas fa-check-square"></i>Innovation and Research: DyPU encourages innovation and research among its students and faculty members. The university provides ample opportunities for research projects, collaborations, and publications, allowing students to explore their interests and contribute to the advancement of knowledge.
                </h5>
                <h5>
                  <i class="fas fa-check-square"></i>Holistic Development: DyPU places a strong emphasis on holistic development, nurturing well-rounded individuals who possess not only academic prowess but also strong ethical values, leadership skills, and a sense of social responsibility.
                </h5>
                <h5>
                  <i class="fas fa-check-square"></i>Entrepreneurship Development: DyPU fosters an entrepreneurial mindset among its students, providing support and resources for aspiring entrepreneurs to turn their ideas into successful ventures. The university's entrepreneurship cell organizes workshops, seminars, and mentorship programs to help students develop their entrepreneurial skills and launch their own businesses.
                </h5>
                <h5>
                  <i class="fas fa-check-square"></i>Student-Centric Approach: Above all, DyPU is committed to the success and well-being of its students. The university adopts a student-centric approach, prioritizing their needs, aspirations, and overall growth and development.
                </h5>
                {/* <h5><i class="fas fa-check-square"></i>Holistic Development: Dy Patil places a strong emphasis on holistic development, nurturing well-rounded individuals who possess not only academic prowess but also strong ethical values, leadership skills, and a sense of social responsibility.</h5> */}
                <OnlineCoursepage />
                <h3>Courses wise fees 2024 updated</h3>
                <table>

                  <tr>
                    <td>Online BBA</td>
                    <td>25,000</td>
                    <td>50,000</td>

                    <td>3 Years</td>
                  </tr>
                  <tr>
                    <td>Online MBA</td>
                    <td>50,000</td>
                    <td>1,00,000</td>

                    <td>2 Years</td>
                  </tr>

                </table>

                <h3>SPECIAL FEATURES</h3>
                <h5>
                  <i class="fas fa-check-square"></i>COMFORT LEARNING
                </h5>
                <h5>
                  <i class="fas fa-check-square"></i>Pursue UGC & AICTE Approved
                </h5>
                <h5>
                  <i class="fas fa-check-square"></i>Online Degree Programme
                </h5>
                <h5>
                  <i class="fas fa-check-square"></i>100% Placement Assistance
                </h5>
                <h5>
                  <i class="fas fa-check-square"></i>15 In-Demand Specializations
                </h5>
                <h5>
                  <i class="fas fa-check-square"></i>Customized Curriculum
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
                        <td>Dy Patil</td>
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

