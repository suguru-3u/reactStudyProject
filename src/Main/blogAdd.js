import React from 'react';
import TextField from '@material-ui/core/TextField';

export default function bloggAdd(props){
    const classes = props.style;

    return(
        <div>
            <form className={classes.form} noValidate autoComplete="off">
                <TextField
                    id="standard-number"
                    label="Number"
                    type="text"
                    InputLabelProps={{
                    shrink: true,
                    }}
                >
                </TextField>
            </form>
        </div>
    )
    
}