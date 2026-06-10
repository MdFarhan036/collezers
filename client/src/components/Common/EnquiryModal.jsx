import React, { useState, useEffect } from "react";
import Selector from "./Selector";
import enqimg1 from "../../assets/brochure.jpg";
import imgIcon from "../../assets/check.png";
import imgIcon1 from "../../assets/male.png";
import imgIcon2 from "../../assets/female.png";
import imgIcon3 from "../../assets/locke.png";
import enqimg2 from "../../assets/fees.jpg";
import { City, Country, State } from "country-state-city";
import enqimg7 from "../../assets/registration.png";
import "./EnquiryModal.css";
import enqimg3 from "../../assets/compare.webp";
import enqimg4 from "../../assets/customer-support-icon.jpg";
import enqimg5 from "../../assets/scholarship.png";
import enqimg6 from "../../assets/deadline.jpg";
export const EnquiryModal = ({ closeModal }) => {
  // useEffect(() => {
  //   document.body.style.overflowY = "hidden";
  //   return () => {
  //     document.body.style.overflowY = "scroll";
  //   }
  // }
  // )
  const [enquiry, setEnquiry] = useState({
    fullname: "",
    email: "",
    phone: "",
    city: "",
    state: "",
    gender: "",
    specialization: "",
  });
  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setEnquiry({
      ...enquiry,
      [name]: value,
    });
  };
  const formSubmit = (e) => {
    e.preventDefault();
    console.log(enquiry);
  };
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


  return (
    <>
      <div className="modal-overlay">
        <div className="modal">
          <button className="close-btn" onClick={closeModal}>
            <i className="fa fa-times" aria-hidden="true"></i>
          </button>

          <div className="modal-cont">
            <div className="enquiry-details">
              <div className="enquirydetail-card">
                <h6 className="enquiry-title">
                  How Collezers helps you in Admission process
                </h6>
                <div className="enquiry-card">
                  <div className="enquiry-content">
                    <img src={enqimg1} alt="" className="" />
                    <p>Brochure details</p></div>
                </div>
                <div className="enquiry-card">
                  <div className="enquiry-content">
                    <img src={enqimg2} alt="" className="" />
                    <p>Fees Details</p></div>
                </div>
                <div className="enquiry-card">
                  <div className="enquiry-content">
                    <img src={enqimg3} alt="" className="" />
                    <p>Compare and Apply</p></div>
                </div>
                <div className="enquiry-card">
                  <div className="enquiry-content">
                    <img src={enqimg4} alt="" className="" />
                    <p>24*7 support</p></div>
                </div>
                <div className="enquiry-card">
                  <div className="enquiry-content">
                    <img src={enqimg5} alt="" className="" />
                    <p>Scholarships</p></div>
                </div>
                <div className="enquiry-card">
                  <div className="enquiry-content">
                    <img src={enqimg6} alt="" className="" />
                    <p>Application deadlines</p></div>
                </div>
              </div>
            </div>
            <div className="enquiry-form">
              <div className="enquiry-head">
                <img src={enqimg7} alt="" className="enquiry-headimg" />
                <div className="enquiry-subhead">
                  <h2>Register now</h2>
                  <h5>"Don't miss out on valuable counselling"</h5>
                </div>
              </div>
              <hr className="border-bottom" />
              <form onSubmit={formSubmit}>
                <div className="enquiry-form-wrapper">
                  <input type="hidden" id="program" name="program" value="" />
                  <div className="enquiry-input-wrapper">
                    <input
                      type="text"
                      placeholder="Full Name"
                      id="name"
                      name="fullname"
                      className="input-border infoPlaceholder"
                      value={enquiry.fullname}
                      required
                      onChange={handleInput}
                      autoComplete="off"
                    />
                  </div>

                  <div className="enquiry-input-wrapper">
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

                  <div className="enquiry-input-wrapper">
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
                  <div className="enquiry-input-wrapper">
                    <input
                      type="text"
                      placeholder="Course"
                      id="course"
                      name="course"
                      className="input-border infoPlaceholder"
                      value={enquiry.course}
                      required
                      onChange={handleInput}
                      autoComplete="off"
                    />
                  </div>
                  <div className="enquiry-input-wrapper">

                    <Selector
                      data={countryData}
                      selected={country}
                      setSelected={setCountry}
                      className=" input-border infoPlaceholder"
                      name="state"
                      id="state"
                      value={enquiry.state}
                      required
                      onChange={handleInput}
                      autoComplete="off"
                    />
                  </div>
                  {state && (
                    <div className="enquiry-input-wrapper">

                      <Selector
                        data={stateData}
                        selected={state}
                        setSelected={setState}
                        className="input-border infoPlaceholder"
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
                    <div className="enquiry-input-wrapper">

                      <Selector
                        data={cityData}
                        selected={city}
                        setSelected={setCity}
                        className="infoPlaceholder input-border"
                        name="city"
                        id="city"
                        value={enquiry.city}
                        required
                        onChange={handleInput}
                        autoComplete="off" />
                    </div>
                  )}
                  <p className="terms-conditions">
                    By submitting this form, you accept and agree to our Terms
                    of Use.
                  </p>


                  <div className="sing-buttom mb-20">
                    <button className="sing-btn sign" type="submit">
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
