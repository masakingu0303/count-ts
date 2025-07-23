import { useState } from "react";


type Data = {
    name: string;
    number: number;
    gender: string;
    email: string;
    text: string;
  };
  
  type Props = {
    setData: React.Dispatch<React.SetStateAction<Data>>;
  };
  

const Form = ({setData}:Props ) => {
    const [item, setItem] = useState({
        name: "",
        number: 0,
        gender: "",
        email: "",
        text: "",
    });

    const handleChenge = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setItem({
            ...item, [name]: value
        })
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (item.text.length > 50) {
            alert('ご意見は50文字以内にしてください')
        } else {
            setData(item);
            alert('内容を送信しました！！')
        }
    }

    

    return (
        <form className="question-containar" onSubmit={handleSubmit}>
            <h2>アンケートフォーム</h2>

            <label>
                名前
                <input type="text" name="name" placeholder="名前" value={item.name} onChange={handleChenge} />
            </label>

            <div className="question-row">
                <label className="question-label">
                    年齢
                    <input type="number" name="number" value={item.number} onChange={handleChenge} />
                </label>

                <label className="question-label">
                    性別
                    <div className="question-radio">
                        <label><input type="radio" name="gender" value="男" checked={item.gender === "男"} onChange={handleChenge} /> 男</label>
                        <label><input type="radio" name="gender" value="女" checked={item.gender === "女"} onChange={handleChenge} /> 女</label>
                        <label><input type="radio" name="gender" value="その他" checked={item.gender === "その他"} onChange={handleChenge} /> その他</label>
                    </div>
                </label>
            </div>


            <label>
                メールアドレス
                <input type="email" name="email" placeholder="sdada@asdd.com" value={item.email} onChange={handleChenge} />
            </label>

            <label>
                ご意見
                <textarea rows={4} name="text" value={item.text} onChange={handleChenge} />
            </label>

            <button type="submit">送信</button>
        </form>
    )
}

export default Form;