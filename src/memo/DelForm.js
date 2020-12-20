import React,{Component} from 'react';
import { connect } from 'react-redux';
import { addMemo } from "./Store";

class DelForm extends Component{
    constructor(props){
        super(props);
        this.sate = {
            number:0
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
        let action = addMemo(this.state.number);
        this.props.dispatch(action);
        this.setState({
            number:0
        })
    }

    render(){
        let n = 0;
        let item = this.props.data.map((value) => {
            <option key={n} value={n++}>
                {value.message.substring(0,10)}
            </option>
        });
        return(
            <div>
                <p>{this.props.message}</p>
                <form onSubmit={this.doAction}>
                    <select onChange={this.doChange} defaultValue="-1">
                        {items}
                    </select>
                    <input type="submit" value="Del" />
                </form>
            </div>
        );
    }
}

export default connect ((state) => state)(DelForm)