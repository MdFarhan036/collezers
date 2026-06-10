import React, { useState } from 'react'
import { TeamCard } from './TeamCard'
import { Teamdata } from '../Data/SData'

export const Team = () => {
    const [teamdetail, setTeamdetail] = useState(Teamdata)

    return (

        <div className="container">
            <section className="ourteam" id="teams">
                <p className="team-title">Our Team</p>
                <h2 className="team-subtitle">Connect with us</h2>
                <div className='team-container'>
                    {teamdetail.map((item) => {
                        return <TeamCard key={item.id} item={item} />
                    })}
                </div>
            </section>
        </div>



    )
}
