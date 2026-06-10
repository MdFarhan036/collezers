import React, { useState, useEffect } from "react";
import bbaspecialization from "./SpecializationPageData";
import HeadTitle from '../../components/HeadTitle/HeadTitle';
import { useParams } from "react-router-dom";
import EmptyFile from "../../components/Empty/EmptyFile";

export const CoursePage = () => {
  const [specializationitem, setSpecializationitem] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    let specializationitem = bbaspecialization.find((specializationitem) => specializationitem.id === parseInt(id));
    if (specializationitem) {
      setSpecializationitem(specializationitem);
    }
  }, [id]);

  return (
    <>
      <HeadTitle />

      {specializationitem ? (
        <div className="main-container">
          <section className="course-detalis-area">
            <div className="row">
              <div className="course-detalis-wrapper ">
                <div className="course-heading">
                  <h1 className="">{specializationitem.coursename}</h1>
                </div>


                <div className="course-description">

                  <div className="">
                    <h2 className="course-leranm-tittle">{specializationitem.courseTitle}</h2>
                  </div>
                  <p>{specializationitem.courseDesc}</p>
                </div>


                <div className="course-learn">
                  <div className="">
                    <h2 className="">Core subjects</h2>
                  </div>
                  <p className="course-components">
                    <b>{specializationitem.coresubjectstitle1}</b>{specializationitem.coresubjectsdescription1}
                  </p>
                  <p className="course-components">
                    <b>{specializationitem.coresubjectstitle2}</b>{specializationitem.coresubjectsdescription2}
                  </p>
                  <p className="course-components">
                    <b>{specializationitem.coresubjectstitle3}</b>{specializationitem.coresubjectsdescription3}
                  </p>
                  <p className="course-components">
                    <b>{specializationitem.coresubjectstitle4}</b>{specializationitem.coresubjectsdescription4}
                  </p>
                  <p className="course-components">
                    <b>{specializationitem.coresubjectstitle5}</b>{specializationitem.coresubjectsdescription5}
                  </p>
                  <p className="course-components">
                    <b>{specializationitem.coresubjectstitle6}</b>{specializationitem.coresubjectsdescription6}
                  </p>
                  <p className="course-components">
                    <b>{specializationitem.coresubjectstitle7}</b>{specializationitem.coresubjectsdescription7}
                  </p>
                  <p className="course-components">
                    <b>{specializationitem.coresubjectstitle8}</b>{specializationitem.coresubjectsdescription8}
                  </p>
                  <p className="course-components">
                    <b>{specializationitem.coresubjectstitle9}</b>{specializationitem.coresubjectsdescription9}
                  </p>
                  <p className="course-components">
                    <b>{specializationitem.coresubjectstitle10}</b>{specializationitem.coresubjectsdescription10}
                  </p>

                  {/* <Accordion /> */}
                </div>
                <div className="course-learn">
                  <div className="">
                    <h2 className="">Specialized Courses:</h2>
                  </div>
                  <p className="course-components">
                    <b>{specializationitem.specializedcoursetitle1}</b>{specializationitem.specializedcoursedescription1}
                  </p>
                  <p className="course-components">
                    <b>{specializationitem.specializedcoursetitle2}</b>{specializationitem.specializedcoursedescription2}
                  </p>
                  <p className="course-components">
                    <b>{specializationitem.specializedcoursetitle3}</b>{specializationitem.specializedcoursedescription3}
                  </p>
                  <p className="course-components">
                    <b>{specializationitem.specializedcoursetitle4}</b>{specializationitem.specializedcoursedescription4}
                  </p>
                  <p className="course-components">
                    <b>{specializationitem.specializedcoursetitle5}</b>{specializationitem.specializedcoursedescription5}
                  </p>
                  <div className="course-learn">
                    <div className="">
                      <h2 className="">{specializationitem.internshiptitle}</h2>
                    </div>
                    <p className="course-components">
                      {specializationitem.internshipdescription}
                    </p>
                  </div>
                  <div className="course-learn">
                    <div className="">
                      <h2 className="">{specializationitem.careeropportunitiestitle}</h2>
                    </div>
                    <p className="course-components">
                      {specializationitem.careeropportunitiesdescription1}
                    </p>
                    <p className="course-components">
                      {specializationitem.careeropportunitiesdescription2}
                    </p>
                    <p className="course-components">
                      {specializationitem.careeropportunitiesdescription3}
                    </p>
                    <p className="course-components">
                      {specializationitem.careeropportunitiesdescription4}
                    </p>
                    <p className="course-components">
                      {specializationitem.careeropportunitiesdescription5}
                    </p>
                    <p className="course-components">
                      {specializationitem.careeropportunitiesdescription6}
                    </p>
                    <p className="course-components">
                      {specializationitem.careeropportunitiesdescription7}
                    </p>
                    <p className="course-components">
                      {specializationitem.careeropportunitiesdescription8}
                    </p>
                  </div>
                  <div className="course-learn">
                    <div className="">
                      <h2 className="">{specializationitem.whypursuespecializationtitle}</h2>
                    </div>
                    <p className="course-components">
                      {specializationitem.whypursuespecializationdescription1}
                    </p>
                    <p className="course-components">
                      {specializationitem.whypursuespecializationdescription2}
                    </p>
                    <p className="course-components">
                      {specializationitem.whypursuespecializationdescription3}
                    </p>
                    <p className="course-components">
                      {specializationitem.whypursuespecializationdescription4}
                    </p>
                    <p className="course-components">
                      {specializationitem.whypursuespecializationdescription5}
                    </p>
                    <p className="course-components">
                      {specializationitem.whypursuespecializationdescription6}
                    </p>
                    <p className="course-components">
                      {specializationitem.whypursuespecializationdescription7}
                    </p>
                    <p className="course-components">
                      {specializationitem.whypursuespecializationdescription8}
                    </p>
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
  )
}
