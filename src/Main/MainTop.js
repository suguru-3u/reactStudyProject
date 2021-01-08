import React,{Component} from 'react';

class MainTop extends Component {
    h2 = {
        textAlign:"center"
    }

    p = {
        textAlign:"center"
    }

    render(){
        return(
            <div>
                <h2 style={this.h2}>Topページ</h2>
                <p style={this.p}>こんにちわ、こちらはBlogサイトです。Blogの投稿、編集、削除することができます。
                </p>
            </div>
        );
    }
}
export default MainTop