import React, { useState, useEffect,useRef useImperativeHandle } from "react";
interface ICount {
  count: number;
}
const Count = React.forwardRef((props: ICount, ref) => {
  const pay = () => {
    console.log("支付");
  };
  // 使用useImperativeHandle将方法暴露给父组件
  useImperativeHandle(ref, () => ({
    pay,
  }));
  return <div className="count">我是{props.count}</div>;
});

export default Count;
