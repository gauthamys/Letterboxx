import React, { Component } from 'react';
import {
    Container,
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    NavbarText
  } from 'reactstrap';
import AuthButton from './components/AuthButton';

const NavBar = ({ user }) => {
    return (
        <Navbar color='dark' className="fixed-top text-white">
            <Container>
            <NavbarBrand href='/'>
                <img src="https://a.ltrbxd.com/logos/letterboxd-mac-icon.png" style={{width:'auto',height:'70px'}} />
            </NavbarBrand>
            <NavbarText>Letterboxd</NavbarText>
            <Nav className='ml-auto'>
                <NavItem>
                    <NavLink className="text-white" href='/home'>Editor's Choice</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className="text-white" href='/movies'>Movies</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className="text-white" href='/profile'>Profile</NavLink>
                </NavItem>
                <NavItem>
                    <AuthButton user={user} />
                </NavItem>
            </Nav>
            </Container>
        </Navbar>
    )
}

export default NavBar;