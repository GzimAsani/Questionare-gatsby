import data from "../assets/data.json"
import PageInformation from "./PageInformation"
import React from "react"
import { Link } from "gatsby"
import * as containerStyles from "../assets/css/card.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircle, faStar } from "@fortawesome/free-solid-svg-icons"

export default function MainPage() {
  const result = data.questions.firstPage.map(question => {
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
      <div className={containerStyles.topText}>
        <h1 className={containerStyles.header}>Personal Information</h1>
        <p>Help us get to know you by answering the following questions</p>
      </div>
      <div className={containerStyles.flex}>
        <div className={containerStyles.card}>
          {result}
          <div className={`${containerStyles.flex} ${containerStyles.cece}`}>
            <Link className={containerStyles.textDecoration} to="/1">
              <button className={containerStyles.previousBtn}>Previous</button>
            </Link>
            <Link className={containerStyles.textDecoration} to="/2">
              <button className={containerStyles.nextBtn}>Next</button>
            </Link>
          </div>
        </div>
        <div className={containerStyles.pagesList}>
          <div className={containerStyles.vl}>
            <PageInformation id={1} />
          </div>
        </div>
      </div>
    </>
  )
}
