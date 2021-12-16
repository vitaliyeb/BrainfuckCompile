import React, {useState} from "react";
import styles from './style.module.css';
import 'codemirror/lib/codemirror.css';
import 'codemirror/mode/brainfuck/brainfuck';
import 'codemirror/theme/base16-dark.css';
import {Controlled as CodeMirror} from 'react-codemirror2'

interface IProps {
    value: string;
    setValue: React.Dispatch<React.SetStateAction<string>>;
}

const Editor: React.FC<IProps> = ({ value, setValue }) => {

    return <div className={styles.editorWrapper}>
        <CodeMirror
            value={value}
            onBeforeChange={(editor, data, value) => {
                setValue(value);
            }}
            options={{
                mode: 'brainfuck',
                theme: 'base16-dark',
                lineNumbers: true
            }}
        />
    </div>
}

export default Editor;