import React, { useState, useEffect } from 'react'
import imgIcon3 from "../../assets/locke.png";
import imgIcon from "../../assets/check.png";
import imgIcon1 from "../../assets/male.png";
import imgIcon2 from "../../assets/female.png";
import { City, Country, State } from "country-state-city";
// import bbaspecialization from "../../SinglePage/CoursePage/SpecializationPageData";
import Selector from "./Selector";
export const FormComponent = ({ handleFormSubmit }) => {
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
        console.log(enquiry);
        handleFormSubmit(enquiry)
    }
    return (
        <>
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
                                <img src={imgIcon} /> Get Approved University</span>
                            <span className="">
                                <img src={imgIcon} />
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
                                    className="signup-checkbo input-border infoPlaceholder"
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

                    {/* <select
                        className="form-control  txt input-border infoPlaceholder"
                        name="specialization"
                        id="specialization"
                        value={enquiry.specialization}
                        required
                        onChange={handleInput}
                        autoComplete="off"
                    >
                        <option>Select Specialization</option>
                        <option>Not decided yet</option>

                        <option value="General">General</option>
                        <option value="HRM">HRM</option>
                        <option value="IT">IT</option>
                        <option value="Marketing">Marketing</option>
                        <option value="Finance">Finance</option>
                        <option value="Agri Business">Agri Business</option>
                        <option value="Risk Management">Risk Management</option>
                        <option value="International Business">
                            International Business
                        </option>
                        <option value="Retail">Retail</option>
                        <option value="Operations">Operations</option>
                        <option value="Data Science">Data Science</option>
                        <option value="Business Analytics & Intelligence">
                            Business Analytics & Intelligence
                        </option>
                        <option value="Digital Marketing">Digital Marketing</option>
                        <option value="Branding & Advertising Management">
                            Branding & Advertising Management
                        </option>
                        <option value="Entreprenuership Management">
                            Entreprenuership Management
                        </option>
                        <option value="Foreign Trade & Global Business Management">
                            Foreign Trade & Global Business Management
                        </option>
                        <option value="Ecommerce  Marketing Management">
                            Ecommerce Marketing Management
                        </option>
                        <option value="Foreign Trade & Global Business Management">
                            Foreign Trade & Global Business Management
                        </option>
                        <option value="Health Care Management">
                            Health Care Management
                        </option>
                        <option value="Mass Communication">
                            Mass Communication
                        </option>
                        <option value="Investment Banking & Wealth Management">
                            Investment Banking & Wealth Management
                        </option>
                        <option value="Media & Entertainment Management">
                            Media & Entertainment Management
                        </option>
                        <option value="Project Leadership & Management">
                            Project Leadership & Management
                        </option>
                        <option value="Strategic Management">
                            Strategic Management
                        </option>
                        <option value="Operations & Production Management">
                            Operations & Production Management
                        </option>
                        <option value="Banking">Banking</option>
                        <option value="Business Leadership">
                            Business Leadership
                        </option>
                        <option value="Financial Planning & Analysis">
                            Financial Planning & Analysis
                        </option>
                        <option value="Supply Chain Management">
                            Supply Chain Management
                        </option>
                        <option value="Analytics & Data Science">
                            Analytics & Data Science
                        </option>
                        <option value="IT and Fintech">IT and Fintech</option>
                        <option value="Information Systems Management">
                            Information Systems Management
                        </option>
                        <option value="Total  Quality Management">
                            Total Quality Management
                        </option>

                        <option value="ECONOMICS">ECONOMICS</option>
                        <option value="MATHS">MATHS</option>
                        <option value="POLITICAL SCIENCE">POLITICAL SCIENCE</option>
                        <option value="SOCIOLOGY">SOCIOLOGY</option>
                        <option value="ENGLISH">ENGLISH</option>
                        <option value="JOURNALISM & MASS COMMUNICATION">
                            JOURNALISM & MASS COMMUNICATION
                        </option>
                        <option value="HISTORY">HISTORY</option>

                        <option value="MATHEMATICS">MATHEMATICS</option>
                        <option value="DATA  SCIENCE">DATA SCIENCE</option>

                        <option value="Accounting">Accounting</option>

                        <option value="MCA">MCA</option>

                        <option value="GENERAL">GENERAL</option>
                        <option value="ARTIFICIAL INTELLIGENCE">
                            ARTIFICIAL INTELLIGENCE
                        </option>
                        <option value="DATA SCIENCE">DATA SCIENCE</option>
                        <option value="CLOUD TECHNOLOGY & CYBER SECURITY">
                            CLOUD TECHNOLOGY & CYBER SECURITY
                        </option>
                        <option value="RPA">RPA</option>
                        <option value="BLOCKCHAIN">BLOCKCHAIN</option>
                        <option value="UX">UX</option>

                        <option value="B.COM">B.COM</option>

                        <option value="GENERAL">GENERAL</option>
                        <option value="AVIATION">AVIATION</option>
                        <option value="ENTERPRISE RISK">ENTERPRISE RISK</option>
                        <option value="DIGITAL MARKETING">DIGITAL MARKETING</option>
                        <option value="RETAIL">RETAIL</option>
                        <option value="FINTECH">FINTECH</option>
                        <option value="TRAVEL  & TOURISM">TRAVEL & TOURISM</option>
                        <option value="BANKING FINANCE & INSURANCE">
                            BANKING FINANCE & INSURANCE
                        </option>
                        <option value="ENTREPRENEURSHIP">ENTREPRENEURSHIP</option>
                        <option value="HUMAN  CAPITAL  MANAGEMENT">
                            HUMAN CAPITAL MANAGEMENT
                        </option>
                        <option value="BUSINESS ANALYTICS">
                            BUSINESS ANALYTICS
                        </option>
                        <option value="INTERNATIONAL FINANCE">
                            INTERNATIONAL FINANCE
                        </option>

                        <option value="GENERAL">GENERAL</option>
                        <option value="JOURNALISM & MASS COMMUNICATION">
                            JOURNALISM & MASS COMMUNICATION
                        </option>

                        <option value="GENERAL">GENERAL</option>
                        <option value="JOURNALISM & MASS COMMUNICATION">
                            JOURNALISM & MASS COMMUNICATION
                        </option>
                    </select> */}

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

        </>
    )
}
