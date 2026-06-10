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
import endlogo4 from "../assets/ISO-Logo.png";
import headerlogo from '../assets/partner/maharishi.png'

import endlogo5 from "../assets/partner/naac a++.png";
import prospectuslink from "../assets/CDOEProspectus.pdf";
import Collegedata1 from "../components/Data/CollegeData";
import { Accordion } from "react-bootstrap";
import { CourseCarousel } from "./CourseCarousel";
import { OnlineCoursepage } from "../components/Common/OnlineCoursepage";
import AccordionItem from "../components/Common/Accordian";
import img1 from "../assets/mmu1.webp";
import img2 from "../assets/mmu2.webp";
import img3 from "../assets/mmu3.webp";
import img4 from "../assets/mmu4.jpeg";
import video1 from "../assets/mmuvideo.mp4";
import { CollegeCarousel } from "./CollegeCarousel";

const slides = [img1, img2, img3, img4, video1];
export const Accordata1 = [
  {
    question: "Is the program entitled by UGC?",
    answer:
        "Yes, It is entitled by UGC. It is equivalent to any other degree offered by UGC.",
},
{
    question: "What is Online Learning?",
    answer:
        "Online Learning is learning that happens over the internet, using technological tools. Online Learning gives you the perks of attending the University remotely through online mode. It includes video lectures and live lectures, supplemented with reading material, presentations, case studies, assignments, assessments, and so on. Teaching-Learning process and the evaluation is carried out through Online Learning Management system.",
},
{
    question:
        "Will the online degree be equivalent to the conventional degree offered by MM(DU).",
    answer:
        "Yes. Per the UGC regulations, Online degrees at undergraduate and postgraduate level shall be treated as equivalent to the corresponding awards of the degrees at undergraduate and postgraduate level offered through conventional mode. This UGC notification can be downloaded at following URL: https://deb.ugc.ac.in/Uploads/Notices_Upload/UGC_20220906102157_1.pdf)",
},
{
    question: "Is MM(DU) is a member of Association of Indian University (AIU)?",
    answer:
        "Yes, MM(DU) is a member of the AIU.",
},
{
    question:
        "Can I take admission if the result of my quailfying examination is awaited or I have backlog/re appear/compartment in the qualifying examination?",
    answer:
        "Applicants who are awaiting their result of qualifying exam are eligible to apply, provided they submit the result of the qualifying examination to the university either by the last date of provisional registration or at the time of admission, or by the last date as specified by the university.",
},
{
    question: "How is online learning is different from Distance Learning?",
    answer:
        "Online Learning courses are 100% online that provides students an implausible level of flexibility to choose where they learn, when they learn and even how they learn. It recreates classroom environment using live online sessions but are never face-to-face. Distance Learning courses uses blended mode of learning that includes both online study component with access to online learning material and face-to-face workshops or summer schools as part of the degree programme.",
},
];

export const courseproductData = [
  {
    id: 1,
    courseimage: require("../assets/course1.jpg"),
    coursestitle: "MAHARISHI ONLINE",
    coursesname: "Online BBA",
    coursesdescription: "Some text about the product..",
    coursescardbutton: "Read More",
  },
  {
    id: 2,
    courseimage: require("../assets/course2.jpg"),
    coursestitle: "MAHARISHI ONLINE",
    coursesname: "Online MBA",
    coursesdescription: "Some text about the product..",
    coursescardbutton: "Read More",
  },
  {
    id: 3,
    courseimage: require("../assets/caps.jpg"),
    coursestitle: "MAHARISHI ONLINE",
    coursesname: "Online BCA",
    coursesdescription: "Some text about the product..",
    coursescardbutton: "Read More",
  },
  {
    id: 4,
    courseimage: require("../assets/course4.jpg"),
    coursestitle: "MAHARISHI ONLINE",
    coursesname: "Online B.COM",
    coursesdescription: "Some text about the product..",
    coursescardbutton: "Read More",
  },
  {
    id: 5,
    courseimage: require("../assets/course5.jpg"),
    coursestitle: "MAHARISHI ONLINE",
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
    slidesToSlide: 2,
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
export const Maharishi = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleItemClick = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const [partnersitem1, setPartnersitem1] = useState(Collegedata1);
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
            <h1>MAHARISI Online</h1>

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
            <p className="prospectusbtn" onClick={onButtonClick}>
              <i className="fa-solid fa-download"></i>Prospectus
            </p>
            <p>
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
                  Online Maharishi Markandeshwar, a pioneering venture in digital education brought to you by Maharishi Markandeshwar University (MMU). Situated in Ambala, Haryana, Maharishi Markandeshwar University has been at the forefront of providing quality education and fostering academic excellence for over two decades.
                </h5>
                <h5>
                  Online Maharishi Markandeshwar offers a wide range of undergraduate, postgraduate programmes. With a commitment to innovation and accessibility, MMU has extended its academic offerings to the digital realm, providing learners with flexible and convenient access to quality education.
                </h5>
                <h5>
                  At Online Maharishi Markandeshwar, students benefit from the same rigorous academic standards, experienced faculty members, and industry-relevant curriculum as their on-campus counterparts. Through interactive online lectures, engaging course materials, and virtual learning platforms, students receive a dynamic and immersive educational experience tailored to meet the demands of today's digital age.
                </h5>
                <h5>
                  One of the key advantages of Online Maharishi Markandeshwar is its flexibility, allowing students to pursue their studies at their own pace and convenience. Whether you're a working professional, a stay-at-home parent, or someone looking to advance their career, our online programs offer the flexibility you need to balance your education with your other commitments.
                </h5>
                <h5>
                  In addition to flexibility, Online Maharishi Markandeshwar emphasizes accessibility, enabling learners from across India and around the world to access quality education without the constraints of geography or distance. Through our online platform, students can engage with course materials, participate in discussions, and interact with faculty members from the comfort of their own homes.
                </h5>
                <h5>
                  As part of Maharishi Markandeshwar University, Online Maharishi Markandeshwar upholds the same values of academic excellence, innovation, and holistic development. We are committed to nurturing well-rounded individuals who are not only academically proficient but also socially responsible, ethically sound, and equipped with the skills and knowledge needed to thrive in today's globalized world.
                </h5>
                <h5>
                  Join us at Online Maharishi Markandeshwar and embark on a transformative journey towards a brighter future. With our commitment to quality education, innovation, and accessibility, we are shaping the leaders and innovators of tomorrow, one digital classroom at a time.
                </h5>

                <h3>Why Choose Maharishi Markandeshwar University?</h3>
                <h5>
                  <i class="fas fa-check-square"></i>Academic Excellence: Maharishi Markandeshwar University (MMU) is renowned for its commitment to academic excellence. With a legacy spanning over two decades, MMU has established itself as a center of learning that upholds rigorous academic standards and delivers quality education across various disciplines.
                </h5>
                <h5>
                  <i class="fas fa-check-square"></i>Industry-Relevant Curriculum: MMU offers programs that are carefully crafted to meet the demands of the industry. The curriculum is designed in collaboration with industry experts, ensuring that students acquire the skills and knowledge needed to excel in their chosen fields.
                </h5>
                <h5>
                  <i class="fas fa-check-square"></i>State-of-the-Art Infrastructure: The university boasts modern infrastructure and facilities that provide students with a conducive learning environment. From well-equipped laboratories and libraries to sports facilities and student accommodation, MMU offers everything students need to thrive academically and personally.
                </h5>
                <h5>
                  <i class="fas fa-check-square"></i>Experienced Faculty: At MMU, students learn from a team of experienced faculty members who are experts in their respective fields. The faculty members are dedicated to nurturing talent, inspiring creativity, and guiding students towards academic and professional success.
                </h5>
                <h5>
                  <i class="fas fa-check-square"></i>Research Opportunities: MMU encourages research and innovation among its students and faculty members. The university provides ample opportunities for research projects, collaborations, and publications, allowing students to explore their interests and contribute to the advancement of knowledge.
                </h5>
                <h5>
                  <i class="fas fa-check-square"></i>Holistic Development: MMU places a strong emphasis on holistic development, nurturing well-rounded individuals who possess not only academic prowess but also strong ethical values, leadership skills, and a sense of social responsibility.
                </h5>
                <h5>
                  <i class="fas fa-check-square"></i>Global Exposure: MMU offers various international collaborations, exchange programs, and study abroad opportunities, providing students with global exposure and perspectives. These initiatives help students broaden their horizons, enhance their intercultural competencies, and prepare them for success in a globalized world.
                </h5>
                <h5>
                  <i class="fas fa-check-square"></i>Placement Assistance: MMU has a dedicated placement cell that works tirelessly to connect students with job opportunities and internships in leading companies and organizations. The university has a strong track record of placements, with many students securing lucrative job offers even before graduation.
                </h5>
                {/* <h5><i class="fas fa-check-square"></i>Holistic Development: LPU places a strong emphasis on holistic development, nurturing well-rounded individuals who possess not only academic prowess but also strong ethical values, leadership skills, and a sense of social responsibility.</h5> */}
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
                    <td>Online BBA</td>
                    <td>15,000</td>
                    <td>30,000</td>

                    <td>3 Years</td>
                  </tr>

                  <tr>
                    <td>Online MBA</td>
                    <td>27,500</td>
                    <td>55,000</td>

                    <td>2 Years</td>
                  </tr>

                  <tr>
                    <td>Online BCA</td>
                    <td>15,000</td>
                    <td>30,000</td>

                    <td>3 Years</td>
                  </tr>

                  <tr>
                    <td>Online B.COM</td>
                    <td>17,500</td>
                    <td>35,000</td>

                    <td>3 Years</td>
                  </tr>
                  <tr>
                    <td>Online MSC</td>
                    <td>17,500</td>
                    <td>35,000</td>

                    <td>2 Years</td>
                  </tr>
                </table>
                <p>
                  The above fee is exclusive of the Initial
                  Registration Fee of `500/- (non-refundable)
                </p>
                <h3>SPECIAL FEATURES</h3>
                <h5>
                  <i class="fas fa-check-square"></i>Globally recognized UGC-approved NAAC A+ accredited the online degrees offered by Manipal University Jaipur are at par with on-campus degrees.
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
                    <i class="fas fa-check-square"></i>
                    Visit your chosen university's website and click on the
                    Enroll Now button to apply online.
                  </h5>

                  <li>Step 2: </li>
                  <h5>
                    <i class="fas fa-check-square"></i>
                    Upload all required documents and submit your application.
                  </h5>

                  <li>Step 3: </li>
                  <h5>
                    <i class="fas fa-check-square"></i>Pay the application fees.
                  </h5>

                  <li>Step 4: </li>
                  <h5>
                    <i class="fas fa-check-square"></i>
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
                        <td>MAHARISHI</td>
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
