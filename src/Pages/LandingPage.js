import React from 'react'
import { Link } from 'react-router-dom'
import { Background, GlobalStyle, TimeStamp } from './style'
import Button from "react-bootstrap/Button"
import logo from '../images/logoWhite.jpg'
import MotivationQuote from '../components/MotivationQuote'
//import { useState, useEffect } from "react-dom"


export default function LandingPage() {

    //const [quotes, setQuotes] = useState(null)

    // const getQuote = (props) => {   
    // fetch("https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json")
    //   .then((res) => res.json())
    //   .then((data) => {
    //     const randomNum = Math.floor(Math.random() * data.length) 
    //     setQuotes(data[randomNum]) 
    //   })
    //   .catch((error) => console.log('no quotes'))
    // };
    // useEffect(() => {
    //     getQuote();
    // }, [])

    return (
        <div id="landing">
            <GlobalStyle />
            <Background>
            <TimeStamp>
                <MotivationQuote />
                <br/>
                <img src={logo} alt="logo" style={{width: '300px'}}></img>
                <br/>
                <Link to ='/login'>
                <Button variant="primary" style={{width: '200px'}}>Log In</Button>
                </Link>
                <br/>
                <Link to ='/register'>
                <Button variant="primary" style={{width: '200px'}}>Sign Up</Button>
                </Link>
            </TimeStamp>
            </Background>
        </div>
    )
}
