import React,{Component} from 'react';

class MainBlog extends Component {
    h2 = {
        textAlign:"center"
    }

    p = {
        textAlign:"center"
    }

    tableStyle ={
        margin:"0px",
        padding:"0px",
        width:"100%",
    }


    data = [
        {title:'blog1',
        body:"公園に行きました！"},    
        {title:"blog2",
        body:"海に行きました"}
    ];

    constructor(proos){
        super(proos);
        this.blogindex = this.blogindex.bind(this);
    }

    blogindex(){
        console.log(this.data);
        const dataBlog = this.data.map((value,index) =>
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
                <h2 style={this.h2}>Blogページ</h2>
                <p style={this.p}>blog投稿
                </p>
                {this.blogindex()}
            </div>
        );
    }
}
export default MainBlog