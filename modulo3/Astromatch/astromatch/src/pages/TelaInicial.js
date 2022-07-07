import React, { useEffect } from 'react'
import './TelaInicial.css';
import { useState } from 'react'
import axios from 'axios';

export default function TelaInicial(props) { 
    const [profile, setProfile] = useState([])
    const [profileId, setProfileId] = useState("")

    useEffect(() =>{
        GetProfileToChoose()
    }, [])

    const GetProfileToChoose = () =>{
        axios
        .get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:gustavo/person")
        .then((resp) =>{
            setProfile(resp.data.profile)
            console.log(resp)
        })
        .catch((err) =>{
            console.log(err)
        })
    }


    return (
        <div className='Container'>
            <header className='Header'>
                <span>❤️</span>
                <h2>Astro Match</h2>        
                <button onClick={props.goToMatches}>Matches</button>
            </header>

            <main className='Main'>
                <img src={profile.photo} />
            </main>
            <div>
              <p>{profile.name}, {profile.age}</p>
                <p>{profile.bio}</p>
            </div>

            <footer className='Footer'>
                <button>Like</button>
                <button>Dislike</button>
            </footer>
        </div>
    )
}