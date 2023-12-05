import React from "react";
import Draggable from "react-draggable";
import { useEffect, useState } from "react";

const Mirror = () => {
  const [position, setPosition] = useState({
    x: window.innerWidth / 4,
    y: 0,
  });

  const [message, setMessage] = useState("");

  const channel = new BroadcastChannel("myChannel");

  useEffect(() => {
    channel.onmessage = (event) => {
      setMessage(event.data.value);
    };

    window.addEventListener("beforeunload", () => {
      channel.close();
    });
  }, []);

  useEffect(() => {
    var oldX = window.screenX || window.screenLeft;
    var oldY = window.screeny || window.screenTop;

    const update = () => {
      var newX = window.screenX || window.screenLeft;
      var newY = window.screeny || window.screenTop;

      const deltaX = newX - oldX;
      const deltaY = newY - oldY;

      if (deltaX !== 0 || deltaY !== 0) {
        setPosition({ x: position.x - deltaX, y: position.y - deltaY });
        return () => cancelAnimationFrame(interval);
      }
      console.log("Recursive running")
      requestAnimationFrame(update);
    };

    const interval = requestAnimationFrame(update);
    console.log("Recursive Stop");
  }, [position]);

  const handleDrag = (e, ui) => {
    setPosition({ x: ui.x, y: ui.y });
    console.log(ui.x, ui.y);
  };

  return (
    <div>
      <Draggable position={position} onDrag={handleDrag}>
        <h1>
          {position.x} {position.y}
        </h1>
      </Draggable>
      {message}
    </div>
  );
};

export default Mirror;
