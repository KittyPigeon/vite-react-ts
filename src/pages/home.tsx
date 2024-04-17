import "./index.less";
import React, { useRef, useState, createRef, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
import { DatePicker } from 'antd';

import proTypes from "prop-types";
function Child(props) {
  console.log(props.children);
  return (
    <div>
      <div className="header">我是头</div>
      <div className="content">{props.children}</div>
      <div className="footer">我是脚</div>
    </div>
  );
}
function New() {
  return <div>我是新闻</div>;
}
function Sports() {
  return <div>我是体育</div>;
}
function Education() {
  return <div>我是教育</div>;
}
const _tabs = [
  {
    name: "新闻",
    element: New,
  },
  {
    name: "体育1",
    element: Sports,
  },
  {
    name: "教育",
    element: Education,
  },
];
function Tab(props) {
  const { onChange, tabs, itemType } = props;

  return (
    <ul className="flex items-center">
      {tabs.map((item, index) => {
        return (
          <li
            key={`i${index}`}
            onClick={() => {
              onChange(index);
            }}>
            {/* {item.name} */}
            {itemType(item)}
          </li>
        );
      })}
    </ul>
  );
}
function Home() {
//   const navigate = useNavigate();
  const [ActiveIndex, setActiveIndex] = useState(0);

  return (
    <div className="container flex text-3xl font-bold underline">
      <Child>
        <div>hello world</div>
      </Child>
      <Tab
        tabs={_tabs}
        itemType={(item)=><button>{item.name}</button>}
        onChange={(i) => {
          console.log(i);
          setActiveIndex(i);
        }}></Tab>
      <div className="content">{_tabs[ActiveIndex].element()}</div>
      <DatePicker></DatePicker>
    </div>
  );
}
Tab.proTypes = {
  children: proTypes.array,
};
export default Home;
