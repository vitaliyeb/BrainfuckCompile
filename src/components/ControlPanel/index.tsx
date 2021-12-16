import styles from './style.module.css';
import {useState} from "react";
import classNames from "classnames";

const ControlPanel = () => {
    const [isShow, setIsShow] = useState(true);

    return <div className={classNames(styles.panelWrapper, {[styles.panelShow]: isShow})}>
        <div className={styles.actionsBar}>
            <button>Run</button>
            <button>Input parameters</button>
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