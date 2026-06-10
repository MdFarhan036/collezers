import React, { useState } from "react";
import Modal from "../../PartnersPage/Modal";
import "./FeatureModal.css";
import { Featuredata } from "../Data/SData";
import featureImg from "../../assets/category-1.svg";
import featureImg1 from "../../assets/category-2.svg";
import featureImg2 from "../../assets/category-2.svg";

export const FeatureCard = ({
  item: {
    id,
    featureTitle,
    featureImg,
    featureDescrip1,
    featureDescrip2,
    featureDescrip3,
    featureDescrip4,
    featureDescrip5,
    featureDescrip6,
    featureDescrip7,
    featureDescrip8,
  },
}) => {
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <div className="">
        <div className="category-card"  onClick={openModal}>
          <div className="card-icon">
            {/* <img
              src={featureImg}
              alt="Online Degree Programs"
              className="img"
            /> */}
          </div>

          <h3 className="h3">
            <a href="#" className="card-title">
              {featureTitle}
            </a>
          </h3>
        </div>
        <Modal isOpen={isModalOpen} onClose={closeModal}>
          
          <div className="feature-nodal">
            <h2>{featureTitle}</h2>
            <li>{featureDescrip1}</li>
            <li>{featureDescrip2}</li>
            <li>{featureDescrip3}</li>
            <li>{featureDescrip4}</li>
            <li>{featureDescrip5}</li>
            <li>{featureDescrip6}</li>
            <li>{featureDescrip7}</li>
            <li>{featureDescrip8}</li>
          </div>
        </Modal>
      </div>
    </>
  );
};
