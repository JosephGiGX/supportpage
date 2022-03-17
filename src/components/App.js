import React, { useState, useEffect } from "react"
import { Helmet } from "react-helmet"
import { BrowserRouter } from "react-router-dom"


import Paper from "../assets/images/paper.svg"
import Navbar from "../components/navbar/navbar"
import { Backend }from  '../API/backend/backend'
import GenPosts from '../API/backend/post/GenPosts'
import GetPosts from '../API/backend/post/GetPosts'
import FaqsPosts from '../API/backend/post/FaqsPosts'
import SearchBar from "../components/searchBar/searchBar"
import GettingStarted from "../components/getStarted/getStarted"
import styles from "./app.module.css"

const App = () => {

  const [articles, setArticles] = useState([])


  useEffect(() => {
    Backend.getEntries()
      .then((response) => {
        setArticles(response.items)
      }
      )
  }, [])

  return (
    <div className={styles.content}>
      <Helmet>
        <style>{"body { background-color: #0A161C; }"}</style>
      </Helmet>
      <div>
        <BrowserRouter>
          <div className="nav-bar">
            <Navbar />
          </div>
        </BrowserRouter>
      </div>
      <div className={styles.webBody}>
        <div className={styles.title}>
          <h1 className={styles.titleHead}>Welcome to GIGXPAD support</h1>
          <h3 className={styles.subTitle}>Search on any topic or you can browse by category</h3>
        </div>
          <div className={styles.searchContainer}>
          <SearchBar posts={articles} />
        </div>

        <div className={styles.blockTeam}>
      
      <div className={styles.accordion}>
        <div className={styles.heading}>
          <h3>General</h3>
        </div>

          <GenPosts posts={articles} />
        
{/*              <div className={styles.paper}>
            <img src={Paper} alt="Paper" />
            <a href='#' className={styles.paper}>Read More FAQs</a>
          </div>*/}
      </div>

      <div className={styles.accordion}>
        <div className={styles.heading}>
          <h3>Get Started</h3>
        </div>

        <GetPosts posts={articles} />


{/*              <div className={styles.paper}>
            <img src={Paper} alt="Paper" />
            <a href='#' className={styles.paper}>Read More FAQs</a>
          </div>*/}
      </div>

      <div className={styles.accordion}>
        <div className={styles.heading}>
          <h3>FAQs</h3>
        </div>

     <FaqsPosts posts={articles} />

      


{/*              <div className={styles.paper}>
            <img src={Paper} alt="Paper" />
            <a href='#' className={styles.paper}>Read More FAQs</a>
          </div>*/}
      </div>


    </div>
        <div className={styles.gettingStarted}>
            <BrowserRouter>
              <GettingStarted />
            </BrowserRouter>
          </div>
      </div>
    </div>
  )
}
export default App;
