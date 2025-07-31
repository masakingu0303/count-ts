type Item = {
    id: number;
    name: string;
    text: string;
}

type Props = {
    items: Item[];
}

const ChatList = ({ items }: Props) => {
    return (
        <>
            <ul className="chat-list">
                {items.map((item) => (
                    <li key={item.id}>
                        {item.id}: <strong>{item.name}</strong> {item.text}
                    </li>
                ))}
            </ul>

        </>
    )
}

export default ChatList;