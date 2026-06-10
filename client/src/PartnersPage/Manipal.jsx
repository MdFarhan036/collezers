import React, { useState } from "react";
import endlogo1 from "../assets/ugc.png";
import endlogo2 from "../assets/AICTE-Logo.png";
import { headlogoData } from "../components/Data/CollegeData";
import { Link } from "react-router-dom";
import endlogo3 from "../assets/National_Institutional_Ranking_Framework_logo.png";
import endlogo4 from "../assets/wes.png";
import endlogo5 from "../assets/naac a+.jpg";
import prospectuslink from "../assets/MUJ-Combined-Brochure.pdf";
import headerlogo from '../assets/partner/manipal-logo.png'

import syllabuslink from "../assets/MUJ-Combined-Brochure.pdf";
import Carousel from "react-multi-carousel";
import video1 from "../assets/manipalvideo.mp4";
import manipalimg1 from "../assets/manipal2.jpg";
import manipalimg2 from "../assets/manipal4.jpg";
import manipalimg3 from "../assets/manipal1.jpg";
import manipalimg4 from "../assets/manipal3.jpg";
import { OnlineCoursepage } from "../components/Common/OnlineCoursepage";
import { HeadlogoCard } from "../components/ComparePage/HeadlogoCard";
import { CourseCarousel } from "./CourseCarousel";
import Modal from "./Modal";
import { EnquiryForm } from "../components/Common/EnquiryForm";
import { CollegeCarousel } from "./CollegeCarousel";
import AccordionItem from "../components/Common/Accordian";
const slides = [manipalimg1, manipalimg2, manipalimg3, manipalimg4, video1];

export const Accordata1 = [
  {
    question: "Is Manipal University recognized by UGC?",
    answer:
      "Manipal University is recognized by University Grants Commission, a statutory body of the Government of India; established for the coordination, determination and maintenance of standards of university education in India. Manipal University is included in the list of universities maintained by University Grants Commission under Section – 2(f) of the UGC Act, 1956.",
  },
  {
    question: "How do I apply for MAHE Online programs?",
    answer:
      "After deciding upon the program of your choice, application can be submitted online at www.mahe.www.onlinemanipal.com by providing the required details. Once you provide the required details, MAHE admission counselor will reach out to you to assist with the application process. Alternatively, you can call us at +91-7330 300 600 or email info@mahe.www.onlinemanipal.com, and we will assist you with the application process. To complete the initial application process, you are required to provide your personal details, academic details, work experience details, pay an application fee of INR 1500 and upload the eligibility documents.",
  },
  {
    question: "Why should one choose MAHE online program?",
    answer:
      "MAHE is one of the top ten universities in India and has been recognized as an “Institution of Eminence” by Ministry of Education, Govt. of India. As per the UGC regulations, the universities ranked within Top 100 in National Institutional Ranking Framework (NIRF) are allowed to offer programs in online mode under “Entitled” category.",
  },
  {
    question:
      "How can I apply for more than one course?",
    answer:
      "If the courses you have opted for fall in the same group, then by all means, go ahead and state your choices in one single application form.However, if you opt for courses in different groups, then you will need to fill out separate applications.",
  },
  {
    question: "Are the online programs approved by AICTE and UGC?",
    answer:
      "Since Manipal has been ranked twice in the NIRF ranking in the year 2020 and 2021, it is Entitled by the UGC to offer programs in Online mode, without prior approval of the UGC. Therefore, Manipal is duly Entitled by the UGC to offer programs in Online mode.",
  },
  {
    question:
      "Can I avail of any scholarships for my study at MUJ?",
    answer:
      "There are a number of scholarship options for studying various programs at MUJ that you can find on the specific program page.",
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
    coursestitle: "MANIPAL ONLINE",
    coursesname: "Online BA JMC",
    coursesdescription: "Some text about the product..",
    coursescardbutton: "Read More",
  },
  {
    id: 2,
    courseimage: require("../assets/course2.jpg"),
    coursestitle: "MANIPAL ONLINE",
    coursesname: "Online BCA",
    coursesdescription: "Some text about the product..",
    coursescardbutton: "Read More",
  },
  {
    id: 3,
    courseimage: require("../assets/caps.jpg"),
    coursestitle: "MANIPAL ONLINE",
    coursesname: "Online MCA",
    coursesdescription: "Some text about the product..",
    coursescardbutton: "Read More",
  },
  {
    id: 4,
    courseimage: require("../assets/course4.jpg"),
    coursestitle: "MANIPAL ONLINE",
    coursesname: "Online MCA",
    coursesdescription: "Some text about the product..",
    coursescardbutton: "Read More",
  },
  {
    id: 5,
    courseimage: require("../assets/course5.jpg"),
    coursestitle: "MANIPAL ONLINE",
    coursesname: "Online BBA",

    coursesdescription: "Some text about the product..",
    coursescardbutton: "Read More",
  },
  {
    id: 6,
    courseimage: require("../assets/course-2.jpg"),
    coursestitle: "MANIPAL ONLINE",
    coursesname: "Online MBA",
    coursesdescription: "Some text about the product..",
    coursescardbutton: "Read More",
  },
  {
    id: 7,
    courseimage: require("../assets/course-3.jpg"),
    coursestitle: "MANIPAL ONLINE",
    coursesname: "Online B.COM",
    coursesdescription: "Some text about the product..",
    coursescardbutton: "Read More",
  },
  {
    id: 8,
    courseimage: require("../assets/course6.jpg"),
    coursestitle: "MANIPAL ONLINE",
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
    items: 2,
  },
};
export const Manipal = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleItemClick = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };
  const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch({ prospectuslink }).then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);

        // Setting various property values
        let manipalink = document.createElement("a");
        manipalink.href = fileURL;
        manipalink.download = "Prospectus.pdf";
        manipalink.click();
      });
    });
  }; const onButtonClick1 = () => {
    // using Java Script method to get PDF file
    fetch({ syllabuslink }).then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);

        // Setting various property values
        let manipallink2 = document.createElement("a");
        manipallink2.href = fileURL;
        manipallink2.download = "Syllabus.pdf";
        manipallink2.click();
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
            <h1>Manipal University Online</h1>
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
            <p className="prospectusbtn" onClick={onButtonClick}>
              <i className="fa-solid fa-download"></i>Prospectus
            </p>
            <p className="prospectusbtn" onClick={onButtonClick1}>
              <i className="fa-solid fa-book"></i>Syllabus
            </p>
          </div>
          <p className="partners-ques">Not sure what you are looking for?</p>
          <button className="connect-form">
            <Link to="/contact">
              {" "}
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
                  Manipal University Jaipur (MUJ) is a UGC-approved university
                  With a legacy of excellence in higher education, Manipal
                  University Jaipur has continually redefined the standards of
                  academic brilliance. As a NAAC A+ accredited institution,
                  Manipal University Jaipur has pioneered industry-focused
                  education, inspiring learners across various disciplines to
                  excel through a blend of robust theoretical knowledge and
                  hands-on practical experience.
                </h5>
                <h5>
                  In 2021, a new chapter unfolded for Manipal University Jaipur
                  when the University Grants Commission (UGC) granted permission
                  to offer online degree programs. The inaugural cohort
                  commenced their studies in April 2021, marking a significant
                  milestone. Online degrees from Manipal University Jaipur are
                  delivered by world-class faculty and have garnered widespread
                  popularity among both freshers and working professionals from
                  diverse regions and countries.
                </h5>
                <h5>
                  Online Manipal Jaipur, a distinguished institution offering
                  high-quality education through its online platform. Located in
                  Jaipur, Rajasthan, Online Manipal Jaipur is part of the
                  prestigious Manipal Education Group, renowned for its
                  commitment to academic excellence and innovation.
                </h5>
                <h5>
                  Online Manipal Jaipur provides a wide range of undergraduate,
                  postgraduate, and doctoral programs across various
                  disciplines, including Engineering, Management, Computer
                  Applications, Arts, Science, and more. As an online platform,
                  it caters to the diverse educational needs of students
                  worldwide, offering accessible and flexible learning
                  opportunities.
                </h5>
                <h5>
                  Recognizing the importance of flexibility in today's
                  fast-paced world, Online Manipal Jaipur ensures that its
                  online programs accommodate the busy schedules of working
                  professionals, stay-at-home parents, and learners seeking to
                  advance their education without disrupting their daily lives.
                  With 24/7 access to course materials, interactive lectures,
                  and online resources, students can pursue their studies at
                  their own pace, from any location.
                </h5>
                <h5>
                  The faculty at Online Manipal Jaipur comprises experienced
                  educators and industry experts who are dedicated to providing
                  a high-quality education that is both relevant and practical.
                  Through a blend of theoretical knowledge and hands-on learning
                  experiences, students are equipped with the skills and
                  knowledge needed to excel in their chosen field.
                </h5>
                <h5>
                  In addition to academic excellence, Online Manipal Jaipur
                  emphasizes holistic development, fostering well-rounded
                  individuals who are socially responsible and ethically sound.
                  Through extracurricular activities, virtual events, and
                  community engagement initiatives, students have the
                  opportunity to develop leadership skills, build connections,
                  and make a positive impact on society.
                </h5>
                <h5>
                  Whether students aim to advance their careers, switch
                  industries, or pursue their passion for learning, Online
                  Manipal Jaipur offers the flexibility, accessibility, and
                  support needed to achieve their goals. Join Online Manipal
                  Jaipur on a journey of discovery, growth, and transformation,
                  and unlock your full potential in the digital age.
                </h5>

                <h3>Why Choose Manipal University Jaipur?</h3>
                <h5>
                  <i class="fas fa-check-square"></i>UGC-Entitled Degrees:
                  Access UGC-entitled degrees from world-class universities
                  accredited by NAAC, ensuring that your online degree holds the
                  same prestige as traditional on-campus degrees, recognized by
                  governments, corporations, and higher education institutions.
                </h5>
                <h5>
                  <i class="fas fa-check-square"></i>Attractive Scholarships:
                  Benefit from attractive scholarships tailored for defense
                  personnel, government employees, differently-abled
                  individuals, meritorious students, and alumni of Manipal
                  universities.
                </h5>
                <h5>
                  <i class="fas fa-check-square"></i>Placement Assistance:
                  Enhance your employability with dedicated career and placement
                  assistance services, including career-readiness sessions,
                  resume building workshops, webinars by experts, and virtual
                  placement drives.
                </h5>
                <h5>
                  <i class="fas fa-check-square"></i>Prestigious Alumni Network:
                  Join a revered alumni network comprising over 150,000
                  professionals and business leaders, including luminaries such
                  as Mr. Satya Nadella, Chef Vikas Khanna, and Dr. Devi Prasad
                  Shetty
                </h5>
                <h5>
                  <i class="fas fa-check-square"></i>Industry Webinars &
                  Simulations: Stay updated with industry trends through
                  webinars conducted by experts and participate in hands-on
                  workshops to gain certification in emerging technologies.
                </h5>
                <h5>
                  <i class="fas fa-check-square"></i>Holistic Development:
                  Manipal places a strong emphasis on holistic development,
                  nurturing well-rounded individuals who possess not only
                  academic prowess but also strong ethical values, leadership
                  skills, and a sense of social responsibility.
                </h5>
                <h5>
                  <i class="fas fa-check-square"></i>Global Classroom: Engage
                  with learners from diverse backgrounds across various
                  industries, domains, geographies, and experience levels,
                  fostering a rich learning environment.
                </h5>
                <h5>
                  <i class="fas fa-check-square"></i>In-Person Campus Immersion:
                  Experience an exclusive in-person event, Ekam, to connect with
                  peers and faculty members of your online program, participate
                  in interactive sessions, and create lasting memories.
                </h5>
                {/* <h5><i class="fas fa-check-square"></i>Holistic Development: Manipal places a strong emphasis on holistic development, nurturing well-rounded individuals who possess not only academic prowess but also strong ethical values, leadership skills, and a sense of social responsibility.</h5> */}
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
                    <td>Online MA JMC</td>
                    <td>35,000</td>
                    <td>70,000</td>
                    <td>-</td>
                    <td>2 Years</td>
                  </tr>
                  <tr>
                    <td>Online BBA</td>
                    <td>22,500</td>
                    <td>45,000</td>
                    <td>-</td>
                    <td>3 Years</td>
                  </tr>
                  <tr>
                    <td>Online MBA</td>
                    <td>43,750</td>
                    <td>87,500</td>
                    <td>-</td>
                    <td>2 Years</td>
                  </tr>
                  <tr>
                    <td>Online BCA</td>
                    <td>22,500</td>
                    <td>45,000</td>
                    <td>-</td>
                    <td>3 Years</td>
                  </tr>
                  <tr>
                    <td>Online MCA</td>
                    <td>39,500</td>
                    <td>79,000</td>
                    <td>-</td>
                    <td>2 Years</td>
                  </tr>
                  <tr>
                    <td>Online B.COM</td>
                    <td>16,500</td>
                    <td>33,000</td>
                    <td>-</td>
                    <td>3 Years</td>
                  </tr>
                  <tr>
                    <td>Online M.COM</td>
                    <td>27,000</td>
                    <td>54,000</td>
                    <td>-</td>
                    <td>2 Years</td>
                  </tr>
                </table>
                Please refer to manipal website https://www.muj-onlinemanipal.com/ to get
                information about fee benefits related to Lumpsum Fee payment
                & Student Grant. The above fee is exclusive of the Initial
                Registration Fee of `500/-` (non-refundable)
                <h3>SPECIAL FEATURES</h3>
                <h5>
                  <i class="fas fa-check-square"></i>Globally recognized
                  UGC-approved NAAC A+ accredited the online degrees offered by
                  Manipal University Jaipur are at par with on-campus degrees.
                </h5>
                <h5>
                  <i class="fas fa-check-square"></i>It opens door to grab
                  better professional opportunities.
                </h5>
                <h5>
                  <i class="fas fa-check-square"></i>The free Coursera access
                  and choose from over 10,000+ professional certifications and
                  courses from leading global universities while completing your
                  degree. Additionally, BCA and MCA learners will be given free
                  access to Google Cloud Computing Foundations curriculum.
                </h5>
                <h5>
                  <i class="fas fa-check-square"></i>Flexi-payment options allow
                  students to pay fees in hassle-free installments. No-cost
                  EMIs, let students learning take the spotlight without the
                  stress of financing.
                </h5>
                <h5>
                  <i class="fas fa-check-square"></i>Exclusive scholarships
                  designed for defense personnel, government employees,
                  differently-disabled people & meritorious students.
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
                        <td>MANIPAL</td>
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
    </div>
  );
};
