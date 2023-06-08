import React from "react";
import Form from "./Form";
import { useMessages } from "../../../hooks/useMessage";

const Comments = () => {
  const [messages] = useMessages();

  return (
    <div className="p-5 border rounded-lg max-w-6xl">
      <h3 className="font-bold text-xl text-center mb-3">Comments</h3>
      <div className="p-5 border rounded-lg mb-5 overflow-y-scroll h-2/5">
        {messages.map((item, i) => (
          <div key={item._id} className="border-b py-2">
            <h3 className="font-bold text-xl">{item.userName}</h3>
            <p>{item.userMessage}</p>
          </div>
        )
        )}
      </div>
      <Form />
    </div>
  );
};

export default Comments;
