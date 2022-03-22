import React from 'react'
import FaqsPost from './FaqsPost'

const FaqsPosts = ({ posts }) => {
    return (
        <div>
            {posts.map((article, index) => <FaqsPost article={article} key={index} />)}
        </div>
    )
}

export default FaqsPosts