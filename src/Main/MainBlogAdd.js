import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import React, { useState } from 'react'

export default function Blogindex(props) {
  const classes = props.style

  const [values,setValues] = useState({
    datas:[],
    title:"",
    body:""
  });

  const handleCgangeChange = event => {
    setValues({...values, [event.target.name]: event.target.value});
    console.log(values.title);
    console.log(values.body);
  }

  const handleSubmit = event => {
    event.preventDefault();
    console.log(values.title);
    console.log(values.body);
    console.log(1);
    setValues({
      datas:[
        ...values.datas,
        {
          title:values.title,
          body:values.body,
        }
      ],
      title:"",
      body:""
    })
    console.log(values.datas);
  };

  const reset = event => {
    setValues({
      title:"",
      body:""
    })
  };

  return (
    <form className={classes.from} noValidate autoComplete="off" onSubmit={handleSubmit}>
        <TextField id="standard-basic" label="Title" name="title" onChange={handleCgangeChange} value={values.title}/>
        <TextField
            id="standard-basic"
            label="Body"
            multiline
            rows={4}
            name="body"
            onChange={handleCgangeChange}
            value={values.body}
        />
        <Button variant="contained" type="submit">submit</Button>
        <Button variant="contained" color="secondary" onClick={reset}>reset</Button>
    </form>
  );
}
