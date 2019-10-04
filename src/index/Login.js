import React , { Component } from "react";
import Card from '@material-ui/core/Card';
import CardContent from "@material-ui/core/CardContent";
import TextField from "@material-ui/core/TextField";
import withStyles from '@material-ui/core/styles/withStyles';

import Grid from '@material-ui/core/Grid';

const styles = {
    cardfields :{
        paddin : '1%'
    }
}

class Login extends Component {

    componentDidMount() {
    
    }
    render(){
        const {classes} = this.props;
        return (
            <div>
                <Card>
                    <CardContent>
                        <TextField className={classes.cardfields} placeholder="Email" label="Email" variant="outlined" fullWidth/>
                        <TextField className={classes.cardfields} placeholder="password" label="Password" type="password" variant="outlined" fullWidth/>
                    </CardContent>
                </Card>
            </div>
        )
    }
}

export default withStyles(styles)(Login);