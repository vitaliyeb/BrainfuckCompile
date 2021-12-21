import styles from './style.module.css';
import React, {useState} from "react";
import classNames from "classnames";
import Compile from './../../utils/Compile';

interface IProps {
    code: string
}

const ControlPanel: React.FC<IProps> = ({ code }) => {
    const [isShow, setIsShow] = useState(true);

    const runCode = () => {
        new Compile(code).run();
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

        </div>
    </div>
}

export default ControlPanel;