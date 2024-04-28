import React, {Component} from 'react'
import {Button, Container, Form, FormControl, Nav, Navbar} from 'react-bootstrap'
import logo from './img.png'
import "./Header.css"
import { BrowserRouter as Router, Routes,  Route, Link } from 'react-router-dom';

import Home from '../Pages/Home';
import Menu from '../Pages/Menu';
import Stuff from '../Pages/Stuff';
import Enter from '../Pages/Enter';


export default class Header extends Component{
    render()
    {
        return(
            <>
                <Navbar sticky ="top" collapseOnSelect expand="md" bg ="dark" variant= "dark">
                    <Container>
                        <Navbar.Brand href="/" >
                            <img
                                src = {logo}
                                height = '40'
                                width = '40'
                                className="d-inline-block align-top"
                                alt ="Logo"
                            />

                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls = "responsive-navbar-nav"/>
                        <Navbar.Collapse id = "responsive-navbar-nav">
                            <Nav className="mr-auto">
                                <Nav.Link href="/">Home</Nav.Link>
                                <Nav.Link href="/menu">Menu</Nav.Link>
                                <Nav.Link href="/stuff">Stuff</Nav.Link>
                                <Nav.Link href="/enter>">Enter</Nav.Link>

                            </Nav>
                            <Form className='d-flex'>
                                <FormControl
                                    type="text"
                                    placeholder="Search"
                                    ClassName="mr-sm-2"
                                />
                                <Button variant ="outline-info" className="ml-2"> Search</Button>

                            </Form>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                <Router>
                    <Routes>
                        <Route exact path="/" element={<Home/>} />
                        <Route exact path="/menu" element={<Menu/>} />
                        <Route exact path="/stuff" element={<Stuff/>} />
                        <Route exact path="/enter" element={<Enter/>} />
                    </Routes>

                </Router>


            </>
        );
    }

}