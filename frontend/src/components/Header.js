import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import AuthContext from '../context/AuthContext'

const Header = () => {
    let {user, logoutUser} = useContext(AuthContext)
    return (
        <div>
            <Link to="/home" >Home</Link>
            <span> | </span>
            <Link to="/about" >About</Link>
            <span> | </span>
            {user ? <Link  onClick={console.log('my tournement link')} to='/tournaments'>MyTournaments</Link> : null}
            
            <span> | </span>
            {user ? (
                 <Link  onClick={logoutUser} to='/login'>Logout</Link>
            ): (
                <Link to="/login" >Login</Link>
            )}
            
           
            {user &&   <p>Hello {user.username}</p>}
           
        </div>
    )
}

export default Header
