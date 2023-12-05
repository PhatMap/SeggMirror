import React from "react";

const Home = () => {
  const sendMessage = () => {
    const channel = new BroadcastChannel("myChannel");

    channel.postMessage({ value: "FAQ" });

    channel.close();
    console.log("Sent");
  };

  const openLocalWindow = () => {
    const newWindow = window.open(
      "http://localhost:5173/Mirror",
      "_blank",
      "width=500,height=400,toolbar=no,menubar=no,scrollbars=no"
    );

    newWindow.onload = () => {
      sendMessage();
    };
  };

  return (
    <div>
      <button onClick={openLocalWindow}>Open</button>
    </div>
  );
};

export default Home;
