import { useState } from "react";
import Form from "./Form";
import Prev from "./Prev";
import PrevButton from "./PrevButton";

type Data = {
    name: string;
    number: number;
    gender: string;
    email: string;
    text: string;
};

const QuestionForm = () => {
    const [prev, setPrev] = useState<boolean>(true);
    const [data, setData] = useState<Data>({
        name: "",
        number: 0,
        gender: "",
        email: "",
        text: "",
    })


    return (
        <>
            {prev ? <Form setData={setData}/> : <Prev data={data}/>}
            <PrevButton prev={prev} setPrev={setPrev} />
        </>
    );
};

export default QuestionForm;
