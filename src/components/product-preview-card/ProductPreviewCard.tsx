import styles from './ProductPreviewCard.module.css';
import ProductImgMobile from '../../assets/images/image-product-mobile.jpg';
import ProductImgDesktop from '../../assets/images/image-product-desktop.jpg';
import Button from '../Button/Button';

const ProductPreviewCard: React.FC = () => {
  return (
    <div className={styles.product}>
      <div className={styles.header}>
        <img
          src={ProductImgDesktop}
          srcSet={`
          ${ProductImgMobile} 686w,
          ${ProductImgDesktop} 600w
          `}
          sizes='(min-width: 600px) 600px, 686px'
          alt='gabrielle channle perfume'
        />
      </div>
      <div className={styles.body}>
        <h4 className={styles.subtitle}>perfume</h4>
        <h1 className={styles.title}>Gabrielle Essence Eau De Parfum</h1>
        <p className={styles.text}>
          A Floral, solar and voluptuous interpretation composed by Olivier
          Polge, Perfumer-Creator for the House of
          <span className={styles.brandName}> chanel.</span>
        </p>
        <div className={styles.price}>
          <span className={styles.priceMain}>&#36;149.99</span>
          <span className={styles.priceDiscount}>&#36;169.99</span>
        </div>
        <Button />
      </div>
    </div>
  );
};

export default ProductPreviewCard;
