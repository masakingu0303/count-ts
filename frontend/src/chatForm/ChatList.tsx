type Item = {
    id: number;
    name: string;
    text: string;
  };
  
  type Props = {
    items: Item[];
    keyword: string;
  };
  
  const ChatList = ({ items, keyword }: Props) => {
    const highlight = (text: string) => {
      if (!keyword) return text;
      const regex = new RegExp(`(${keyword})`, 'gi');
      const parts = text.split(regex);
      return parts.map((part, index) =>
        part.toLowerCase() === keyword.toLowerCase() ? <mark key={index}>{part}</mark> : part
      );
    };
  
    return (
      <ul className="chat-list ">
        {items.map((item) => (
          <li key={item.id}>
            <strong>{highlight(item.name)}</strong>: {highlight(item.text)}
          </li>
        ))}
      </ul>
    );
  };
  
  export default ChatList;
  