import React,{Component} from "react";

class MainBlogEdit extends Component{

    constructor(props){
        super(props);
    }

    render(){
        const params = this.props.match
        const id = parseInt(params.params.id, 10)
       console.log(params);
       console.log(id);
        return(
            <div>
                <h2>BlogEdit</h2>
                <p>Title</p><br />
                {/* <input type="text" value={data.title}/> */}
                <p>Body</p><br />
                {/* <input type="textarea" value={data.body}/> */}
            </div>
        );
    }
}

export default MainBlogEdit;