import React from 'react'
import { Link } from "react-router-dom"

export const PartnersCard = (props) => {
    return (
        <div className="partner-box">
            <div className='blogItem-link'>
                <div className="card-banner img-holder" >
                    <img src={props.partnersimg}
                        alt="partnersimg1" className="partnersimg" />
                </div>
                <div className="partners-content">
                    <h3 className="partnerstitle">
                        {props.partnerstitle}
                    </h3>
                    <p>{props.partnersname}</p>
                </div>
            </div>

        </div>
    )
}
