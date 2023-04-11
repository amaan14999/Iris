import React from 'react'

const Login = () => {
  return (
    // Container for the form
    <div className="formContainer">

        {/* Wrapper for the form */}
        <div className="formWrapper">

            {/* Application Name and form title */}
            <span className="logo">Iris</span>
            <span className="title">Login</span>
            <form>
                <input type="email" placeholder="Email"/>
                <input type="password" placeholder="Password"/>

                <button>Sign in</button>
            </form>

            <p>Create account</p>
        </div>
    </div>
  )
}

export default Login