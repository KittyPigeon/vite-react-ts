import React from "react";
import { text } from "stream/consumers";

export default class Test extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = {
      text: "hello world",
    };
    this.setData=this.setData.bind(this)
  }
  setData(){
    console.log(this)
  }
  changeText() {
    console.log(this)
    // this.setState({
    //     text:'hello world'
    // })
  }
  add(){
    console.log(this)
  }
  reduce=()=>{
    console.log(this)
  }
  render() {
    return (
      <div>
        {this.state.text}
        <button onClick={this.changeText.bind(this)}>修改</button>
        <button onClick={this.setData}>设置data</button>
        <button onClick={()=>this.add()}> +</button>
        <button onClick={()=>this.reduce()}> -</button>
      </div>
    );
  }
}
