import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HeadlogoCard } from "../components/ComparePage/HeadlogoCard";
import { headlogoData } from "../components/Data/CollegeData";
import { EnquiryForm } from "../components/Common/EnquiryForm";
import Modal from "./Modal";
import headerlogo from '../assets/partner/chandigarh-university-logo.png'
import Carousel from "react-multi-carousel";
import endlogo1 from "../assets/partner/ugcdeb.webp";
import endlogo2 from "../assets/AICTE-Logo.png";
import endlogo3 from "../assets/aiu.png";
import endlogo4 from "../assets/National_Institutional_Ranking_Framework_logo.png";
import endlogo5 from "../assets/wes.png";
import endlogo6 from "../assets/partner/naac a++.png";
import endlogo7 from "../assets/partner/qs.png";
import endlogo8 from "../assets/hbpe.jpg";
import endlogo9 from "../assets/ACCA.jpg";
import img1 from "../assets/cu1.jpg";
import img2 from "../assets/cu2.jpg";
import img3 from "../assets/cuconvo1.jpg";
import img4 from "../assets/cu3.jpg";
import video1 from "../assets/cuvideo.mp4";
import prospectuslink from "../assets/CDOEProspectus.pdf";
import syllabuslink from "../assets/CUFEESTRUCTURE.pdf";
import Collegedata1 from "../components/Data/CollegeData";
import { Accordion } from "react-bootstrap";
import { CourseCarousel } from "./CourseCarousel";
import { OnlineCoursepage } from "../components/Common/OnlineCoursepage";
import AccordionItem from "../components/Common/Accordian";
import { CollegeCarousel } from "./CollegeCarousel";
const slides = [img1, img2, img3, img4, video1];
export const Accordata1 = [
  {
    question: "Is the online degree program offered by CU Online recognized?",
    answer:
      "Yes, the University is entitled by the University Grants Commission (UGC) to offer online degree programs. Additionally, our MBA and MCA programs are approved by AICTE",
  },
  {
    question: "What is Online Learning?",
    answer:
      "Online Learning is learning that happens over the internet, using technological tools. Online Learning gives you the perks of attending the University remotely through online mode. It includes video lectures and live lectures, supplemented with reading material, presentations, case studies, assignments, assessments, and so on. Teaching-Learning process and the evaluation is carried out through Online Learning Management system.",
  },
  {
    question:
      "Does Chandigarh University offer online education approved by the UGC?",
    answer:
      "CU Online is running UGC-entitled degree programmes.",
  },
  {
    question: "Are the online programs approved by AICTE and UGC?",
    answer:
      "Since cu has been ranked twice in the NIRF ranking in the year 2020 and 2021, it is Entitled by the UGC to offer programs in Online mode, without prior approval of the UGC. Therefore, cu is duly Entitled by the UGC to offer programs in Online mode.",
  },
  {
    question:
      "How will I be notified about the admission confirmation?",
    answer:
      "Yes, the University is entitled by the University Grants Commission (UGC) to offer online degree programs. Additionally, our MBA and MCA programs are approved by AICTE.",
  },
  {
    question: "Do I get any support to complete my registration or admission process?",
    answer:
      "Yes, we have a dedicated team for your assistance and you can call on 1800 1213 88800.",
  },

];

export const courseproductData = [
  {
    id: 1,
    courseimage: require("../assets/course1.jpg"),
    coursestitle: "cu ONLINE",
    coursesname: "Online BA",
    coursesdescription: "Some text about the product..",
    coursescardbutton: "Read More",
  },
  {
    id: 2,
    courseimage: require("../assets/course2.jpg"),
    coursestitle: "cu ONLINE",
    coursesname: "Online MA",
    coursesdescription: "Some text about the product..",
    coursescardbutton: "Read More",
  },
  {
    id: 3,
    courseimage: require("../assets/caps.jpg"),
    coursestitle: "cu ONLINE",
    coursesname: "Online BCA",
    coursesdescription: "Some text about the product..",
    coursescardbutton: "Read More",
  },
  {
    id: 4,
    courseimage: require("../assets/course4.jpg"),
    coursestitle: "cu ONLINE",
    coursesname: "Online MCA",
    coursesdescription: "Some text about the product..",
    coursescardbutton: "Read More",
  },
  {
    id: 5,
    courseimage: require("../assets/course5.jpg"),
    coursestitle: "cu ONLINE",
    coursesname: "Online MBA",

    coursesdescription: "Some text about the product..",
    coursescardbutton: "Read More",
  },
  {
    id: 6,
    courseimage: require("../assets/course6.jpg"),
    coursestitle: "cu ONLINE",
    coursesname: "Online M.COM",
    coursesdescription: "Some text about the product..",
    coursescardbutton: "Read More",
  },
  {
    id: 7,
    courseimage: require("../assets/course-2.jpg"),
    coursestitle: "cu ONLINE",
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
export const Cu = () => {
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
        let cu = document.createElement("a");
        cu.href = fileURL;
        cu.download = "CUProspectus.pdf";
        cu.click();
      });
    });
  };
  const onButtonClick1 = () => {
    // using Java Script method to get PDF file
    fetch({ syllabuslink }).then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);

        // Setting various property values
        let cu = document.createElement("a");
        cu.href = fileURL;
        cu.download = "CUsyllabuslink.pdf";
        cu.click();
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
            <h1>Chandigarh University Online</h1>
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
            <p className="prospectusbtn" onClick={onButtonClick}>
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
                  Online Chandigarh University, a leading institution in the realm of digital education. Located in Chandigarh, Punjab, Chandigarh University has established itself as a hub of academic excellence and innovation. With Online Chandigarh University, the institution extends its commitment to accessible and flexible education to learners worldwide.
                </h5>
                <h5>
                  Online Chandigarh University offers a diverse range of undergraduate, postgraduate. Through our online platform, students have access to the same rigorous curriculum, experienced faculty members, and modern teaching methods as their on-campus counterparts.
                </h5>
                <h5>
                  Accessibility is another hallmark of Online Chandigarh University. With our online platform, learners from all corners of the world can access quality education without the constraints of geography or distance. This inclusivity ensures that education is available to everyone, regardless of their location or background.
                </h5>
                <h5>
                  At Online Chandigarh University, students benefit from interactive learning experiences facilitated by engaging lectures, multimedia content, and collaborative discussions. Our virtual classrooms provide a dynamic environment where students can interact with faculty members and peers, enhancing their understanding of the subject matter.
                </h5>
                <h5>
                  Online Chandigarh University also offers a range of support services to ensure that students have a smooth and seamless learning experience. From academic advising to technical support, our dedicated team is committed to assisting students every step of the way.
                </h5>
                <h5>
                  By choosing Online Chandigarh University, students gain access to a future-ready education that prepares them for success in the digital age and beyond. With our emphasis on innovation, industry relevance, and holistic development, Online Chandigarh University empowers learners to achieve their academic and professional goals, all from the comfort of their own homes.
                </h5>
                <h5>
                  Join Online Chandigarh University and embark on a transformative educational journey that will shape your future and unlock endless opportunities for growth and success.
                </h5>

                <h3>Why Choose Online Chandigarh University?</h3>
                <h5>
                  <i class="fas fa-check-square"></i>Academic Excellence: Online Chandigarh University upholds the same standards of academic excellence as its on-campus programs. With a focus on quality education and innovative teaching methods, students can expect to receive a comprehensive and enriching learning experience.
                </h5>
                <h5>
                  <i class="fas fa-check-square"></i>Flexibility: Online learning at Chandigarh University offers unmatched flexibility, allowing students to study at their own pace and convenience. Whether you're a working professional, a busy parent, or someone with other commitments, our online programs enable you to balance your education with your personal and professional life.
                </h5>
                <h5>
                  <i class="fas fa-check-square"></i>Accessibility: With Online Chandigarh University, education is accessible to learners from all corners of the world. Our online platform eliminates geographical barriers, allowing students to access quality education from anywhere, at any time.
                </h5>
                <h5>
                  <i class="fas fa-check-square"></i>Diverse Range of Programs: From undergraduate to postgraduate and doctoral programs, Online Chandigarh University offers a wide array of courses across various disciplines. Whether you're interested in engineering, management, computer science, or humanities, we have a program tailored to your interests and career goals.
                </h5>
                <h5>
                  <i class="fas fa-check-square"></i>Experienced Faculty: Our online programs are taught by experienced faculty members who are experts in their respective fields. With their guidance and mentorship, students receive a holistic learning experience that combines theoretical knowledge with practical insights.
                </h5>
                <h5>
                  <i class="fas fa-check-square"></i>Interactive Learning Environment: Online Chandigarh University fosters interactive learning through engaging lectures, multimedia content, and collaborative discussions. Our virtual classrooms provide a dynamic environment where students can interact with faculty members and peers, enhancing their understanding of the subject matter.
                </h5>
                <h5>
                  <i class="fas fa-check-square"></i>Support Services: From academic advising to technical support, Online Chandigarh University offers a range of support services to ensure that students have a smooth and seamless learning experience. Our dedicated team is committed to assisting students every step of the way.
                </h5>
                <h5>
                  <i class="fas fa-check-square"></i>Career Opportunities: Online Chandigarh University equips students with the skills and knowledge needed to succeed in their chosen fields. Our career-focused programs and industry-relevant curriculum prepare students for real-world challenges and open doors to exciting career prospects.
                </h5>
                <h5>
                  <i class="fas fa-check-square"></i>Holistic Development: Online Chandigarh University emphasizes holistic development, nurturing well-rounded individuals who possess not only academic prowess but also strong ethical values, leadership skills, and a sense of social responsibility.
                </h5>
                <h5>
                  <i class="fas fa-check-square"></i>Future-Ready Education: As the world evolves, so does education. Online Chandigarh University prepares students for the future by integrating technology, innovation, and industry trends into our curriculum. By choosing Online Chandigarh University, students gain the skills and knowledge needed to thrive in the digital age and beyond.
                </h5>
                {/* <h5><i class="fas fa-check-square"></i>Holistic Development: cu places a strong emphasis on holistic development, nurturing well-rounded individuals who possess not only academic prowess but also strong ethical values, leadership skills, and a sense of social responsibility.</h5> */}
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
                    <td>Online MA</td>
                    <td>25,000</td>
                    <td>50,000</td>

                    <td>2 Years</td>
                  </tr>
                  <tr>
                    <td>Online BAJMC</td>
                    <td>22,500</td>
                    <td>45,000</td>

                    <td>3 Years</td>
                  </tr>
                  <tr>
                    <td>Online MAJMC</td>
                    <td>25,000</td>
                    <td>50,000</td>

                    <td>2 Years</td>
                  </tr>
                  <tr>
                    <td>Online BBA</td>
                    <td>26,000</td>
                    <td>52,000</td>

                    <td>3 Years</td>
                  </tr>
                  <tr>
                    <td>Online MBA</td>
                    <td>50,000</td>
                    <td>1,00,000</td>

                    <td>2 Years</td>
                  </tr>
                  <tr>
                    <td>Online BCA</td>
                    <td>27,500</td>
                    <td>55,000</td>

                    <td>3 Years</td>
                  </tr>
                  <tr>
                    <td>Online MCA</td>
                    <td>30,000</td>
                    <td>60,000</td>

                    <td>2 Years</td>
                  </tr>

                  <tr>
                    <td>Online M.COM</td>
                    <td>32,500</td>
                    <td>65,000</td>

                    <td>2 Years</td>
                  </tr>
                  <tr>
                    <td>Online MSC</td>
                    <td>30,000</td>
                    <td>60,000</td>

                    <td>2 Years</td>
                  </tr>
                </table>

                <h3>SPECIAL FEATURES</h3>
                <h5>
                  <i class="fas fa-check-square"></i>Globally recognized UGC-approved NAAC A+ accredited the online degrees offered by cu University are at par with on-campus degrees.
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
                  <div className="approval-card">
                    <img src={endlogo6} alt="" />
                  </div>
                  <div className="approval-card">
                    <img src={endlogo7} alt="" />
                  </div>
                  <div className="approval-card">
                    <img src={endlogo8} alt="" />
                  </div>
                  <div className="approval-card">
                    <img src={endlogo9} alt="" />
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
                        <td>cu</td>
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
