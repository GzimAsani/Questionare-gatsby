import data from "../assets/data.json"
import Navbar from "../components/Navbar"
import React from "react"
import { Link } from "gatsby"
import * as containerStyles from "../assets/css/card.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircle, faStar } from "@fortawesome/free-solid-svg-icons"

const SecondPage = () => {
  const result = data.questions.secondPage.map(question => {
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

  return (
    <>
      <Navbar />
      <div className={containerStyles.topText}>
        <h1>Web Presence</h1>
        <p>
          If you would be so kind to share, we would like to learn more about
          you through your web presence
        </p>
      </div>
      <div className={containerStyles.card}>
        {result}
        <div>
          <button>
            <Link to="/3">Next</Link>
          </button>
        </div>
      </div>
    </>
  )
}

export default SecondPage
