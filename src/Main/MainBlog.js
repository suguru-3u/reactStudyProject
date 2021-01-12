import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import MainBlogAdd from './MainBlogAdd';
import MainIndex from './MainIndex';

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

export default function FullWidthGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <Grid container spacing={0}>
            <Grid item xs={12} sm={3}>
            <Paper className={classes.paper}>
              <h3>Blog投稿</h3>
              <MainBlogAdd style={classes} />
            </Paper>
            </Grid>
            <Grid item xs={12} sm={9}>
            <Paper className={classes.paper}>
              <h3>Blog一覧</h3>
              <MainIndex style={classes}/>
            </Paper>
            </Grid>
        </Grid>
    </div>
  );
}
