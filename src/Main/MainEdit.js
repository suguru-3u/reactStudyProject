import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import {BrowserRouter as Router,Link} from 'react-router-dom';

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

  const classes = useStyles();

export default function MainEdit(){

    const liStyle = {
        textDecoration: 'none'
    }

    return(
        <Grid container spacing={0}>
            <Grid item xs={12} sm={6}>
                <Paper className={classes.paper}>
                    <h3>EditPage</h3>
                    <form className={classes.from} noValidate autoComplete="off" onSubmit={handleSubmit}>
                    <TextField id="standard-basic" label="Title" name="title" onChange={handleCgangeChange} value={props.values.title}/>
                    <TextField
                        id="standard-basic"
                        label="Body"
                        multiline
                        rows={4}
                        name="body"
                        onChange={handleCgangeChange}
                        value={props.values.body}
                    />
                    <Button variant="contained" type="submit">Update</Button>
                    <Button variant="contained" color="secondary"><Link to="/" style={liStyle}>Return</Link></Button>
                    </form>
                </Paper>
            </Grid>
           
        </Grid>
    );
}