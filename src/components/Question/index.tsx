import styles from './style.module.css';
import ReactDOM from "react-dom";
import QuestionModal from "../QuestionModal";
import {useState} from "react";

const Question = () => {
    const [modalStatus, setModalStatus] = useState(false);
    const toggleModal = (status: boolean) => setModalStatus(status);

    return (<>
        <div onClick={() => toggleModal(true)} className={styles.question}>?</div>
        { modalStatus && ReactDOM.createPortal(<QuestionModal closeModal={()=>toggleModal(false)} />, document.body) }
    </>)
};

export default Question;