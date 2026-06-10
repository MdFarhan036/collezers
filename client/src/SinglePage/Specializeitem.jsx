import React from 'react'
import { Link } from "react-router-dom";


export const Specializeitem = ({ specializeitem: { id, name } }) => {
    return (
        <div>
            <Link to={`/Specialization/${id}`}>
                <li>
                    {name}
                </li>
            </Link>
        </div>
    )
}
