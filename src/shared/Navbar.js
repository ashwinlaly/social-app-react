import React, { Component } from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

const Link = require('react-router-dom').Link;

class Navbar extends Component {
    render () {
        return (
            <div>
                <AppBar >
                    <Toolbar>
                        <Button color="inherit" component={Link} to="/"> Home </Button>
                        <Button color="inherit" component={Link} to="/login"> Login </Button>
                        <Button color="inherit" component={Link} to="/signup"> Signup </Button>
                    </Toolbar>
                </AppBar>
            </div>
        )
    }
}

export default Navbar;