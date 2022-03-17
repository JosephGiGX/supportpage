import React from 'react';
import SearchCard from '../../API/backend/post/searchCard';

function SearchList({ posts }) {
                
    return (
        <div>
            {posts.map((article, index) => <SearchCard article={article} key={index} />)}
        </div>
    )
}

export default SearchList;