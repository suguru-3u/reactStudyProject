import React ,{useState,useEffect} from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { BrowserRouter as Router, Route, Switch,Link,useParams} from 'react-router-dom';
import useReactRouter from 'use-react-router';
import firebase from 'firebase';

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
    const {idd} = useParams();
    const classes = useStyles();
    const { history, location, match } = useReactRouter();
    const liStyle = {
        textDecoration: 'none'
    }
    console.log(match.params.id);
    console.log(match);
    console.log(location);
    console.log(history);

    const [values,setValues] = useState({
        datas:[],
        title:"",
        body:""
    });

    const db = firebase.firestore();
    useEffect(() => {
        (async () => {
          const resTodo = await db.collection("bookerList").doc("booker").get();
          // stateに入れる
          const bookersdats = resTodo.data().bookers;
          setValues({
            datas:bookersdats,
            title:"",
            body:""
          });
        })()
      }, [])

    console.log(values.datas[match.params.id]);

    return(
        <Grid container spacing={3}>
            <Grid item xs={8} sm={6}>
                <Paper className={classes.paper}>
                    <h3>EditPage</h3>
                    <p>{match.params.id}</p>
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