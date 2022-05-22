import React from 'react'
import Button from './Button'
import Styles from './card.module.css'



export default function CardCreater({ date, logo, heading, subheading, devices, color }) {
  console.log(date)
  return (

    <div  className={Styles.maincontainer}>
      <div className={Styles.container} style={{ background: color }}>
        <div className={Styles.leftContent}>
          <p>{date}</p>
          <Button text={"Case Study"} />
          <h1>{heading}</h1>
          <h1>{subheading}</h1>
          <p>{devices}</p>
        </div>
        <div className={Styles.rightContent}>
          <div>
            <img className={Styles.logoImg} src={logo} alt={heading} />
          </div>
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
            </svg>
          </div>

        </div>
      </div>


    </div>
  )
}
