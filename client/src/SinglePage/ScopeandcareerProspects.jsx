import { Link } from 'react-router-dom'
import React from 'react'

export const ScopeandcareerProspects = ({ item: { id, scopeandcareerProspects } }) => {
  return (

    <li><i className="fa-solid fa-circle-check"></i><Link to={`/CoursePage${id}`} >{scopeandcareerProspects}</Link></li>

)
}
