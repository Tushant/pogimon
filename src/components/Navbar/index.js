import React from 'react';
import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import FormControl from 'react-bootstrap/lib/FormControl';
import Glyphicon from 'react-bootstrap/lib/Glyphicon';
import './navbar.css';

class NavigationBar extends React.Component {
  render() {
    return (
        <Navbar inverse staticTop>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">Fiverr Clone</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Navbar.Form pullLeft>
                <FormGroup validationState="success">
                  <FormControl type="text" placeholder="Find Services"/>
                  <FormControl.Feedback>
                    <Glyphicon glyph="search" />
                  </FormControl.Feedback>
                </FormGroup>
            </Navbar.Form>
            <Navbar.Text pullRight>
              <Glyphicon glyph="stats" />
              <Glyphicon glyph="comment" />
              <Glyphicon glyph="bullhorn" />
            </Navbar.Text>
          </Navbar.Collapse>
        </Navbar>
    );
  }
}

export default NavigationBar;
