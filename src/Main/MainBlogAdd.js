import React,{Component} from 'react';

class MainBlogAdd extends Component{

    constructor(props){
        super(props);
        this.state = {
            datas:[],
            title: "",
            body: ""
        }
        this.doChange = this.doChange.bind(this);
        this.doAction = this.doChange.bind(this);
        this.blogindex = this.blogindex.bind(this);
    }

    doChange(event){
        this.setState(
            {[event.target.name]:event.target.value}
        ); 
    }

    doAction(event){
        event.preventDefault();
        this.setState({
            datas:[
                ...this.state.datas,
                {
                    title:this.state.title,
                    body:this.state.body   
                }
            ],
            title:"",
            body:""
        });
    }

    blogindex(){
        console.log(this.data);
        const dataBlog = this.state.datas.map((value,index) =>
            <tr key={index}><th>{index + 1}</th><th>{value.title}</th><th>{value.body}</th></tr>
        );
        console.log(dataBlog);
        return(
            <table style={this.tableStyle}>
                <thead>
                    <tr>
                        <th>Index</th><th>Title</th><th>Body</th>
                    </tr>
                </thead>
                <tbody>
                    {dataBlog}
                </tbody>
            </table>
        )    
    }

    render(){
        return(
            <div>
                <h2>Blog投稿</h2>
                <form>
                    <table>
                        <tbody>
                            <tr>
                                <td>Title</td><td><input type="text" name="title" required onChange={this.doChange}/></td>
                            </tr>
                            <tr>
                                <td>Body</td><td><input type="textarea" name="body" required onChange={this.doChange} /></td>
                            </tr>
                        </tbody>
                    </table>
                    <button onClick={this.doAction}>投稿</button>
                </form>
                <p>投稿したBlog</p>
                {this.blogindex}
            </div>
        );  
    };
}
export default MainBlogAdd