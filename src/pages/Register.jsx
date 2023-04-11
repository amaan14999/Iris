import React from 'react'
import Add from "../img/addAvatar.png"

const Register = () => {
  return (
    // Container for the form
    <div className="formContainer">

        {/* Wrapper for the form */}
        <div className="formWrapper">

            {/* Application Name and form title */}
            <span className="logo">Iris</span>
            <span className="title">Register</span>
            <form>
                <input type="text" placeholder="Name"/>
                <input type="email" placeholder="Email"/>
                <input type="password" placeholder="Password"/>

                <input style={{display:"none"}} type="file" id="file"/> {/* Hidden input for Avatar file upload by hiding this field and adding a label*/}
                <label for="file">
                    <img src={Add} alt="" />
                    <span>Add an avatar</span>
                </label>

                <button>Sign Up</button>

            </form>
            <p>Sign in instead</p>
        </div>
    </div>
  )
}

export default Register