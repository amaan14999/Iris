import React from 'react'

const Search = () => {
  return (
    <div className='search'>
        <div className="searchform">
            <input type="text" placeholder='Search'/>
        </div>
        <div className="userChat">
            <img src="https://images.unsplash.com/photo-1609010697446-11f2155278f0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" />
            <div className="userChatInfo">
                <span>Jane</span>
            </div>
        </div>
    </div>
  )
}

export default Search