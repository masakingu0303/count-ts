type Props = {
    search: string;
    setSearch: React.Dispatch<React.SetStateAction<string>>;
  };
  
  const ChatSearch = ({ search, setSearch }: Props) => {
    return (
      <input className="search-input"
        type="text"
        placeholder="検索ワード"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    );
  };
  
  export default ChatSearch;
  