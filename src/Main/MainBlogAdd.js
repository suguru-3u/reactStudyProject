import React,{Component} from 'react';

class MainBlogAdd extends Component{

    tableStyle ={
        margin:"0px",
        padding:"0px",
        width:"80%",
    }

    data = [
        {title:'blog1',
        body:"公園に行きました！"},    
        {title:"blog2",
        body:"海に行きました"}
    ];

    constructor(props){
        super(props);
        this.state = {
            datas:[],
            title: "",
            body: ""
        };
        this.doChange = this.doChange.bind(this);
        this.doAction = this.doAction.bind(this);
        this.blogindex = this.blogindex.bind(this);
    }

    doChange(event){
        this.setState({[event.target.name]:event.target.value}); 
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
        const dataBlog = this.state.datas.map((value,index) =>
            <tr key={index}><th>{index + 1}</th><th>{value.title}</th><th>{value.body}</th></tr>
        );
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
            <div className="App">
                <h2>Blog投稿</h2>
                    <form onSubmit={this.doAction} >
                        <p>Title</p>
                        <input type="text" name="title"  onChange={this.doChange} value={this.state.title} />
                        <p>Body</p>
                        <input type="text" name="body"  onChange={this.doChange} value={this.state.body} />
                        <br />
                        <input type="submit" value="投稿"/>
                    </form>
                <p>投稿したBlog</p>
                {this.blogindex()}
            </div>
        );  
    };
}
export default MainBlogAdd