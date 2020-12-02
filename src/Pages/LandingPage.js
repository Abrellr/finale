import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { Background, GlobalStyle, TimeStamp } from './style'
import Button from "react-bootstrap/Button"
import logo from '../images/logoWhite.jpg'
//import { useState, useEffect } from "react-dom"


export default function LandingPage({quotes, assignNewQuoteIndex, selectedQuote}) {
    console.log(quotes)
    
    
    return (
        <div id="landing">
            <GlobalStyle />
            <Background>
            <TimeStamp>
                <h4>Here you should see random quote</h4>
                <Button variant="primary" style={{width: '200px'}} onClick={() => randomQuoteHandler(quotes.quote)}>New Quote</Button>
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
