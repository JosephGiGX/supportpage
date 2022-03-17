import React from 'react'
import GetPost from './GetPost'

const GetPosts = ({ posts }) => {
    return (
        <div>
            {posts.map((article, index) => <GetPost article={article} key={index} />)}
        </div>
    )
}

export default GetPosts