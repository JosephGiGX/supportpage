import React from 'react'
import { marked } from 'marked'
import Accordion from "../../../components/accord/Accordion"

const GetPost = ({ article }) => {

    const {category, question, answers } = article.fields
    const postAnswers = marked(answers)
    const postQuestion = (question)
    const postCategory = (category)

    return postCategory === 'Get Started'?
        <Accordion title= {postQuestion } content={postAnswers} />:

        null;

}
export default GetPost