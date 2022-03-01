import data from "../assets/data.json"
import React from "react"
import { Link } from "gatsby"
import * as containerStyles from "../assets/css/card.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircle, faStar } from "@fortawesome/free-solid-svg-icons"

export default function MainPage() {
  const result = data.questions.firstPage.map(question => {
    if (question.subtitle) {
      return (
        <div className={containerStyles.questions}>
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
        <div className={containerStyles.questions}>
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

  const pagesList = (
    <div className={containerStyles.pagesList}>
      <div className={containerStyles.vl}>
        <div className={containerStyles.flex}>
          <FontAwesomeIcon
            icon={faCircle}
            className={containerStyles.circle2}
          />
          <h4 className={containerStyles.paddingTop}>Welcome Page</h4>
        </div>
      </div>
    </div>
  )

  return (
    <>
      <div className={containerStyles.topText}>
        <h1>Personal Information</h1>
        <p>Help us get to know you by answering the following questions</p>
      </div>
      <div className={containerStyles.flex}>
        <div className={containerStyles.card}>
          {result}
          <div>
            <button>
              <Link to="/2">Next</Link>
            </button>
          </div>
        </div>
        <div>{pagesList}</div>
      </div>
    </>
  )
}
