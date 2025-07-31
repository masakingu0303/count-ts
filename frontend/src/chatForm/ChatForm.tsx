import { useState } from "react";
import ChatInput from "./ChatInput";
import ChatList from "./ChatList";

const ChatForm = () => {
    const [items, setItems] = useState([
        {
            id: 0,
            name: "管理者",
            text: "悪用禁止"
        },
        {
            id: 1,
            name: "管理者",
            text: "ニッネームは本名を控えてください"
        }
    ])

    const handleSubmit = (item: { name: string; text: string }) => {
        const maxId = items.length > 0 ? Math.max(...items.map((i) => i.id)) : 0;
        const newId = maxId + 1;
      
        setItems((prev) => [
          ...prev,
          {
            id: newId,
            name: item.name,
            text: item.text,
          },
        ]);
      };
      


    return (
        <div>
            <ChatList items={items} />
            <ChatInput handleSubmit={handleSubmit} />
        </div>

    )
}

export default ChatForm;