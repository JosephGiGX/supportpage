import React, { useState, useRef } from "react"
import Chevron from "./Chevron"

// import "./Accordion.css"
import styles from "./accord.module.css"

function Accordion(props) {
  const [setActive, setActiveState] = useState("")
  const [setHeight, setHeightState] = useState("0px")
  const [setRotate, setRotateState] = useState(styles.accordion__icon)

  const content = useRef(null)

  function toggleAccordion() {
    setActiveState(setActive === "" ? styles.active : "")
    setHeightState(
      setActive === styles.active ? "0px" : `${content.current.scrollHeight}px`
    )
    setRotateState(
      setActive === styles.active
        ? styles.accordion__icon
        : `${styles.accordion__icon} ${styles.rotate}`
    )
  }

  return (
    <div className={styles.accordion__section}>
      <button
        className={`${styles.accordion} ${setActive}`}
        onClick={toggleAccordion}
      >
        <p className={styles.accordion__title}>{props.title}</p>
        <Chevron className={`${setRotate}`} width={10} fill={"#777"} />
      </button>
      <div
        ref={content}
        style={{ maxHeight: `${setHeight}` }}
        className={styles.accordion__content}
      >
        <div
          className={styles.accordion__text}
          dangerouslySetInnerHTML={{ __html: props.content }}
        />
        <p className={styles.collapseSubContent}>
          Was this helpful? <span>Yes or No</span>
        </p>
      </div>
    </div>
  )
}

export default Accordion
