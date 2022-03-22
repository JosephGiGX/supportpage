import React, { useState } from "react"
import SearchIcon from "../../assets/images/search.svg"
import SearchList from '../searchBar/searchList';

import styles from "./searchbar.module.css"

const SearchBar = ({posts}) => {
console.log(posts);

  const [searchField, setSearchField] = useState("");
  const [matchedData, setMatchedData] = useState([]);

console.log(searchField, searchField.length);
  // const Questions = posts.filter(
  //   questionList => {
  //     return (
  //        questionList.postQuestions.includes(searchField.toLowerCase()) || questionList.postAnswer.includes(searchField.toLowerCase())
      
  //     );
  //   }
  // );


  // function Search(){
    
  // }

  const handleChange = e => {
    setSearchField(e.target.value);
    const lowerCased = searchField.toLowerCase();
    const resultArr = posts.filter((item) => item.fields.question.toLowerCase().includes(lowerCased))
console.log(resultArr);

  return setMatchedData(resultArr)


    

  };

  // function SearchResult(matchedData) {
  //   return (
       
  //   );
  // }

  return (

    <div style={{position:'relative',}}>
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
    <div className={styles.searchResult}>  {matchedData.length > 0 && searchField.length !== 0 &&  <SearchList posts={matchedData} />} </div>

    </div>

  )
}

export default SearchBar
