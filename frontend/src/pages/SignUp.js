import React, {useContext} from 'react'
import AuthContext from '../context/AuthContext'
import { Link } from 'react-router-dom'
const SignUpPage = () => {
    
    return (
        <div>
            <form onSubmit={console.log('working')}>
                <input type="text" name="email" placeholder="Enter Email" />
                <input type="text" name="username" placeholder="Enter Username" />
                <input type="password" name="password" placeholder="Enter Password" />
                <input type="password" name="password" placeholder="Confirm Password" />
                <input type="submit"/>
            </form>
            
        </div>
    )
}

export default SignUpPage