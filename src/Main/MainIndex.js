import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

function createData(title, body) {
  return { title, body};
}

const rows = [
  createData('Frozen yoghurt', 'sample'),
  createData('Ice cream sandwich', 'sample'),
  createData('Eclair', 'sample'),
  createData('Cupcake', 'sample'),
  createData('Gingerbread', 'sample'),
];

export default function MainIndex(props){
    const classes = props.style

    return(
        <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
            <TableHead>
                <TableRow>
                    <TableCell>Title</TableCell>
                    <TableCell >Body</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {rows.map((row) => (
                    <TableRow key={row.title}>
                        <TableCell>{row.title}</TableCell>
                        <TableCell >{row.body}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
        </TableContainer>
    );
}