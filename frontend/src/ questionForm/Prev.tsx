type Data = {
    name: string;
    number: number;
    gender: string;
    email: string;
    text: string;
};

type Props = {
    data: Data;
};

const Prev = ({ data }: Props) => {
    return (
        <div>
            <h2>入力内容の確認</h2>
            <p>名前：{data.name}</p>
            <p>年齢：{data.number}</p>
            <p>性別：{data.gender}</p>
            <p>メール：{data.email}</p>
            <p>ご意見：{data.text}</p>
        </div>
    );
};

export default Prev;
