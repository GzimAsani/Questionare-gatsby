import data from "../assets/data.json"
import Navbar from "../components/Navbar"
import React from "react"
import PageInformation from "../components/PageInformation"
import { Link } from "gatsby"
import * as containerStyles from "../assets/css/card.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircle, faStar } from "@fortawesome/free-solid-svg-icons"

const SecondPage = () => {
  const result = data.questions.secondPage.map(question => {
    if (question.subtitle) {
      return (
        <div key={question.title} className={containerStyles.questions}>
          <div className={containerStyles.relative}>
            <FontAwesomeIcon
              icon={faCircle}
              className={containerStyles.circle}
            />
            <div className={containerStyles.flex}>
              <h4 className={containerStyles.marginB}>{question.title}</h4>
              {question.required && (
                <FontAwesomeIcon
                  icon={faStar}
                  className={containerStyles.star}
                />
              )}
            </div>
            <p className={containerStyles.marginB}>{question.subtitle}</p>
            <input />
          </div>
        </div>
      )
    } else {
      return (
        <div key={question.title} className={containerStyles.questions}>
          <div className={containerStyles.relative}>
            <FontAwesomeIcon
              icon={faCircle}
              className={containerStyles.circle}
            />
            <div className={containerStyles.flex}>
              <h4 className={containerStyles.marginB}>{question.title}</h4>
              {question.required && (
                <FontAwesomeIcon
                  icon={faStar}
                  className={containerStyles.star}
                />
              )}
            </div>
          </div>
          <input />
        </div>
      )
    }
  })

  return (
    <>
      <Navbar />
      <div className={containerStyles.topText}>
        <h1 className={containerStyles.header}>Web Presence</h1>
        <p>
          If you would be so kind to share, we would like to learn more about
          you through your web presence
        </p>
      </div>
      <div className={containerStyles.flex}>
        <div className={containerStyles.card}>
          {result}
          <div className={`${containerStyles.flex} ${containerStyles.cece}`}>
            <Link className={containerStyles.textDecoration} to="/1">
              <button className={containerStyles.previousBtn}>Previous</button>
            </Link>
            <Link className={containerStyles.textDecoration} to="/3">
              <button className={containerStyles.nextBtn}>Next</button>
            </Link>
          </div>
        </div>
        <div className={containerStyles.pagesList}>
          <div className={containerStyles.vl}>
            <PageInformation id={2} />
          </div>
        </div>
      </div>
    </>
  )
}

export default SecondPage
