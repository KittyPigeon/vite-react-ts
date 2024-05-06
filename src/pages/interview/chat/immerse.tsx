import React from "react";
import { chatContext } from "./context";

export default function Immerse() {
  const { getChatType } = React.useContext(chatContext);

  const reqeust = () => {
    console.log(getChatType());
  };
  return (
    <div>
      <button onClick={reqeust}>获取</button>
    </div>
  );
}
