import React, {Component} from 'react';
import {Container, Nav, NavItem, NavLink} from 'reactstrap';

import {NavLink as RouterNavLink} from "react-router-dom";

class Navigation extends Component {
    render() {
        return (
           <Container>
                <Nav tabs>
                    <NavItem>
                        <NavLink  tag={RouterNavLink} to="/todo" exact>ToDoList</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink  tag={RouterNavLink} to="/movies" exact>Movies</NavLink>
                    </NavItem>
                </Nav>
           </Container>
        );
    }
}

export default Navigation;