import styles from './Button.module.css';
import IconCartSvg from '../../assets/images/icon-cart.svg';

const Button: React.FC = () => {
  return (
    <button className={styles.btn}>
      <img src={IconCartSvg} alt='cart' className={styles.icon} />
      <span className={styles.text}>Add to Cart</span>
    </button>
  );
};

export default Button;
