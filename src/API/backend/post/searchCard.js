import React from 'react'
import { marked } from 'marked'
import Accordion from "../../../components/accord/Accordion"

const SearchCard = ({ article }) => {

    const { question, answers } = article.fields
    const postAnswers = marked(answers)
    const postQuestion = (question)

    console.log(postQuestion)

    return <Accordion title= {postQuestion } content={postAnswers} />

}
export default SearchCard