import data from "../assets/data.json"
import Navbar from "../components/Navbar"
import PageInformation from "../components/PageInformation"
import React, { useState } from "react"
import { Link } from "gatsby"
import * as containerStyles from "../assets/css/card.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faChevronDown,
  faCircle,
  faStar,
} from "@fortawesome/free-solid-svg-icons"
import styled from "styled-components"

const DropDownHeader = styled("div")`
  border: 1px solid black;
  display: flex;
  justify-content: space-between;
`

const DropdownList = styled("li")`
  margin-top: 1rem;
  list-style-type: none;
`

const ThirdPage = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isOpen2, setIsOpen2] = useState(false)
  const [selectedOption, setSelectedOption] = useState(null)
  const [selectedOption2, setSelectedOption2] = useState(null)

  const toggling = () => setIsOpen(!isOpen)
  const toggling2 = () => setIsOpen2(!isOpen)

  const onOptionClicked = value => () => {
    setSelectedOption(value)
    setIsOpen(false)
    console.log(selectedOption)
  }

  const onOptionClicked2 = value => () => {
    setSelectedOption2(value)
    setIsOpen2(false)
    console.log(selectedOption2)
  }

  const result = data.questions.thirdPage.map(question => {
    if (question.title && question.results) {
      return (
        <div key={question.title} className={containerStyles.questions}>
          <div className={containerStyles.relative}>
            <FontAwesomeIcon
              icon={faCircle}
              className={containerStyles.circle}
            />
            <div className={containerStyles.flex}>
              <h4>{question.title}</h4>
              {question.required && (
                <FontAwesomeIcon
                  icon={faStar}
                  className={containerStyles.star}
                />
              )}
            </div>
            <p className={containerStyles.marginB}>{question.subtitle}</p>
          </div>
          {question.results.map(result => {
            return (
              <form>
                <div className={containerStyles.form}>
                  <input
                    type="radio"
                    id="html"
                    name="fav_language"
                    className={containerStyles.input}
                    value={`${result}`}
                  />
                  <label htmlFor="html">{result}</label>
                </div>
              </form>
            )
          })}
        </div>
      )
    } else if (question.title && question.firstDropdown) {
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
          </div>
          <div>
            <DropDownHeader onClick={toggling}>
              {selectedOption ? selectedOption : "Choose"}
              <FontAwesomeIcon icon={faChevronDown} />
            </DropDownHeader>
            {isOpen && (
              <div>
                <ul>
                  {question.firstDropdown.years.map((data, index) => {
                    return (
                      <DropdownList onClick={onOptionClicked(data)} key={index}>
                        {data}
                      </DropdownList>
                    )
                  })}
                </ul>
              </div>
            )}
          </div>
        </div>
      )
    } else if (question.title && question.secondDropdown) {
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
          </div>
          <div>
            <DropDownHeader onClick={toggling2}>
              {selectedOption2 ? selectedOption2 : "Choose"}
              <FontAwesomeIcon icon={faChevronDown} />
            </DropDownHeader>
            {isOpen2 && (
              <div>
                <ul>
                  {question.secondDropdown.years.map((data, index) => {
                    return (
                      <DropdownList
                        key={index}
                        onClick={onOptionClicked2(data)}
                      >
                        {data}
                      </DropdownList>
                    )
                  })}
                </ul>
              </div>
            )}
          </div>
        </div>
      )
    } else if (question.subtitle) {
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
        <div key={question.title}>
          <h4>{question.title}</h4>
          <input />
        </div>
      )
    }
  })
  return (
    <div className={containerStyles.relative}>
      <Navbar />
      <div className={containerStyles.topText}>
        <h1 className={containerStyles.header}>Experience</h1>
        <p>Help us get to know you by answering the following questions</p>
      </div>
      <div className={containerStyles.flex}>
        <div className={containerStyles.card}>
          {result}
          <div className={`${containerStyles.flex} ${containerStyles.cece}`}>
            <Link className={containerStyles.textDecoration} to="/2">
              <button className={containerStyles.previousBtn}>Previous</button>
            </Link>
            <Link className={containerStyles.textDecoration} to="/3">
              <button className={containerStyles.nextBtn}>Next</button>
            </Link>
          </div>
        </div>
        <div className={containerStyles.pagesList}>
          <div className={containerStyles.vl}>
            <PageInformation id={3} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ThirdPage
