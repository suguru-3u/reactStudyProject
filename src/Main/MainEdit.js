import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import {BrowserRouter as Router,Link} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

    const useStyles = makeStyles((theme) => ({
        root: {
        flexGrow: 1,
        },
        from: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
        },
        table: {
        minWidth: 650,
        },
        paper: {
        padding: theme.spacing(3),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        height:'130%'
        },
    }));

  
  export default function MainEdit(){
    const classes = useStyles();
      
    const liStyle = {
        textDecoration: 'none'
    }

    return(
        <Grid container spacing={3}>
            <Grid item xs={8} sm={6}>
                <Paper className={classes.paper}>
                    <h3>EditPage</h3>
                    <form className={classes.from} noValidate autoComplete="off" >
                        <TextField id="standard-basic" label="Title" name="title"  />
                        <TextField
                            id="standard-basic"
                            label="Body"
                            multiline
                            rows={4}
                            name="body"        
                        />
                        <Button variant="contained" type="submit">Update</Button>
                        <Button variant="contained" color="secondary"><Link to="/blog" style={liStyle}>Return</Link></Button>
                    </form>
                </Paper>
            </Grid>
           
        </Grid>
    );
}