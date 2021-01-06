import React,{Component} from 'react';

class AddForm extends Component{

    constructor(props){
        super(props);
        this.title = props.a 
    }

    render(){
        return(
            <div>
                <input type="text" size="20" value="{this.title}" required/>
            </div>
        );
    }
}

export default AddForm;