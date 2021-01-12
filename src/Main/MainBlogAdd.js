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

  const [values,setValues] = setValues([{
    datas:[],
    title:"",
    body:""
  }]);

  
  const handleCgangeChange = event => {
    const target = event.target;
    const name = target.name;
    setValues({[name]:values});
  }

  const handleSubmit = event => {
    event.preventDefault();
    console.log(values.title);
    console.log(values.body);
    setValues({
      datas:[
        ...datas,
        {
          title:values.title,
          body:values.body,
        }
      ],
      values.title:"",
      values.body:""
    })
  }




  return (
    <div>
        <form className={classes.from} noValidate autoComplete="off" onSubmit={handleSubmit}>
            <TextField id="standard-basic" label="Title" name="title" onChange={handleCgangeChange}/>
            <TextField
                id="standard-basic"
                label="Body"
                multiline
                rows={4}
                name="body"
                onChange={handleCgangeChange}
            />
            <Button variant="contained" onClick={() => setValues}>投稿</Button>
            <Button variant="contained" color="secondary">リセット</Button>
        </form>
    </div>
  );
}
