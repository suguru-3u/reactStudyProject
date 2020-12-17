import React,{Component} from 'react';
import './App.css';
import Rect from './Rect';

class App extends Component{
  // msgStyle1 = {
  //   fontSize:"24pt",
  //   color:"#900",
  //   margin:"20px 0px",
  //   padding:"5px",
  //   borderBottom:"2px solid #900"
  // }
  // msgStyle2 = {
  //   fontSize:"24pt",
  //   color:"white",
  //   backgroundColor:"#900",
  //   margin:"20px 0px",
  //   padding:"5px",
  //   borderBottom:"2px solid #900"
  // }
  // btnstyle = {
  //   fontSize:"20pt",
  //   padding:"0px 10px"
  // }

  data = [
    "This is list sample",
    "これは...",
    "モンスターではない神だ！"
  ];

  msgStyle = {
    fontSize:"20pt",
    color:"#900",
    margin:"20px 0px",
    padding:"5px",
  }

  constructor(props){
    super(props);
    this.state = {
      list:this.data
      // counter:0,
      // msg:'count start',
      // flg:true,
    };
    // this.doAction = this.doAction.bind(this);
    // let timer = setInterval(() => {
    //   this.setState((state) => ({
    //     msg: state.msg + "!"
    //   }));
    // },1000);
  }

  // doAction(){
  //   this.setState((state) => ({
  //     counter: state.counter + 1 ,
  //     msg: state.counter ,
  //     flg: !state.flg
  //   }));
  // }

  render(){
    return <div>
        <h1>React</h1>
        <h2 style={this.msgStyle}>show list.</h2>
        <List title="サンプル・リスト" data={this.data} />
    </div>;
  }
}

class List extends Component{
  number = 1;

  title = {
    fontSize:"20pt",
    color:"blue",
    fontWeight:"bold"
  };

  render(){
    let data = this.props.data;
    return (
      <div>
          <p style={this.title}>{this.props.title}</p>
          <ul>
            {data.map((item) => 
              <Item number={this.number++} value={item} key={this.number} />
            )}
          </ul>
      </div>
    );
  }
}

class Item extends Component{
  li = {
    listStyleType:"square",
    fontSize:"16pt",
    color:"#06",
    margin:"0px",
    padding:"0px",
  }
  num = {
    fontWeight:"bold",
    color:"red"
  }

  render(){
    return(
      <li style={this.li}>
        <span style={this.num}>[{this.props.number}]</span>
        {this.props.value}
      </li>
    );
  }
}

export default App;
