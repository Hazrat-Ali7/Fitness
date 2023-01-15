import React from 'react'
import { Link } from 'react-router-dom'

const ServiceCard = (props) => {
  return (
    <div className='service-card'>
      <img src={props.image} alt="" />
      <h2>{props.work}</h2>
      <p>
        {props.desc}</p>
      <div className='service-card-desc'>
        <span><h2>$ {props.price} / </h2> 6 Month</span>
      <Link to='/checkout'> Enroll Now</Link>
      </div>
    </div>
  )
}

export default ServiceCard