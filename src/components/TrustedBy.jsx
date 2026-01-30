import React from 'react'
import assets from '../assets/assets'
import { company_logos } from '../assets/assets'
function TrustedBy() {
  return (
  <div>
      <p>Trusted by Leading Companies</p>
      <div>
        {company_logos.map((index,logo)=>{
          <img key={index} src={logo} alt="" />
        })}
      </div>
    </div>
  )
}

export default TrustedBy
