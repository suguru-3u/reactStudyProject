import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import React, { useState } from 'react'

export default function Blogindex(props) {
  const classes = props.style

  const handleCgangeChange = event => {
    props.setValues({...props.values, [event.target.name]: event.target.value});
  }

  const handleSubmit = event => {
    props.handleSubmit(event);
  };

  const reset = () => {
    props.reset()
  };

  return (
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
        <Button variant="contained" type="submit">submit</Button>
        <Button variant="contained" color="secondary" onClick={reset}>reset</Button>
    </form>
  );
}
