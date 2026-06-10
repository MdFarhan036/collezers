import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HeadlogoCard } from "../components/ComparePage/HeadlogoCard";
import { headlogoData } from "../components/Data/CollegeData";
import { EnquiryForm } from "../components/Common/EnquiryForm";
import Modal from "./Modal";
import headerlogo from '../assets/partner/lpu-logo.png'
import Carousel from "react-multi-carousel";
import endlogo1 from "../assets/ugc.png";
import endlogo2 from "../assets/AICTE-Logo.png";
import endlogo3 from "../assets/Association_of_Indian_Universities_Logo.png.png";
import endlogo4 from "../assets/National_Institutional_Ranking_Framework_logo.png";
import endlogo5 from "../assets/wes.png";
import endlogo6 from "../assets/partner/naac a++.png";
import endlogo7 from "../assets/partner/sacs-short-logo.jpg";
import downlink from "../assets/LPUProspectus.pdf";
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
export const Lpu = () => {
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
                  Online Lovely Professional University (LPU), a pioneering
                  institution in the realm of digital education. Situated in
                  Jalandhar, Punjab, Lovely Professional University has been a
                  trailblazer in providing quality education for over two
                  decades. With Online LPU, the university extends its
                  commitment to excellence in education to learners across the
                  globe.
                </h5>
                <h5>
                  Online LPU offers a wide array of undergraduate, postgraduate
                  programmes. Through online platform, students have access to
                  the same rigorous curriculum, experienced faculty members, and
                  modern teaching methods as their on-campus counterparts.
                </h5>
                <h5>
                  Accessibility is another hallmark of Online LPU. With our
                  online platform, learners from all corners of the world can
                  access quality education without the constraints of geography
                  or distance. This inclusivity ensures that education is
                  available to everyone, regardless of their location or
                  background.
                </h5>
                <h5>
                  At Online LPU, students benefit from interactive learning
                  experiences facilitated by engaging lectures, multimedia
                  content, and collaborative discussions. Our virtual classrooms
                  provide a dynamic environment where students can interact with
                  faculty members and peers, enhancing their understanding of
                  the subject matter.
                </h5>
                <h5>
                  Online LPU also offers a range of support services to ensure
                  that students have a smooth and seamless learning experience.
                  From academic advising to technical support, our dedicated
                  team is committed to assisting students every step of the way.
                </h5>
                <h5>
                  By choosing Online LPU, students gain access to a future-ready
                  education that prepares them for success in the digital age
                  and beyond. With our emphasis on innovation, industry
                  relevance, and holistic development, Online LPU empowers
                  learners to achieve their academic and professional goals, all
                  from the comfort of their own homes.
                </h5>
                <h5>
                  Join us at Online Lovely Professional University and embark on
                  a transformative educational journey that will shape your
                  future and unlock endless opportunities for growth and
                  success.
                </h5>

                <h3>Why Choose Lovely Professional University?</h3>
                <h5>
                  <i class="fas fa-check-square"></i>Excellence in Education:
                  LPU is renowned for its commitment to academic excellence.
                  With a diverse range of programs and a faculty comprising
                  experienced educators and industry experts, LPU provides
                  students with a world-class learning experience that prepares
                  them for success in their chosen fields.
                </h5>
                <h5>
                  <i class="fas fa-check-square"></i>State-of-the-Art
                  Infrastructure: The university boasts modern infrastructure
                  and facilities that create an ideal environment for learning
                  and growth. From well-equipped classrooms and laboratories to
                  sports facilities and student accommodation, LPU ensures that
                  students have access to everything they need to excel
                  academically and personally.
                </h5>
                <h5>
                  <i class="fas fa-check-square"></i>Global Exposure: LPU offers
                  various international collaborations, exchange programs, and
                  study abroad opportunities, providing students with global
                  exposure and perspectives. These initiatives help students
                  broaden their horizons, enhance their intercultural
                  competencies, and prepare them for success in a globalized
                  world.
                </h5>
                <h5>
                  <i class="fas fa-check-square"></i>Industry Partnerships and
                  Placements: LPU has strong ties with leading companies and
                  organizations, facilitating internships, placements, and
                  industry collaborations for students. The university's robust
                  placement cell works tirelessly to connect students with job
                  opportunities and prepare them for the competitive job market.
                </h5>
                <h5>
                  <i class="fas fa-check-square"></i>Innovation and Research:
                  LPU encourages innovation and research among its students and
                  faculty members. The university provides ample opportunities
                  for research projects, collaborations, and publications,
                  allowing students to explore their interests and contribute to
                  the advancement of knowledge.
                </h5>
                <h5>
                  <i class="fas fa-check-square"></i>Holistic Development: LPU
                  places a strong emphasis on holistic development, nurturing
                  well-rounded individuals who possess not only academic prowess
                  but also strong ethical values, leadership skills, and a sense
                  of social responsibility.
                </h5>
                <h5>
                  <i class="fas fa-check-square"></i>Entrepreneurship
                  Development: LPU fosters an entrepreneurial mindset among its
                  students, providing support and resources for aspiring
                  entrepreneurs to turn their ideas into successful ventures.
                  The university's entrepreneurship cell organizes workshops,
                  seminars, and mentorship programs to help students develop
                  their entrepreneurial skills and launch their own businesses.
                </h5>
                <h5>
                  <i class="fas fa-check-square"></i>Student-Centric Approach:
                  Above all, LPU is committed to the success and well-being of
                  its students. The university adopts a student-centric
                  approach, prioritizing their needs, aspirations, and overall
                  growth and development.
                </h5>
                {/* <h5><i class="fas fa-check-square"></i>Holistic Development: LPU places a strong emphasis on holistic development, nurturing well-rounded individuals who possess not only academic prowess but also strong ethical values, leadership skills, and a sense of social responsibility.</h5> */}
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
    </div>
  );
};
