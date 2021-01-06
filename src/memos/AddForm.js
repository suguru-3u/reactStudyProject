import React,{Component} from 'react';

class AddForm extends Component{

    constructor(props){
        super(props);
        this.state = {
          title:"",
          author:""
      }
      this.handleChange = this.handleChange.bind(this);
    }

    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value})
      }

    render() {
        return (
            <div className="App">
            <p>タイトルと作者</p>
              <p>タイトル</p>
              <input type="text" name="title" onChange={this.handleChange} value={this.state.title}/>
              <p>作者</p>
              <input type="text" name="author" onChange={this.handleChange} value={this.state.author}/>
              <button onClick={this.handleSubmit}>
                send
              </button>
          </div>
        );
    }
}

export default AddForm;