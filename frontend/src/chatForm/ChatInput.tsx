import { useState } from "react";

type Props = {
  handleSubmit: (item: { name: string; text: string }) => void;
};

const ChatInput = ({ handleSubmit }: Props) => {
  const [item, setItem] = useState({ name: "", text: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setItem((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (item.name.trim() && item.text.trim()) {
      handleSubmit(item);
      setItem({ name: "", text: "" });
    }
  };

  return (
    <form className="chat-form-containar" onSubmit={onSubmit}>
      <input type="text" name="name" placeholder="ニックネーム" value={item.name} onChange={handleChange} />
      <textarea name="text" placeholder="メッセージ" value={item.text} onChange={handleChange} />
      <input type="submit" value="投稿" />
    </form>
  );
};

export default ChatInput;
