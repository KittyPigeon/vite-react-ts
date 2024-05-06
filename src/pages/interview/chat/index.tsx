import React from "react";
import ChatProvider from "./context";
import Immerse from "./immerse";
export default function Room(props) {
  return (
    <ChatProvider>
      <Immerse></Immerse>
    </ChatProvider>
  );
}
