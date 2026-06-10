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
import headerlogo from '../assets/partner/GLA-U-logo.jpg'

import downlink from "../assets/GLABROCHURE.pdf";
import downlink1 from "../assets/GLABROCHURE.pdf";
import Collegedata1 from "../components/Data/CollegeData";
import { CourseCarousel } from "./CourseCarousel";
import { OnlineCoursepage } from "../components/Common/OnlineCoursepage";
import AccordionItem from "../components/Common/Accordian";
import { CollegeCarousel } from "./CollegeCarousel";
import img1 from "../assets/gla1.jpg";
import img2 from "../assets/gla3.jpg";
import img3 from "../assets/gla4.jpg";
import img4 from "../assets/gla2.jpg";
import video1 from "../assets/glavideo.mp4";
const slides = [img1, img2, img3, img4, video1];
export const Accordata1 = [
  {
    question:
      "Are programs offered by GLA Univerdity Recognized/Approved by any Authorized body ",
    answer:
      "It is mandatory for all Universities/Institutions offering professional and technical programs in India to be recognized by the national level statutory bodies established for the maintenance of norms and standards. Indian degrees are recognized worldwide. GLA University is established by UGC (Govt. of India) and registered under Section 2(f) of UGC Act, 1956 and also the member of AIU (Association of Indian University)",
  },
  {
    question: "What is Online Learning?",
    answer:
      "Online Learning is learning that happens over the internet, using technological tools. Online Learning gives you the perks of attending the University remotely through online mode. It includes video lectures and live lectures, supplemented with reading material, presentations, case studies, assignments, assessments, and so on. Teaching-Learning process and the evaluation is carried out through Online Learning Management system.",
  },
  {
    question: "What Are The Courses / Programs Offered By GLA University?",
    answer:
      "GLA University offers more than 84+  Programs in Engineering, Management, Law, Bio-Technology, Basic Sciences, Pharmacy, Commerce , Arts and many more.",
  },
  {
    question: "Is There Any Provision For Concession Or Scholarships?",
    answer:
      "The University provides merit based scholarships and continuation of scholarship is as per the terms and conditions of the University i.e. regularity in attendance, progress, good character and conduct.",
  },
  {
    question: "What Are The Eligibility Requirements For Admission?",
    answer:
      "The eligibility criterion for all programs for international applicants is minimum 50% in the qualifying examination and having studied the pre-requisite subjects for admission in to the desired program.",
  },
];

export const courseproductData = [
  {
    id: 1,
    courseimage: require("../assets/course1.jpg"),
    coursestitle: "GLA ONLINE",
    coursesname: "Online BBA",
    coursesdescription: "Some text about the product..",
    coursescardbutton: "Read More",
  },
  {
    id: 2,
    courseimage: require("../assets/course2.jpg"),
    coursestitle: "GLA ONLINE",
    coursesname: "Online MBA",
    coursesdescription: "Some text about the product..",
    coursescardbutton: "Read More",
  },
  {
    id: 3,
    courseimage: require("../assets/caps.jpg"),
    coursestitle: "GLA ONLINE",
    coursesname: "Online BCA",
    coursesdescription: "Some text about the product..",
    coursescardbutton: "Read More",
  },
  {
    id: 4,
    courseimage: require("../assets/course4.jpg"),
    coursestitle: "GLA ONLINE",
    coursesname: "Online MCA",
    coursesdescription: "Some text about the product..",
    coursescardbutton: "Read More",
  },
  {
    id: 5,
    courseimage: require("../assets/course5.jpg"),
    coursestitle: "GLA ONLINE",
    coursesname: "Online B.COM",

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
export const Gla = () => {
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
        let glalink1 = document.createElement("a");
        glalink1.href = fileURL;
        glalink1.download = "PROSPECTUS.pdf";
        glalink1.click();
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
        let glalink2 = document.createElement("a");
        glalink2.href = fileURL;
        glalink2.download = "SYLLABUS.pdf";
        glalink2.click();
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
            <h1>GLA Online</h1>
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
                  GLA University, Online, a leading institution offering quality
                  education in the digital realm. Situated in Mathura, Uttar
                  Pradesh, GLA University Online is an esteemed member of the
                  GLA Group of Institutions, renowned for its commitment to
                  academic excellence and student-centered learning.
                </h5>
                <h5>
                  Established in 1998, GLA University Online provides a wide
                  array of undergraduate, postgraduate, and doctoral programs
                  across various disciplines, including Engineering, Management,
                  Pharmacy, Computer Applications, Education, Humanities, and
                  Applied Sciences. As an online platform, it caters to the
                  diverse educational needs of students worldwide, offering
                  accessible and flexible learning opportunities.
                </h5>
                <h5>
                  With a focus on holistic development, GLA University Online
                  emphasizes the importance of nurturing well-rounded
                  individuals. Through virtual extracurricular activities,
                  online events, and community engagement initiatives, students
                  have the opportunity to develop leadership skills, build
                  meaningful connections, and make a positive impact on society.
                </h5>
                <h5>
                  Whether students are looking to advance their careers, switch
                  industries, or simply pursue their passion for learning, GLA
                  University Online provides the flexibility, accessibility, and
                  support needed to achieve their goals. Join GLA University
                  Online on a journey of discovery, growth, and transformation,
                  and unlock your full potential in the digital age.
                </h5>

                <h3>Why Choose Online GLA University?</h3>
                <h5>
                  <i class="fas fa-check-square"></i>Quality Education: Online
                  GLA University offers the same high-quality education as its
                  on-campus programs. With a strong emphasis on academic
                  excellence, students can expect a rigorous curriculum designed
                  to meet industry standards and prepare them for future
                  success.
                </h5>
                <h5>
                  <i class="fas fa-check-square"></i>Flexibility: Online
                  learning at GLA University provides unmatched flexibility,
                  allowing students to study at their own pace and convenience.
                  Whether you're a working professional, a busy parent, or
                  someone with other commitments, our online programs enable you
                  to balance your studies with your personal and professional
                  life.
                </h5>
                <h5>
                  <i class="fas fa-check-square"></i>Accessibility: With Online
                  GLA University, education is accessible to learners from all
                  corners of the country. Regardless of your location, you can
                  access our world-class education without the need for
                  relocation or travel, making it a convenient option for
                  students nationwide.
                </h5>
                <h5>
                  <i class="fas fa-check-square"></i>Variety of Programs: From
                  undergraduate to postgraduate and even doctoral programs,
                  Online GLA University offers a diverse range of courses across
                  various disciplines. Whether you're interested in business,
                  engineering, healthcare, or humanities, we have a program
                  tailored to your interests and career goals.
                </h5>
                <h5>
                  <i class="fas fa-check-square"></i>Experienced Faculty: Our
                  online programs are taught by experienced faculty members who
                  are experts in their respective fields. With their guidance
                  and mentorship, students receive a comprehensive learning
                  experience that combines theoretical knowledge with practical
                  insights.
                </h5>
                <h5>
                  <i class="fas fa-check-square"></i>Interactive Learning:
                  Online GLA University fosters interactive learning through
                  engaging lectures, multimedia content, and collaborative
                  discussions. Our virtual classrooms provide a dynamic
                  environment where students can interact with faculty and
                  peers, enhancing their understanding of the subject matter.
                </h5>
                <h5>
                  <i class="fas fa-check-square"></i>Career Advancement: Whether
                  you're looking to advance in your current career or pursue new
                  opportunities, Online GLA University equips you with the
                  skills and credentials needed to succeed in the job market.
                  Our career-focused programs and industry-relevant curriculum
                  prepare you for real-world challenges and open doors to
                  exciting career prospects.
                </h5>
                <h5>
                  <i class="fas fa-check-square"></i>Support Services: From
                  academic advising to technical support, Online GLA University
                  offers a range of support services to ensure that students
                  have a smooth and seamless learning experience. Our dedicated
                  support team is always available to assist students with any
                  questions or concerns they may have.
                </h5>
                <OnlineCoursepage />
                <h3>Courses wise fees 2024 updated</h3>
                <table>
                  <tr>
                    <th>Courses</th>
                    <th>Program Fee (per semester) </th>
                    <th>Program Fee (per Year) </th>
                    <th>Examination Fee (per semester)</th>
                    <th>Course Duration</th>
                  </tr>

                  <tr>
                    <td>Online BBA</td>
                    <td>9,250</td>
                    <td>17,000</td>
                    <td>1,500</td>
                    <td>2 Years</td>
                  </tr>
                  <tr>
                    <td>Online MBA</td>
                    <td>16,500</td>
                    <td>30,000</td>
                    <td>1,500</td>
                    <td>2 Years</td>
                  </tr>
                  <tr>
                    <td>Online BCA</td>
                    <td>9,250</td>
                    <td>17,000</td>
                    <td>1,500</td>
                    <td>3 Years</td>
                  </tr>
                  <tr>
                    <td>Online MCA</td>
                    <td>14,000</td>
                    <td>25,000</td>
                    <td>1,500</td>
                    <td>2 Years</td>
                  </tr>
                  <tr>
                    <td>Online B.COM</td>
                    <td>6,500</td>
                    <td>12,000</td>
                    <td>1,500</td>
                    <td>2 Years</td>
                  </tr>
                </table>
                <p>
                  Please refer to gla website www.glaonline.com to get
                  information about fee benefits related to Lumpsum Fee payment
                  & Student Grant. The above fee is exclusive of the Initial
                  Registration Fee of `600/- (non-refundable) for Indian
                  Applicants and International Applicants from Sri Lanka,
                  Bhutan, Nepal & Bangladesh and US$ 10 for other International
                  Applicants
                </p>
                <h3>SPECIAL FEATURES</h3>
                <h5>
                  <i class="fas fa-check-square"></i>UGC recognized online
                  degree from NAAC A+ accredited university
                </h5>
                <h5>
                  <i class="fas fa-check-square"></i>Leading university
                  Professors and industry leaders to mentor you.
                </h5>
                <h5>
                  <i class="fas fa-check-square"></i>Internship /job opportunity
                  with access to job portal with 300+hiring partners.
                </h5>
                <h5>
                  <i class="fas fa-check-square"></i>Get your doubts clarified
                  from your peers Teaching Assistants quickly.
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
                  <h5>Pay the application fees.</h5>

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
                        <td>GLA</td>
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
