import React from "react";
export const chatContext = React.createContext({} as any);
export default function RoomProvider(props) {
  const getChatType = () => {
    return "1";
  };
  return (
    <chatContext.Provider
      value={{
        getChatType: getChatType,
      }}
    >
      {props.children}
    </chatContext.Provider>
  );
}
