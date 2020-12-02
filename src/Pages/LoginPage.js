import React from 'react'
import LoginForm from '../components/LoginForm'
import { Route } from 'react-router-dom'
import { Background, GlobalStyle } from './style'

export default function LoginPage() {
    return (
        <>
            <GlobalStyle/>
            <Background>
                <LoginForm />
            </Background>
        </>
    )
}
