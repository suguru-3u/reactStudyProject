import React,{Component} from 'react';
import { Link } from 'react-router-dom'

class MainBlogAdd extends Component{

    tableStyle ={
        margin:"0px",
        padding:"0px",
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
            body: "",
            viewedit:true,
            editnumber:""
        };
        this.doChange = this.doChange.bind(this);
        this.doAction = this.doAction.bind(this);
        this.doEditAction = this.doEditAction.bind(this);
        this.blogindex = this.blogindex.bind(this);
        this.blogDelete = this.blogDelete.bind(this);
        this.editview = this.editview.bind(this);
        this.viewChange = this.viewChange.bind(this);
    }

    doChange(event){
        this.setState({[event.target.name]:event.target.value}); 
    }

    doEditChange(event){
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

    doEditAction(event){
        event.preventDefault();
        const datas_copy = this.state.datas.slice();
        datas_copy[this.state.editnumber] = {
            title:this.state.title,
            body:this.state.body
        }
        this.setState({
            datas: datas_copy,
            title:"",
            body:""
        });        
    }

    blogindex(){
        const blogindex = this.state.datas.map((value,index) =>
            <tr key={index}>
                <th>{index + 1}</th>
                <th>{value.title}</th>
                <th><input type="button" value="Edit" onClick={() => this.editview(index)}/></th>
                <th><input type="button" value="Delete" onClick={() => this.blogDelete(index)}/></th>
            </tr>
        );
        const blogedit = this.state.editnumber
        return(
            <table style={this.tableStyle}>
                <thead>
                    <tr>
                        <th>Index</th><th>Title</th><th></th><th></th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.viewedit ? (
                        blogindex
                    ) : (
                        <tr key={blogedit}>
                            <th>{blogedit + 1}</th>
                            <th>{this.state.datas[blogedit].title}</th>
                            <th>{this.state.datas[blogedit].body}</th>
                            <th onClick={this.viewChange}><button>Return</button></th>
                        </tr>
                    )}     
                </tbody>
            </table>
        )    
    }

    blogDelete(index){
        this.state.datas.splice(index,1);
        this.setState({datas: this.state.datas});
    }

    viewChange(){
        this.setState({viewedit:!this.state.viewedit});
    }

    editview(number){
        this.setState({editnumber:number});
        this.viewChange();
    }

    render(){
        return(
            <div className="App">
                {this.state.viewedit ? (
                    <h2>BlogIndex</h2>
                ) : (
                    <h2>BlogEdit</h2>
                )}     
                {this.state.viewedit ? (
                    <form onSubmit={this.doAction} >
                        <p>Title</p>
                        <input type="text" name="title"  onChange={this.doChange} value={this.state.title} required/>
                        <p>Body</p>
                        <input type="text" name="body"  onChange={this.doChange} value={this.state.body} required/>
                        <br />
                        <input type="submit" value="投稿"/>
                     </form>
                ) : (
                    <form onSubmit={this.doEditAction} >
                        <p>Title</p>
                        <input type="text" name="title"  onChange={this.doChange} value={this.state.datas[this.state.editnumber].title} required/>
                        <p>Body</p>
                        <input type="text" name="body"  onChange={this.doChange} value={this.state.datas[this.state.editnumber].body} required/>
                        <br />
                        <input type="submit" value="投稿"/>
                    </form>
                )}     
                {this.blogindex()}
            </div>
        );  
    };
}
export default MainBlogAdd