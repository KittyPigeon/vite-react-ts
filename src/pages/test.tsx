import React, { Component, useState, useEffect, useRef } from "react";

export default function Test() {
  const timerRef = useRef<NodeJS.Timeout>();
  useEffect(() => {
    // updateCount();
    return () => clearInterval(timerRef.current);
  }, []);
  const updateCount = () => {
    timerRef.current = setInterval(() => {
      setCount((count) => count + 1);
    }, 500);
  };
  const clear = () => {
    clearInterval(timerRef.current);
    setCount(0)
  };
  const add = () => {
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);

  };
  const add2 = async() => {
     setCount((count) =>{
        return count+1;
     });
    console.log('count值',count)
    setCount((count) => count + 1);
    setCount((count) => count + 1);
  };
  const [count, setCount] = useState(0);

  return (
    <div className="test-container">
      我是测试{count}
      <button
        onClick={() => {
          clear();
        }}
      >
        清空缓存
      </button>
      <button
        onClick={() => {
          updateCount();
        }}
      >
        继续
      </button>
      <button
        onClick={() => {
          add();
        }}
      >
        增加
      </button>
      <button
        onClick={() => {
          add2();
        }}
      >
        增加2
      </button>
    </div>
  );
}
