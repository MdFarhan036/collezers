import React from 'react'

import { Link } from 'react-router-dom'
export const TeamCard = ({ item: { id, teamimg, teamtitle, qualif, role, experience, morebutton } }) => {
    return (

        <div className="team-card">
            <div className="card-banner img-holder" >
                <img src={teamimg}
                    alt="teamimg1" className="teamimg1" />
            </div>

            <div className="card-content">
                <h3 className="teamtitle">
                    {teamtitle}
                </h3>
                <div className="metalist">
                    <span className="qualif">
                        {qualif}
                    </span>
                    <span className="role">
                        {role}
                    </span>
                </div>

                <p className="experience"> {experience} </p>
                <button className="more-about"> <Link className="btn-content" to='/'>{morebutton} </Link></button>
            </div>
        </div>
    )
}
