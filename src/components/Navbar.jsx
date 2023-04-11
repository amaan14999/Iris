import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
        <span className="logo">Iris</span>
        <div className="user">
            <img src="https://images.unsplash.com/photo-1609010697446-11f2155278f0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" />
            <span>Amaan</span>
            <button>Logout</button>
        </div>
    </div>
  )
}

export default Navbar