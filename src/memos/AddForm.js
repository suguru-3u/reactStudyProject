import React,{Component} from 'react';

class AddForm extends Component{

    constructor(props){
        super(props);
        this.state = {
            title : ""
            ,body: ""
            ,a:""
            ,b:""
        }
        this.doChangeTitle = this.doChangeTitle.bind(this);
        this.doChangeBody = this.doChangeBody.bind(this);
        this.doAction = this.doAction.bind(this);
    }

    doChangeTitle(event){
        this.setState({
            a: event.target.value
        });
    }

    doChangeBody(event){
        this.setState({
            b: event.target.value
        });
    }

    doAction(e){
        e.prevetDefaultt();
        this.setState({
            title: this.state.a
            ,body : this.state.b
            ,a: ""
            ,b: ""
        });
    }

    render(){
        return(
            <div>
                <form>
                    <input type="text" size="40"  onChange={this.doChangeTitle}/>
                    <input type="text" size="50"   onChange={this.doChangeBody}/>
                    <button onClick={this.doAction}>add</button>
                </form>
                
                <ul>
                    <span>{this.state.title}</span>
                    <li>{this.state.body}</li>
                </ul>
            </div>
        );
    }
}

export default AddForm;