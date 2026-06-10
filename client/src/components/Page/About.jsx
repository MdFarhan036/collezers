import React from "react";
import "./Page.css";
import faqImg from "../../assets/about-img-1.png";
import aboutimg from "../../assets/about-banner.jpg";
import aboutimg1 from "../../assets/mission.jpg";
import aboutimg2 from "../../assets/vision.jpg";
import Faq from "./Faq";

export const About = () => {
  return (
    <>
      <section className="about" id="about" aria-label="about">
        <div className="about-container">
          <div className="about-banner">
            <div className="img-holder">
              <img
                src={aboutimg}
                width="520"
                height="370"
                loading="lazy"
                alt="about banner"
                className="img-cover"
              />
            </div>
          </div>

          <div className="about-content">
            

            <h2 className="h2 about-title">
              Welcome to COLLEZERS: Revolutionizing Education in India
            </h2>

            <p className="about-text">
              At COLLEZERS, we are on a mission to transform the education
              landscape in India by providing innovative, accessible, and
              personalized learning experiences for students across the country.
              With a focus on empowering learners of all ages and backgrounds,
              we aim to revolutionize the way education is delivered and
              accessed in India.
            </p>
            <p className="about-text">
              At COLLEZERS, we are not just shaping minds; we are shaping
              futures. Join us in our mission to empower the next generation of
              leaders, innovators, and change- makers in India. Together, let's
              redefine the future of education and unlock the potential of every
              learner.
            </p>
          </div>
        </div>
        <div className="whtmakesapart">
          <h3>What Makes Us Stand Apart?</h3>
          <p className="about-text">
            Holistic Learning Approach: We believe in nurturing the holistic
            development of learners by providing a comprehensive education that
            goes beyond textbooks and exams. Our platform offers a wide range of
            courses, resources, and tools to support the intellectual,
            emotional, and social growth of students.
          </p>
          <p className="about-text">
            Personalized Learning Experience: We understand that every learner
            is unique, with different interests, learning styles, and goals.
            That's why we offer personalized learning pathways tailored to
            individual needs, preferences, and aspirations. Our adaptive
            learning technology ensures that each student receives a customized
            learning experience that maximizes their potential.
          </p>
          <p className="about-text">
            Expert Faculty and Mentors: Learn from the best and brightest minds
            in education, industry, and academia. Our team of expert faculty
            members, industry professionals, and subject matter experts are
            dedicated to providing high-quality instruction, guidance, and
            mentorship to help students succeed.
          </p>
          <p className="about-text">
            Cutting-edge Technology: Harnessing the power of technology, we
            leverage innovative tools and platforms to enhance the learning
            experience. From interactive multimedia content to virtual
            classrooms and AI-driven assessments, we incorporate the latest
            advancements in edtech to make learning engaging, interactive, and
            effective.
          </p>
          <p className="about-text">
            Focus on Skill Development: In addition to academic excellence, we
            prioritize the development of 21st-century skills such as critical
            thinking, problem-solving, creativity, communication, collaboration,
            and digital literacy. Our courses are designed to equip students
            with the skills and competencies needed to thrive in today's rapidly
            changing world.
          </p>
          <p className="about-text">
            Affordable and Accessible Education: We believe that education
            should be accessible to all, regardless of socioeconomic background
            or geographical location. That's why we offer affordable pricing
            options, flexible payment plans, and scholarships to ensure that
            every student has the opportunity to access high-quality education.
          </p>
          <p className="about-text">
            Community Engagement: Join a vibrant and supportive community of
            learners, educators, and mentors who share your passion for learning
            and growth. Collaborate with peers, participate in discussions, and
            engage in extracurricular activities to enhance your learning
            experience and expand your network.
          </p>
          <p className="about-text">
            Continuous Improvement: We are committed to continuous improvement
            and innovation in education. We regularly update our courses,
            incorporate feedback from students and educators, and stay abreast
            of emerging trends and best practices to ensure that our platform
            remains at the forefront of educational excellence.
          </p>
          <h2 className="whatarewe">What Are We: </h2>
          <p className="about-text">
            We are an esteemed group of educational experts dedicated to guiding
            you through every step of your college journey. At our core, we
            believe in providing unparalleled support and mentorship to ensure
            your success from enrollment to graduation.
          </p>
          <h3 className="whatarewe">
            We Are a Group of Experts Offering Proper Guidance Till the End of
            Your College Degree:
          </h3>
          <p className="about-text">
            Comprising seasoned professionals with extensive experience in
            academia and industry, we offer comprehensive guidance and support
            throughout your college experience. From selecting the right courses
            to navigating academic challenges and career decisions, our team is
            here to empower you with the knowledge and resources needed to
            excel.
          </p>
          <h3 className="whatarewe">We Believe in Quality Education:</h3>
          <p className="about-text">
            Quality education is our cornerstone. We are committed to delivering
            educational excellence through meticulously crafted programs,
            innovative teaching methodologies, and personalized support. Our
            unwavering dedication to quality ensures that every student receives
            a transformative learning experience that prepares them for a
            successful future.
          </p>
        </div>
        <div className="mission-vision">
          <div className="mission">
            <img src={aboutimg1} alt="about banner" className="img-about" />
            <h4 className="desc-title">OUR MISSION</h4>
            <p className="description">
              College Choosing decision, the second biggest decision of anyone's
              life should not go wrong. With the most interactive user interface
              and most validated content, we aspire to be the top education
              portals and help the students in every way in making his decision
              easier.
            </p>
          </div>
          <div className="vision">
            <img src={aboutimg2} alt="about banner" className="img-about" />
            <h4 className="desc-title">OUR VISION</h4>
            <p className="description">
              Collezers has been created to fulfill a vision of empowering
              students with knowledge so that they make a wiser decision while
              choosing their career and alma mater.
            </p>
          </div>
        </div>
      </section>
      <section className="about-area">
        <div className="faq-container">
          <div className="img-faq">
            <img className="about-shape" src={faqImg} alt="shape" />
          </div>
          <div className="faq-content">
            <Faq />
          </div>
        </div>
      </section>
    </>
  );
};
