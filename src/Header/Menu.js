import React from 'react';
import {
  BrowserRouter as Router,
  Link
} from 'react-router-dom';
import Button from '@material-ui/core/Button';

export default function Menu(){

    const liStyle = {
        color: "white",
        marginRight: "25px"
    }

    return(
        <div>
            <Button color="inherit"><Link to="/" style={liStyle}>TOPページ</Link></Button>
            <Button color="inherit"><Link to="/"><Link to="/blog" style={liStyle}>投稿一覧</Link></Link></Button>
        </div>  
    );
}
