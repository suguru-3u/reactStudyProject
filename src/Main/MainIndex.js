import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import {BrowserRouter as Router,Link} from 'react-router-dom';


export default function MainIndex(props){

    const classes = props.style
    const bookers = props.data
    const liStyle = {
        textDecoration: 'none'
    }

    return(
        <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
            <TableHead>
                <TableRow>
                    <TableCell>Index</TableCell>
                    <TableCell>Title</TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {bookers.datas.map((value,index) => (
                    <TableRow>
                        <TableCell>{index + 1}</TableCell>
                        <TableCell>{value.title}</TableCell>
                        <TableCell>
                            <Button variant="contained"><Link to="/" style={liStyle}>Edit</Link></Button>
                        </TableCell>
                        <TableCell>
                            <Button variant="contained" color="secondary" onClick={() => props.bookerDelete(index)}>delete</Button>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
        </TableContainer>
    );
}