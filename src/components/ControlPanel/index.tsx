import styles from './style.module.css';
import React, {useMemo, useRef, useState} from "react";
import classNames from "classnames";
import interpret, { Interpret } from "../../utils/interpret";

interface IProps {
    code: string
}

const ControlPanel: React.FC<IProps> = ({ code }) => {
    const [isShow, setIsShow] = useState(true);
    const lastCodeInter = useRef('');
    const [{ result, error, ms }, setInterData] = useState<ReturnType<Interpret>>({result: '', error: null, ms: 0});


    const runCode = () => {
        if(lastCodeInter.current !== code) {
            setInterData(interpret(code));
            lastCodeInter.current = code;
        }
    }

    return <div className={classNames(styles.panelWrapper, {[styles.panelShow]: isShow})}>
        <div className={styles.actionsBar}>
            <button
                className={classNames(styles.primaryButton)}
                onClick={runCode}
            >
                Run
            </button>
            <button
                className={classNames(styles.primaryButton)}
            >
                Input parameters
            </button>
            <button
                onClick={() => setIsShow(!isShow)}
                className={classNames(styles.viewsButton, {[styles.viewsButtonShow]: isShow})}
            />
        </div>
        <div className={classNames(styles.content)}>
            { !error && <p className={styles.result}>{ result }</p> }

            {result}
            { error && <p className={styles.error}>{ error }</p> }
        </div>
    </div>
}

export default ControlPanel;