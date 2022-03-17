import React, { useState } from "react"
import SearchIcon from "../../assets/images/search.svg"
import SearchList from '../searchBar/searchList';

import styles from "./searchbar.module.css"

const SearchBar = ({posts}) => {

  const [searchField, setSearchField] = useState("");


  const Questions = posts.filter(
    questionList => {
      return (
        questionList.postQuestions.toLowerCase().includes(searchField.toLowerCase()) || questionList.postAnswer.toLowerCase().includes(searchField.toLowerCase())
      );
    }
  );

  const handleChange = e => {
    setSearchField(e.target.value);
  };

  function searchList() {
    return (
        <SearchList posts={Questions} />
    );
  }

  return (

    <div>
    <div className="search-bar">
      <form className={styles.formStyle}>
        <img src={SearchIcon} alt="" />
        <input
          className={styles.inputField}
          type = "search" 
          placeholder="What can we help you with?"
          onChange={handleChange}
        />
      </form>
    </div>
      {searchList()}
    </div>

  )
}

export default SearchBar
