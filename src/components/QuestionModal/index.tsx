import styles from './style.module.css';
import React from "react";

interface IProps {
    closeModal: () => void;
}

const QuestionModal: React.FC<IProps> = ({closeModal}) => {
    return <div data-testid='questionModal' className={styles.wrapper}>
        <div className={styles.modal}>
            <div
                className={styles.close}
                onClick={closeModal}
            />
            {
                Array.from({ length: 128 }).map((n, k) => (<p
                    key={k}
                    className={styles.cell}
                >
                    {k}: <span>{ String.fromCharCode(k)}</span>
                </p>))
            }
        </div>
    </div>
};

export default QuestionModal;