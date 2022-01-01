import styles from './style.module.css';
import React from "react";

interface IProps {
    closeModal: () => void;
}

const QuestionModal: React.FC<IProps> = ({closeModal}) => {
    return <div className={styles.wrapper}>
        <div className={styles.modal}>
            <div
                className={styles.close}
                onClick={closeModal}
            ></div>
        </div>
    </div>
};

export default QuestionModal;