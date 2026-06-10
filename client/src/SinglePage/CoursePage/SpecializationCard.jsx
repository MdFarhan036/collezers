import React from 'react'
import { Link } from 'react-router-dom'

export const SpecializationCard = ({ item: { id, title } }) => {
    return (

        <div>
            <Link to={`/CoursePage/${id}`}>
                {title}
            </Link>

        </div>

    )
}
