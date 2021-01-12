import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import bloggAdd from './blogAdd'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import React, { useState } from 'react'

export default function blogindex(props) {
  const classes = props.style

  const [values,setValues] = setValues({
    title:"",
    body:""
  });

  
  function inputChange(e){
    const target = e.target;
    const name = target.name;
    setValues({...values,[name]:values});
  }


  return (
    <div>
        <form className={classes.from} noValidate autoComplete="off">
            <TextField id="standard-basic" label="Title" />
            <TextField
                id="standard-basic"
                label="Body"
                multiline
                rows={4}
            />
            <Button variant="contained" >投稿</Button>
            <Button variant="contained" color="secondary">リセット</Button>
        </form>
    </div>
  );
}
