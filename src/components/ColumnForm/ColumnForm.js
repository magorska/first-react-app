import styles from './ColumnForm.module.scss';
import { useState } from 'react';
import Button from '../Button/Button';

const ColumnForm = props => {
    const [title, setTitle] = useState('');
    const [icon, setIcon] = useState('');

    const TextInput = (props) => {
        return <input className={styles.input} value={props.value} onChange={props.onChange} placeholder={props.placeholder} type="text" />
    };

    const handleSubmit = e => {
        e.preventDefault();
        props.action({ title: title, icon: icon });
        setTitle('');
        setIcon('');
    };

    return (
        <form onSubmit={handleSubmit} className={styles.columnForm}>
            <span>Title:</span><TextInput />
            <span>Icon:</span><TextInput />
            <Button>Add column</Button>
        </form>
    );
};

export default ColumnForm;