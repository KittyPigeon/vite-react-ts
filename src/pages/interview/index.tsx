import { useEffect, useState, useRef } from "react";
import {useNavigate} from 'react-router-dom';
import Test from "./test";
import Upload from "./upload";
import Chat from "./chat";
import Tab from "./tab";
export default function Interview() {
  const navigate=useNavigate();
  const [count, setCount] = useState(0);
  const uploadRef = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    console.log("页面加载");
    return () => {
      console.log("页面卸载");
    };
  }, []);

  useEffect(() => {}, []);

  const add = () => {
    setCount(count + 1);
  };
  const minus = () => {
    setCount(count - 1);
  };
  const upload = () => {
    console.log(uploadRef.current);
  };
  const parentClickFun = () => {
    console.log("React 事件：父元素事件监听！");
  };
  const childClickFun = (e) => {
    e.stopPropagation();
    console.log(e);
    console.log("React 事件：子元素事件监听！");
  };

  const toggleTab = () => {
    setShow(!show);
  };
  return (
    <div className="interview">
      <p>{count}</p>
      <button onClick={add}>+</button>
      <button onClick={minus}>-</button>
      <button ref={uploadRef} onClick={upload}>
        上传
      </button>

      <div onClick={parentClickFun}>
        <div onClick={childClickFun}>分析事件执行顺序</div>
      </div>
      <Test></Test>
      <Upload
        upload={(data) => {
          console.log(data);
        }}
      ></Upload>
      <Chat></Chat>

      {/* 导航栏显隐 */}
      <h5>生命周期</h5>
      <button onClick={toggleTab}>控制导航栏</button>
      {show ? <Tab></Tab> : null}

      {/* 路由 */}
      <h5>路由</h5>
      <button onClick={()=>navigate('/')}>首页</button>
      
    </div>
  );
}
