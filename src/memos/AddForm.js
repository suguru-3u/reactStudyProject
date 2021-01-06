import React,{Component} from 'react';

class AddForm extends Component{

    constructor(props){
        super(props);
        this.state = {
          lists:[],
          title:"",
          author:"",
          number: -1
      }
      this.handleChange = this.handleChange.bind(this);
    }

    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({
          lists: [
              ...this.state.lists,
              { 
                title: this.state.title,
                author: this.state.author
              }],
          title:"",
          author:"",
      });
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

              {this.state.lists.map((l,i)=>(
                <div key={l.title}>
                    <table>
                      <tr>
                        <th>Title</th>
                        <th>Author</th>
                      </tr>
                      <tr key={i}>
                        <td>
                          title:{l.title}
                        </td>
                        <td>
                         author:{l.author}
                        </td>
                      </tr>
                    </table>
                </div>        
                ))}
          </div>
        );
    }
}

export default AddForm;