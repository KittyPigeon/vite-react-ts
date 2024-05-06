import React from "react";

export default function Upload(props) {

  const save = () => {
    props.upload({
        name:'宋江'
    })
  };
  return (
    <div>
      <button onClick={save}>上传</button>
    </div>
  );
}
