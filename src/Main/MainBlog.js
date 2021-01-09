import React,{Component} from 'react';

class MainBlog extends Component {
    h2 = {
        textAlign:"center"
    }

    p = {
        textAlign:"center"
    }

    data = [
        {title:'blog1',
        body:"公園に行った",},
        {title:"blog2",
        body:"海に行った"}]

    constructor(proos){
        super(proos);
        this.blogindex = this.blogindex.bind(this);
    }

    blogindex(){
        const data = this.data.map((value,index) => {
            <tr><th>value.title</th><th>index</th></tr>
        });
        return data      
    }

    render(){
        return(
            <div>
                <h2 style={this.h2}>Blogページ</h2>
                <p style={this.p}>blog投稿
                </p>
                <table>
                    <thead>
                        <tr>
                            <th>Title</th><th></th><th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            {this.blogindex}     
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}
export default MainBlog