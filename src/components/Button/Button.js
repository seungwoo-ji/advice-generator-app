import dice from '../../assets/icon-dice.svg';
import styles from './Button.module.css';

const Button = ({ onClick }) => {
  return (
    <button className={styles['dice-btn']} onClick={onClick}>
      <img src={dice} alt="dice" />
    </button>
  );
};

export default Button;
