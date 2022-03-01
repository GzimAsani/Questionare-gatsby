import data from "../assets/data.json"
import React, { useState } from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronDown } from "@fortawesome/free-solid-svg-icons"

import styled from "styled-components"
const Main = styled("div")`
  font-family: sans-serif;
`
const DropDownContainer = styled("div")``
const DropDownHeader = styled("div")`
  color: blue;
  border: 1px solid black;
`
const DropDownListContainer = styled("div")``
const DropDownList = styled("ul")``
const ListItem = styled("li")``

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
        <div>
          <h4>{question.title}</h4>
          <p>{question.subtitle}</p>
          {question.results.map(result => {
            return (
              <form>
                <input
                  type="radio"
                  id="html"
                  name="fav_language"
                  value={`${result}`}
                />
                  <label htmlFor="html">{result}</label>
                <br></br>
              </form>
            )
          })}
        </div>
      )
    } else if (question.title && question.firstDropdown) {
      return (
        <Main>
          <h4>{question.title}</h4>
          <p>{question.subtitle}</p>
          <DropDownContainer>
            <DropDownHeader onClick={toggling}>
              {selectedOption ? selectedOption : "Choose"}
              <FontAwesomeIcon icon={faChevronDown} />
            </DropDownHeader>
            {isOpen && (
              <DropDownListContainer>
                <DropDownList>
                  {console.log(question.dropdown)}
                  {question.firstDropdown.years.map(data => {
                    return (
                      <ListItem
                        onClick={onOptionClicked(data)}
                        key={Math.random()}
                      >
                        {data}
                      </ListItem>
                    )
                  })}
                </DropDownList>
              </DropDownListContainer>
            )}
          </DropDownContainer>
        </Main>
      )
    } else if (question.title && question.secondDropdown) {
      return (
        <Main>
          <h4>{question.title}</h4>
          <p>{question.subtitle}</p>
          <DropDownContainer>
            <DropDownHeader onClick={toggling2}>
              {selectedOption2 ? selectedOption2 : "Choose"}
              <FontAwesomeIcon icon={faChevronDown} />
            </DropDownHeader>
            {isOpen2 && (
              <DropDownListContainer>
                <DropDownList>
                  {console.log(question.dropdown)}
                  {question.secondDropdown.years.map(data => {
                    return (
                      <ListItem
                        onClick={onOptionClicked2(data)}
                        key={Math.random()}
                      >
                        {data}
                      </ListItem>
                    )
                  })}
                </DropDownList>
              </DropDownListContainer>
            )}
          </DropDownContainer>
        </Main>
      )
    } else if (question.subtitle) {
      return (
        <div>
          <h4>{question.title}</h4>
          <p>{question.subtitle}</p>
          <input />
        </div>
      )
    } else {
      return (
        <div>
          <h4>{question.title}</h4>
          <input />
        </div>
      )
    }
  })
  return <div>{result}</div>
}

export default ThirdPage
