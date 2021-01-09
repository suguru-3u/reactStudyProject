import React,{Component} from 'react';

class MainBlog extends Component {
    h2 = {
        textAlign:"center"
    }

    p = {
        textAlign:"center"
    }

    data = {
        title:'blog1',
        body:"公園に行った"
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
                            <th></th>
                        </tr>
                    </thead>
                </table>
            </div>
        );
    }
}
export default MainBlog