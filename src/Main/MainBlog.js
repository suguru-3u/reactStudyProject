import React,{Component} from 'react';

class MainBlog extends Component {
    h2 = {
        textAlign:"center"
    }

    p = {
        textAlign:"center"
    }

    render(){
        return(
            <div>
                <h2 style={this.h2}>Blogページ</h2>
                <p style={this.p}>blog投稿
                </p>
            </div>
        );
    }
}
export default MainBlog