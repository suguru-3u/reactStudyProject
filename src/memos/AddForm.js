import React,{Component} from 'react';

class AddForm extends Component{

    constructor(props){
        super(props);
        this.state = {
            value : ""
            ,message: ""
        }
        this.doChange = this.doChange.bind(this);
        this.doAction = this.doAction.bind(this);
    }

    doChange(event){
        this.setState({
            value: event.target.value
        });
    }

    doAction(event){
        event.prevetDefaultt();
        this.setState({
            message: this.state.value
            ,value : ""
        });
    }

    render(){
        return(
            <div>
                <input type="text" size="20" value={this.state.value} required onChange={this.doChange}/>
                <button onClick={this.doAction}>add</button>
                <ul>
                    <li>{this.state.message}</li>
                </ul>
            </div>
        );
    }
}

export default AddForm;