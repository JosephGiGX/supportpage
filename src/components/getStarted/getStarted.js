import React from "react"
import Telegram from "../../assets/images/telegram.svg"

import styles from "./getStarted.module.css"

const GettingStarted = () => {
  return (
    <div className={styles.content}>
      <div className={styles.title}>
        <h3>Getting Started</h3>
      </div>
      <div className={styles.description}>
        <p>
        GIGXPAD is the all-in-one app to store, earn, invest and spend your crypto-assets. You can also connect with us in our Telegram community
        </p>
      </div>
      <div className={styles.link}>
        <a href="https://t.me/gigxcommunity/" target="_blank" rel='noreferer' className={styles.linked}>
          <img src={Telegram} alt="link" width="20px" height="20px" />
          <label for="link" className={styles.label}>
          <span className={styles.link}> GIGX Community </span>
          </label>
          </a>
      </div>
    </div>
  )
}

export default GettingStarted
