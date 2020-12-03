import React from 'react'
import { Link } from 'react-router-dom'
import { Background, GlobalStyle, TimeStamp } from './style'
import Button from "react-bootstrap/Button"
import logo from '../images/logoWhite.jpg'


export default function LandingPage({assignNewQuoteIndex, selectedQuote}) {    
    
    return (
        <div id="landing">
            <GlobalStyle />
            <Background>
            <TimeStamp>
                <h4>{selectedQuote.quote}</h4>
                <Button variant="primary" style={{width: '200px'}} onClick={assignNewQuoteIndex}>New Quote</Button>
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
