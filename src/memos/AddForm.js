import React,{Component} from 'react';

class AddForm extends Component{

    constructor(props){
        super(props);
        this.state = {
            value : ""
        }
    }

    render(){
        return(
            <div>
                <input type="text" size="20" value={this.state.value} required/>
                <button>add</button>
            </div>
        );
    }
}

export default AddForm;