import React,{Component} from 'react';

class AddForm extends Component{

    constructor(props){
        super(props);
        this.state = {
          title:"",
          author:""
      }
      }
        render() {
          return (
            <div className="App">
              <p>タイトルと作者</p>
              <p>タイトル</p>
              <input type="text" name="title"/>
              <p>作者</p>
              <input type="text" name="author"/>
            </div>
          );
        }
      }
}

export default AddForm;