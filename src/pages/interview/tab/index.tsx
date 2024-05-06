import React from "react";
import { useEffect,useState } from "react";
import './index.less'
export default function Tab() {
    const [tabs,setTabList]=useState<any[]>([
        {
            name:'体育',
            id:'sports'
        }
    ])
  useEffect(() => {
    console.log("组件挂载");
    return () => {
      console.log("组件卸载");
    };
  }, []);
  return <div className="tab-content">
    {
        tabs.map((item)=>{
            return <div className="tab-item" key={item.id}>{item.name}</div>
        })
    }
  </div>;
}
