import React, {useState, useEffect, useContext} from 'react'
import AuthContext from '../context/AuthContext'

const HomePage = () => {
    let [tournaments, setTournaments] = useState([])
    let {authTokens, logoutUser} = useContext(AuthContext)

    useEffect(()=> {
        getNotes()
    }, [])


    let getNotes = async() =>{
        let response = await fetch('http://127.0.0.1:8000/api/tournaments/', {
            method:'GET',
            headers:{
                'Content-Type':'application/json',
                'Authorization':'Bearer ' + String(authTokens.access)
            }
        })
        let data = await response.json()

        if(response.status === 200){
            setTournaments(data)
        }else if(response.statusText === 'Unauthorized'){
            logoutUser()
        }
        
    }

    return (
        <div>
            <p>You are logged to the home page!</p>


            <ul>
                {tournaments.map(tournament => (
                    <li key={tournament.id} >{tournament.name}</li>
                    
                ))}
                {tournaments.map(tournament => (
                    <li key={tournament.id} >{tournament.city}</li>
                    
                ))}
                {tournaments.map(tournament => (
                    <li key={tournament.id} >{tournament.address}</li>
                    
                ))}
                {tournaments.map(tournament => (
                    <li key={tournament.id} >{tournament.price}</li>
                    
                ))}
                {tournaments.map(tournament => (
                    <li key={tournament.id} >{tournament.date}</li>
                    
                ))}

            </ul>
        </div>
    )
}

export default HomePage
