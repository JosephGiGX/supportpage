import React from 'react'
import GenPost from './GenPost'

const GenPosts = ({ posts }) => {
    return (
        <div>
            {posts.map((article, index) => <GenPost article={article} key={index} />)}
        </div>
    )
}

export default GenPosts
