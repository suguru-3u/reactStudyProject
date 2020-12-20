import React,{Component} from 'react';
import { connect } from 'react-redux';

class Item extends Component{
    th ={
        fontSize:"14pt",
        backgroundColor:"bule",
        color:"white",
        padding:"5px 10px",
        width:"50px"
    }
    td = {
        fontSize:"14pt",
        backgroundColor:"bule",
        color:"darkbule",
        padding:"5px 10px",
        boreder:"1px solid lightbule",
        minwidth:"300px"
    }
    data ={
        fontSize:"14pt",
        backgroundColor:"white",
        color:"darkbule",
        padding:"5px 10px",
        boreder:"1px solid lightbule",
        width:"80px"
    }
    render(){
        let d = this.props.value.created;
        let f = d.getHours() ;
        return(
            <tr><th style={this.th}>No,{this.props.index}</th>
                <td style={this.td}>{this.props.value.message}</td>
                <td style={this.td}>{f}</td>
            </tr>
        );
    }
}

export default connect()(Item);