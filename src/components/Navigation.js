import React from 'react'
import { NavLink } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import logo from '../images/logoWhite.jpg'
import './navigation.scss'



export default function Navigation() {
    return (
        <>
        <Navbar id="navbar" collapseOnSelect expand="md">
          <Navbar.Brand id="logo" href="#home"><span><img src={logo} alt="logo" style={{width: '150px'}}></img></span></Navbar.Brand>
          <Navbar.Toggle id="toggle" aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav id="navlink">
              <NavLink to='/createProject'>
                <Nav.Link id="nav" href="#create">My Projects</Nav.Link>
              </NavLink>
              <NavLink to='/project/:id'>
                <Nav.Link id="nav" eventKey={2} href="#today">Today</Nav.Link>
              </NavLink>
              <NavLink to='/'>
                <Nav.Link id="nav" href="#landing">Log out</Nav.Link>
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

            
        </>
    )
}
