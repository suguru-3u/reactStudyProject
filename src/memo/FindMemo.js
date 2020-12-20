import React,{Component} from 'react';
import { connect } from 'react-redux';
import { findMemo } from "./Store";

class FindForm extends Component{
    constructor(props){
        super(props);
        this.sate = {
            message:""
        }
        this.doChange = this.doChange.bind(this);
        this.doAction = this.doAction.bind(this);
    }

    doChange(e){
        this.setState({
            message: e.target.value
        });
    }

    doAction(e){
        e.prevetDefaultt();
        let action = findMemo(this.state.find);
        this.props.dispatch(action);
    }

    render(){
        return(
            <div>
                <p>{this.props.message}</p>
                <form onSubmit={this.doAction}>
                    <input type="text" onChange={this.doChange} value={this.state.message}/>
                    <input type="submit" value="Find" />
                </form>
            </div>
        );
    }
}

export default connect ((state) => state)(FindForm)