import React from "react"
import secondData from "../assets/data2.json"
import * as containerStyles from "../assets/css/card.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircle } from "@fortawesome/free-solid-svg-icons"
import { Link } from "gatsby"

const PageInformation = props => {
  const pagesList = secondData.pages.map(data => {
    return (
      <div key={data.title} className={containerStyles.flex}>
        <FontAwesomeIcon
          icon={faCircle}
          className={
            data.id === props.id
              ? `${containerStyles.circle2} ${containerStyles.relative} ${containerStyles.green}`
              : `${containerStyles.circle2} ${containerStyles.relative}`
          }
        />
        <p
          className={`${containerStyles.pageText} ${containerStyles.relative}`}
        >
          <Link className={containerStyles.textDecoration2} to={`/${data.id}`}>
            {data.title}
          </Link>
        </p>
      </div>
    )
  })
  return <div>{pagesList}</div>
}

export default PageInformation
