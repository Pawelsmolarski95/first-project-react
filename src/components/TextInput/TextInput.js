import styles from './TextInput.module.scss';

const TextInput = props => {
    return (<input className={styles.input} value={props.searchValue}  onChange={props.onChange} placeholder={props.placeholder} type="text" />);
};

export default TextInput;