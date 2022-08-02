import React from "react";
import Image from "next/image";
import globalStore from "../../Store/globalStore";
import { observer } from "mobx-react";

const ChatBot = observer(() => {
  return (
    <>
      <div className="ChatBot" id="chatBot">
        <div className="msg">1</div>
        <Image
          src={"/assets/chat.png"}
          width="100%"
          height={"100%"}
          alt="ChatBot"
        />
      </div>
    </>
  );
});
export default ChatBot;
