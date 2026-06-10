import React from 'react'
import { Link } from "react-router-dom"

export const Coursepg = ({ item: { id, title } }) => {
    return (
        <div className="course-box">
            <Link to={`/PgCourse/${id}`} className='blogItem-link'>
            <i className="fa-solid fa-user-graduate"></i>
                <p className='course-item'>{title}</p>
            </Link>

        </div>
    )
}
