import React from 'react'
import LoginForm from '../components/LoginForm'
import { Route } from 'react-router-dom'
import { Background, GlobalStyle } from './style'
import SignUp from '../components/SignUp'

export default function LoginPage() {
    return (
        <>
            <GlobalStyle/>
            <Background>
                <LoginForm />
                <Route path="/register" 
                render={() => (
                    <SignUp />
                )}/> 
            </Background>
        </>
    )
}
