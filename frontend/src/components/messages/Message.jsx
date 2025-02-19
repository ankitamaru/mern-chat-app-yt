import React from "react";
import { useAuthContext } from "../../context/AuthContext";
import useConversation from "../../zustand/useConversation";
import { extractTime } from "../../utils/extractTime";

const Message = ({ message }) => {
  const { authUser } = useAuthContext();
  const { selectedConvseration } = useConversation();
  const fromMe = message.senderId === authUser._id;
  const chatClassName = fromMe ? "chat.end" : "chat-start";
  const profilePic = fromMe
    ? authUser.profilePic
    : selectedConvseration?.profilePic;
  const bubbleBgColor = fromMe ? "bg-blue-500" : "";
  const formattedTime = extractTime(message.createdAt);

  const shakeClass = message.shouldShake ? "shake" : "";

  return (
    <div className={`chat ${chatClassName}`}>
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img src={profilePic} alt="" />
        </div>
      </div>
      <div
        className={`chat-bubble text-white pb-2 ${bubbleBgColor} ${shakeClass}`}
      >
        {message.message}
      </div>
      <div className={"chat-footer opacity-50 text-xs flex gap-1 items-center"}>
        {formattedTime}
      </div>
    </div>
  );
};

export default Message;

// STARTER CODE SNIPPET
// const Message = () => {
//     return (
//       <div className="chat chat-end">
//         <div className="chat-image avatar">
//           <div className="w-10 rounded-full">
//             <img src="" alt="" />
//           </div>
//         </div>
//         <div className={"chat-bubble text-white bg-blue-500"}>
//           Hi! What is up?
//         </div>
//         <div className={"chat-footer opacity-50 text-xs flex gap-1 items-center"}>
//           12:42
//         </div>
//       </div>
//     );
//   };

//   export default Message;
