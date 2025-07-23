type Props = {
    prev: boolean;
    setPrev: React.Dispatch<React.SetStateAction<boolean>>;
}

const PrevButton = ({ prev, setPrev }: Props) => {


    return (
        <div>
            <button onClick={() => setPrev(prev => !prev)}>{prev ? "入力内容確認" : "入力画面に戻る"}</button>
        </div>


    )
}

export default PrevButton;