import React, { useState, useEffect } from "react";
import { City, Country, State } from "country-state-city";
// import { Link } from "react-router-dom"
// import Accordion from "../components/Home/Accordion";
import { Link } from "react-router-dom";
import EmptyFile from "../components/Empty/EmptyFile";
import imgIcon from "../assets/check.png";
import imgIcon1 from "../assets/male.png";
import imgIcon2 from "../assets/female.png";
import imgIcon3 from "../assets/locke.png";

import { useParams } from "react-router-dom";
import HeadTitle from "../components/HeadTitle/HeadTitle";
import "./singlepage.css";
import Sdata2 from "../components/Data/SData2";
import Selector from "../components/Common/Selector";
import { CollegeSlider } from "./CollegeSlider";

const PgCourse = () => {
  let countryData = Country.getAllCountries();
  const [stateData, setStateData] = useState();
  const [cityData, setCityData] = useState();
  const [country, setCountry] = useState(countryData[0]);
  const [state, setState] = useState();
  const [city, setCity] = useState();
  useEffect(() => {
    setStateData(State.getStatesOfCountry(country?.isoCode));
  }, [country]);

  useEffect(() => {
    setCityData(City.getCitiesOfState(country?.isoCode, state?.isoCode));
  }, [state]);

  useEffect(() => {
    stateData && setState(stateData[0]);
  }, [stateData]);

  useEffect(() => {
    cityData && setCity(cityData[0]);
  }, [cityData]);

  const [enquiry, setEnquiry] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    state: "",
    gender: "",
    course: "",
    // specialization: "",
  });
  const handleInput = (e) => {
    setEnquiry({ ...enquiry, [e.target.name]: e.target.value });
  };
  const formSubmit = (e) => {
    e.preventDefault();
    openComparisonPage();
  }

  const openComparisonPage = () => {
    const newWindow = window.open('', '_blank');
    if (newWindow) {
      newWindow.document.write(`
        <html>
        <head>
        <title>Comparison Page</title>
          <link rel="stylesheet" href="comparison-page.css">
        </head>
        <body>
          <div id="comparison"></div>
        </body>
      </html>
    `);
      newWindow.document.close();
      renderComparisonPage(newWindow.document.getElementById('comparison'));
    } else {
      alert('Popup blocked! Please allow popups to see the comparison page.');
    }

  };

  const renderComparisonPage = (container) => {
    // Sample universities data for demonstration
    const universities = [
      { name: 'Lovely Professional University', approvals: 'UGC / AICTE / AIU / NIRF / WES / NAAC A++ / SACS COC', universimg: require('../assets/partner/lpu-logo.png'), baFees: 18000, maFees: 18000, bajmcFees: 0, majmcFees: 0, bbaFees: 0, mbaFees: 43000, bcaFees: 28000, mcaFees: 33000, bcomFees: 0, mcomFees: 23000, mscFees: 18000 },
      { name: 'Manipal university Jaipur', approvals: 'UGC / AICTE / AIU NIRF / WES / NAAC A+ ', universimg: require('../assets/partner/manipal-logo.png'), baFees: 0, maFees: 0, bajmcFees: 0, majmcFees: 35000, bbaFees: 22500, mbaFees: 43750, bcaFees: 22500, mcaFees: 39500, bcomFees: 16500, mcomFees: 27000, mscFees: 0 },
      { name: 'GLA University', approvals: 'UGC / AICTE / AIU/ NIRF / NAAC A+', universimg: require('../assets/partner/GLA-U-logo.jpg'), baFees: 0, maFees: 0, bajmcFees: 0, majmcFees: 0, bbaFees: 9250, mbaFees: 16500, bcaFees: 9250, mcaFees: 14000, bcomFees: 6500, mcomFees: 0, mscFees: 0 },
      { name: 'Jain University', approvals: 'UGC DEB / AICTE / NIRF / NAAC A++', universimg: require('../assets/partner/jain-logo.png'), baFees: 0, maFees: 0, bajmcFees: 0, majmcFees: 0, bbaFees: 27500, mbaFees: 40000, bcaFees: 0, mcaFees: 37500, bcomFees: 21250, mcomFees: 23000, mscFees: 0 },
      { name: 'Dy Patil University', approvals: 'UGC DEB / AICTE / AIU / NIRF / WES / NAAC A++ / ISO', universimg: require('../assets/partner/dypu.png'), baFees: 0, maFees: 0, bajmcFees: 0, majmcFees: 0, bbaFees: 25000, mbaFees: 50000, bcaFees: 0, mcaFees: 0, bcomFees: 0, mcomFees: 0, mscFees: 0 },
      // { name: 'Amity University', approvals: 'UGC / AICTE / AIU / NIRF / WES, NAAC, A , SAAC COC', universimg: require('../assets/partner/'), bbaFees: 25000, mbaFees: 50000 },
      { name: 'Sikkim Manipal University', approvals: 'UGC / AICTE / NIRF / NAAC A+', universimg: require('../assets/partner/smu.png'), baFees: 12500, maFees: 18750, bajmcFees: 0, majmcFees: 0, bbaFees: 0, mbaFees: 0, bcaFees: 0, mcaFees: 24500, bcomFees: 12500, mcomFees: 22500 },
      { name: 'Chandigarh University', approvals: 'UGC DEB / AICTE / AIU / NIRF / WES / NAAC A++ / QS / HBPE / ACCA', universimg: require('../assets/partner/chandigarh-university-logo.png'), maFees: 25000, bajmcFees: 22500, majmcFees: 25000, bbaFees: 26000, mbaFees: 50000, bcaFees: 27500, mcaFees: 30000, bcomFees: 0, mcomFees: 32500, mscFees: 30000 },
      { name: 'Vivekananda Global University', approvals: 'UGC / AICTE / AIU / NAAC A+', universimg: require('../assets/partner/vgu_logo.jpg'), baFees: 10000, maFees: 16000, bajmcFees: 0, majmcFees: 0, bbaFees: 19000, mbaFees: 32500, bcaFees: 19000, mcaFees: 32500, mscFees: 16000, bcomFees: 0, mcomFees: 0, },
      { name: 'Maharishi Markandeshwar University', approvals: 'UGC / AICTE / AIU/ NAAC A++ / ISO', universimg: require('../assets/partner/maharishi.png'), baFees: 0, maFees: 0, bajmcFees: 0, majmcFees: 0, bbaFees: 15000, mbaFees: 27500, bcaFees: 15000, mcaFees: 0, bcomFees: 17500, mcomFees: 0, mscFees: 17500 },
      { name: 'Jaipur National University', approvals: 'UGC / AICTE / AIU / NIRF / WES / NAAC A++ / SACS COC', universimg: require('../assets/partner/jnu-logo1.png'), baFees: 18000, maFees: 18000, bajmcFees: 0, majmcFees: 0, bbaFees: 0, mbaFees: 43000, bcaFees: 28000, mcaFees: 33000, bcomFees: 0, mcomFees: 23000, mscFees: 18000 },

    ];
    // Extract relevant data based on selected course
    const selectedCourseData = universities.map(university => ({
      name: university.name,
      universimg: university.universimg,
      approvals: university.approvals,
      fees: university[enquiry.course + 'Fees'], // Get fees based on selected course
    }));

    // Sort universities by fees
    const sortedUniversities = selectedCourseData.sort((a, b) => a.fees - b.fees);
    const htmlContent = `
    <h1>Comparison Page</h1>
      

    <div className="comparison-head">
      <span className="comparison-title">College Image</span>
      <span className="comparison-title">College Name</span>
      <span className="comparison-title">College Approvals</span>
      <span className="comparison-title">College Fees</span>
    </div>
    <div className="comparison-container">
      ${sortedUniversities.map(university => `
      <div className="college"> 
        <div className="college-details">
          <img className="college-image" src="${university.universimg}" alt="${university.name}">
        </div>
        <div className="college-details">
            <h2>${university.name}</h2>
        </div>
        <div className="college-details">
          <p>Approvals: ${university.approvals}</p>
        </div>
        <div className="college-details">
          <span>
            <p>Fees: ${university.fees}</p>
          </span>
          <span>
            <a href="" className="apply-btn">Apply</a>
          </span>
        </div>
      </div>
      `).join('')}
    </div>
  `;

    // Set HTML content to the new window
    container.innerHTML = htmlContent;
  };

  const { id } = useParams();
  const [item2, setItem2] = useState(null);

  useEffect(() => {
    let item2 = Sdata2.find((item2) => item2.id === parseInt(id));
    if (item2) {
      setItem2(item2);
    }
  }, [id]);

  return (
    <>
      <HeadTitle />

      {item2 ? (
        <div className="main-container">
          <div className="course-content">
            <div className="form-about">
              <div className="alert bg-skyblue formcontent-alert" role="alert">
                <h4 className="text-dark">Best Universites at Affordable Fees</h4>
              </div>
              <div className="college-slider">
                <CollegeSlider />
              </div>
              <div className="alert-box bg-skyblue" role="alert-box">
                <h6 className="text-dark">
                  {" "}
                  We help you with real time data of Universities to help you
                  decide
                </h6>
              </div>

              <div className="alert-box bg-skyblue" role="alert-box">
                <h6 className="text-dark">
                  {" "}
                  We provide assitance from our dedicated and certified experts
                </h6>
              </div>

            </div>
            <div className="form-area">
              <div className="form-area">
                <form
                  id="contact-form"
                  onSubmit={formSubmit}
                  method="post"
                  role="form"
                >
                  <div className="signup-text text-center">
                    <div className="alert bg-skyblue" role="alert">
                      <h4 className="text-dark">
                        Compare and Select Best University for your Online and ODL
                        Distance Courses
                      </h4>
                    </div>

                    <div className="alert">
                      <h5 className="textprimary">
                        <span className="">
                          <img src={imgIcon} alt="Form Img" /> Get Approved University</span>
                        <span className="">
                          <img src={imgIcon} alt="Form Img" />
                          100+ Placement Assistance
                        </span>
                      </h5>
                    </div>
                  </div>

                  <div className="signup-form-wrapper">
                    <div className="signup-input-wrapper">
                      <input
                        type="text"
                        placeholder="Full Name"
                        id="name"
                        name="name"
                        className="input-border infoPlaceholder"
                        value={enquiry.name}
                        required
                        onChange={handleInput}
                        autoComplete="off"
                      />
                    </div>

                    <div className="signup-input-wrapper">
                      <input
                        type="text"
                        placeholder="Email"
                        id="email"
                        name="email"
                        className="input-border infoPlaceholder"
                        value={enquiry.email}
                        required
                        onChange={handleInput}
                        autoComplete="off"
                      />
                    </div>

                    <div className="signup-input-wrapper">
                      <input
                        type="text"
                        placeholder="Mobile Number"
                        id="phone"
                        name="phone"
                        className="input-border infoPlaceholder"
                        value={enquiry.phone}
                        required
                        onChange={handleInput}
                        autoComplete="off"
                      />
                    </div>
                    <div className="signup-input-wrapper">

                      <Selector
                        data={countryData}
                        selected={country}
                        setSelected={setCountry}
                        className="enquiry-txt input-border"
                        name="state"
                        id="state"
                        value={enquiry.state}
                        required
                        onChange={handleInput}
                        autoComplete="off"
                      />
                    </div>
                    {state && (
                      <div className="signup-input-wrapper">

                        <Selector
                          data={stateData}
                          selected={state}
                          setSelected={setState}
                          className="enquiry-txt input-border"
                          name="city"
                          id="city"
                          value={enquiry.city}
                          required
                          onChange={handleInput}
                          autoComplete="off"
                        />

                      </div>
                    )}
                    {city && (
                      <div className="signup-input-wrapper">

                        <Selector
                          data={cityData}
                          selected={city}
                          setSelected={setCity}
                          className="enquiry-txt input-border"
                          name="city"
                          id="city"
                          value={enquiry.city}
                          required
                          onChange={handleInput}
                          autoComplete="off" />
                      </div>
                    )}
                    <div className="signup-action">
                      <div className="course-sidebar-list ">
                        <div className="input-border radio txt">
                          <input
                            className="signup-checkbo input-border"
                            type="radio"
                            id="sing-up"
                            name="gender"
                            value={enquiry.gender}
                            required
                            onChange={handleInput}
                            autoComplete="off"
                          />
                          <label className="sign-check " htmlFor="sing-up">
                            <span className="text-dark">
                              {" "}
                              <img
                                src={imgIcon1}
                                alt="male"
                                className="img-fluid"
                              />
                              Male
                            </span>
                          </label>
                        </div>

                        <div className="input-border radio txt">
                          <input
                            className="signup-checkbo input-border infoPlaceholder"
                            type="radio"
                            id="sing-up"
                            name="gender"
                            value={enquiry.gender}
                            required
                            onChange={handleInput}
                            autoComplete="off"
                          />
                          <label className="sign-check" htmlFor="sing-up">
                            <span className="text-dark">
                              <img
                                src={imgIcon2}
                                alt="female"
                                className="img-fluid"
                              />
                              Female
                            </span>
                          </label>
                        </div>
                      </div>
                    </div>
                    <label>

                      <select className="form-control  txt input-border infoPlaceholder"
                        name="course"
                        onChange={handleInput}
                        id="course" value={enquiry.course} autoComplete="off" required >
                        <option value="">Select Courses</option>
                        <option value="bba">BA</option>
                        <option value="ma">MA</option>
                        <option value="bajmc">BA JMC</option>
                        <option value="majmc">MA JMC</option>
                        <option value="bba">BBA</option>
                        <option value="mba">MBA</option>
                        <option value="bca">BCA</option>
                        <option value="mca">MCA</option>
                        <option value="bcom">BCOM</option>
                        <option value="mcom">MCOM</option>
                        <option value="bsc">BSC</option>
                        <option value="msc">MSC</option>

                      </select>
                    </label>


                    <div className="sing-buttom mb-20">
                      <button className="sing-btn sign" type="submit">
                        Find Best University
                      </button>
                    </div>

                    <div className=" bg-skyblue form-subalert" role="alert">
                      <img src={imgIcon3} alt="" /> Your personal information is
                      secure with us
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <section className="course-detalis-area">
            <div className="row">
              <div className="course-detalis-wrapper ">
                <div className="course-heading ">
                  <h1 className="courses-title">{item2.coursename}</h1>
                </div>
                <div className="coursedetails-container">
                  <div className="course-images">
                    <img src={item2.coursepageimg} alt="course img" />
                  </div>
                  <div className="course-description">

                    <div className="">
                      <h2 className="course-leranm-tittle">{item2.courseTitle}</h2>
                    </div>
                    <p>{item2.courseDesc}</p>
                  </div>
                </div>
                <div className="course-detelis-meta">
                  <div className="course-Enroll border-line-meta">
                    <p>{item2.univers}</p>
                    <span>{item2.universCount}</span>
                  </div>
                  <div className="course-update border-line-meta">
                    <p>{item2.duration}</p>
                    <span>{item2.durationYear}</span>
                  </div>
                  <div className="course-category">
                    <p>{item2.eligibility}</p>
                    <span>{item2.qualif}</span>
                  </div>
                </div>
                <div className="course-learn">
                  <div className="">
                    <h2 className="course-leranm-tittle">
                      {item2.componentsTitle}
                    </h2>
                  </div>
                  <p className="course-components">
                    <b>{item2.questioncontent1}</b> {item2.answercontent1}
                  </p>
                  <p className="course-components">
                    <b>{item2.questioncontent2}</b> {item2.answercontent2}
                  </p>
                  <p className="course-components">
                    <b>{item2.questioncontent3}</b> {item2.answercontent3}
                  </p>
                  <p className="course-components">
                    <b>{item2.questioncontent4}</b> {item2.answercontent4}
                  </p>
                  <p className="course-components">
                    <b>{item2.questioncontent5}</b> {item2.answercontent5}
                  </p>
                  <p className="course-components">
                    <b>{item2.questioncontent6}</b> {item2.answercontent6}
                  </p>
                  <p className="course-components">
                    <b>{item2.questioncontent7}</b> {item2.answercontent7}
                  </p>
                  <p className="course-components">
                    <b>{item2.questioncontent8}</b> {item2.answercontent8}
                  </p>
                  <p className="course-components">
                    <b>{item2.questioncontent9}</b> {item2.answercontent9}
                  </p>
                  {/* <Accordion /> */}
                </div>
                <div className="course-requirements">
                  <h2 className="course-leranm-tittle">{item2.enlightenTitle}</h2>
                  <p>{item2.enlightendesc}</p>
                  <div className=""></div>
                </div>
                <div className="course-requirements">
                  <h2 className="course-leranm-tittle">
                    SPECIALIZATIONS AVAILABLE
                  </h2>
                  <p>(Electives as per different Universities)</p>
                  <ul>
                    <li>

                      <Link to={`/CoursePage${id}`}>
                        {item2.specialization1}
                      </Link>
                    </li>
                    <li>

                      <Link to={`/CoursePage${id}`}>
                        {item2.specialization2}
                      </Link>
                    </li>
                    <li>

                      <Link to={`/CoursePage${id}`}>
                        {item2.specialization3}
                      </Link>
                    </li>
                    <li>

                      <Link to={`/CoursePage${id}`}>
                        {item2.specialization4}
                      </Link>
                    </li>
                    <li>

                      <Link to={`/CoursePage${id}`}>
                        {item2.specialization5}
                      </Link>
                    </li>
                    <li>

                      <Link to={`/CoursePage${id}`}>
                        {item2.specialization6}
                      </Link>
                    </li>
                    <li>

                      <Link to={`/CoursePage${id}`}>
                        {item2.specialization7}
                      </Link>
                    </li>
                    <li>

                      <Link to={`/CoursePage${id}`}>
                        {item2.specialization8}
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="course-requirements">
                  <h2 className="course-leranm-tittle">
                    {item2.scopeandcareerProspects}
                  </h2>
                  <div>
                    <li>

                      {item2.scopeandcareer1}
                    </li>
                    <li>

                      {item2.scopeandcareer2}
                    </li>
                    <li>

                      {item2.scopeandcareer3}
                    </li>
                    <li>

                      {item2.scopeandcareer4}
                    </li>
                    <li>

                      {item2.scopeandcareer5}
                    </li>
                    <li>

                      {item2.scopeandcareer6}
                    </li>
                    <li>

                      {item2.scopeandcareer7}
                    </li>
                    <li>

                      {item2.scopeandcareer8}
                    </li>
                    <li>

                      {item2.scopeandcareer9}
                    </li>
                    <li>

                      {item2.scopeandcareer10}
                    </li>
                    <li>

                      {item2.scopeandcareer11}
                    </li>
                  </div>
                </div>

                <div className="course-requirements-child">
                  <h4>{item2.growthandcareer}</h4>

                  <div>
                    <p className="course-description">
                      <b>{item2.growthandcareertitle1}</b>{" "}
                      {item2.growthandcareerdesc1}
                    </p>
                    <p className="course-description">
                      <b>{item2.growthandcareertitle2}</b>{" "}
                      {item2.growthandcareerdesc2}
                    </p>
                    <p className="course-description">
                      <b>{item2.growthandcareertitle3}</b>{" "}
                      {item2.growthandcareerdesc3}
                    </p>
                    <p className="course-description">
                      <b>{item2.growthandcareertitle4}</b>{" "}
                      {item2.growthandcareerdesc4}
                    </p>
                    <p className="course-description">
                      <b>{item2.growthandcareertitle5}</b>{" "}
                      {item2.growthandcareerdesc5}
                    </p>
                    <p className="course-description">
                      <b>{item2.growthandcareertitle6}</b>{" "}
                      {item2.growthandcareerdesc6}
                    </p>
                    <p className="course-description">
                      <b>{item2.growthandcareertitle7}</b>{" "}
                      {item2.growthandcareerdesc7}
                    </p>
                    <p className="course-description">
                      <b>{item2.growthandcareertitle8}</b>{" "}
                      {item2.growthandcareerdesc8}
                    </p>
                    <p className="course-description">
                      <b>{item2.growthandcareertitle9}</b>{" "}
                      {item2.growthandcareerdesc9}
                    </p>
                    <p className="course-description">
                      {" "}
                      {item2.growthandcareerdesc10}
                    </p>
                  </div>
                </div>
                <div className="course-requirements">
                  <h2 className="course-leranm-tittle">{item2.whyonline}</h2>
                  <div>
                    <li className="why-online">

                      {item2.whyonline1}
                    </li>
                    <li className="why-online">

                      {item2.whyonline2}
                    </li>
                    <li className="why-online">

                      {item2.whyonline3}
                    </li>
                    <li className="why-online">

                      {item2.whyonline4}
                    </li>
                    <li className="why-online">

                      {item2.whyonline5}
                    </li>
                    <li className="why-online">

                      {item2.whyonline6}
                    </li>

                    <p>{item2.whyonline7}</p>
                  </div>
                </div>
                <div className="course-requirements">
                  <h2 className="course-leranm-tittle">Admission Procedure</h2>

                  <img src={item2.admissionprocedure} alt="Why Course" />
                </div>
                <div className="course-requirements">
                  <h2 className="course-leranm-tittle">{item2.benefits}</h2>

                  <div>
                    <li>

                      {item2.benefits1}
                    </li>
                    <li>

                      {item2.benefits2}
                    </li>
                    <li>

                      {item2.benefits3}
                    </li>
                    <li>

                      {item2.benefits4}
                    </li>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      ) : (
        <EmptyFile />
      )}
    </>
  );
};

export default PgCourse;
